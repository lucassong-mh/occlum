#include <stdio.h>
#include <string.h>
#include <time.h>
#include <stdbool.h>
#include <stdlib.h>
#include <iostream>
#include <chrono>
#include <vector>
#include <string>
#include <algorithm>
#include <unistd.h>
#include <fcntl.h>

using namespace std;

const long long KiB = 1024;
const long long MiB = KiB * 1024;
const long long GiB = MiB * 1024;

const int block_size = KiB * 4;
// 50 * GiB
const long long disk_total_size = 10 * GiB;

int main(int argc, char *argv[])
{
	// /dev/sworn_disk
	char *disk_path = argv[1];
	// /MSR-Cambridge/*.csv
	string trace_dir = "";
	char *trace_file = argv[2];
	string trace_path = trace_dir.append(trace_file);

	if (disk_path == nullptr || trace_file == nullptr)
	{
		cout << "Wrong input! arg1(disk_path) | arg2(trace_file)" << endl;
		return -1;
	}
	cout << "Disk path: " << disk_path << endl;
	cout << "Trace path: " << trace_path << endl;

	if (freopen(trace_path.c_str(), "r", stdin) == nullptr)
	{
		cout << "Open " << disk_path << " failed!" << endl;
		return -1;
	}

	int file = 0;
	if ((file = open(disk_path, O_RDWR | O_CREAT | O_DIRECT)) < 0)
	{
		cout << "Open " << disk_path << " failed!" << endl;
		return -1;
	}

	if ((file = ftruncate(file, disk_total_size)) < 0)
	{
		cout << "Truncate " << disk_path << " failed!" << endl;
		return -1;
	}
	// fsync(file);

	long long total_r_size = 0;
	long long total_w_size = 0;
	long long total_r_latency = 0;
	long long total_w_latency = 0;
	long long total_latency = 0;
	long long line_cnt = 0;
	char line[1000];
	// char rw_buf[MiB * 4];

	// Parse trace file line by line
	// Format:
	// Timestamp			,Hostname	,DiskNumber	,Type,	Offset		,Size	,ResponseTime
	// 128166477394345573	,hm			,1			,Read,	383496192	,32768	,113736
	while (scanf("%s", line) != EOF)
	{
		line_cnt += 1;
		if (line_cnt % 1000000 == 0)
		{
			cout << "Parse over one million lines." << endl;
			// cout << "Parse over one thousand lines." << endl;
		}

		string ss = line;

		// Timestamp
		int pos = ss.find(",");
		long long timestamp = atoll(ss.substr(0, pos).c_str());
		// cout << timestamp << ",";

		// Hostname
		ss = ss.substr(pos + 1, ss.size() - pos);
		pos = ss.find(",");
		string hostname = ss.substr(0, pos);
		// cout << hostname << ",";

		// DiskNumber
		ss = ss.substr(pos + 1, ss.size() - pos);
		pos = ss.find(",");
		int disknum = atoi(ss.substr(0, pos).c_str());
		// cout << disknum << ",";

		// Type
		ss = ss.substr(pos + 1, ss.size() - pos);
		pos = ss.find(",");
		string rw_type = ss.substr(0, pos);
		// cout << rw_type << ",";

		// Offset
		ss = ss.substr(pos + 1, ss.size() - pos);
		pos = ss.find(",");
		long long lba = atoll(ss.substr(0, pos).c_str());
		// cout << lba << ",";
		// HACK
		if (lba % block_size != 0)
		{
			lba = ((lba / block_size) + 1) * block_size;
		}
		// long long new_lba = lba - (lba / disk_total_size) * disk_total_size;
		lba = lba % disk_total_size;
		if (lba > disk_total_size)
		{
			cout << "LBA[" << lba << "] exceeds disk_total_size[" << disk_total_size << "]" << endl;
			return -1;
		}

		// Size
		ss = ss.substr(pos + 1, ss.size() - pos);
		pos = ss.find(",");
		long long rw_size = atoll(ss.substr(0, pos).c_str());
		// cout << rw_size << ",";
		// HACK
		if (rw_size % block_size != 0)
		{
			rw_size = ((rw_size / block_size) + 1) * block_size;
		}

		if (lba + rw_size > disk_total_size)
		{
			lba = disk_total_size - rw_size;
		}

		// ResponseTime
		ss = ss.substr(pos + 1, ss.size() - pos);
		long long response_time = atoll(ss.c_str());
		// cout << response_time << endl;

		// cout << "HACK lba: " << lba << ", HACK rw_size: " << rw_size << endl;

		// char rw_buf[rw_size];
		void *rw_buf;
		if (posix_memalign(&rw_buf, 4096, rw_size) != 0)
		{
			cout << "posix_memalign failed" << endl;
			return -1;
		}
		auto start_time = std::chrono::high_resolution_clock::now();

		lseek(file, lba, SEEK_SET);

		int ret = 0;
		if (rw_type == "Read")
		{
			ret = read(file, rw_buf, rw_size);
			total_r_size += rw_size;
		}
		else if (rw_type == "Write")
		{
			// cout << "Write size: " << rw_size << ", offset: " << lba << endl;
			// cout << "Total Write size: " << total_w_size << endl;
			ret = write(file, rw_buf, rw_size);
			total_w_size += rw_size;
		}
		else
		{
			cout << "Wrong Read/Write Type! " << rw_type << endl;
			return -1;
		}
		if (ret != rw_size)
		{
			cout << "Read/Write [size: " << rw_size << ", ret: " << ret << "] error on Line: " << line << " errno: " << errno << endl;
			return -1;
		}

		auto end_time = std::chrono::high_resolution_clock::now();
		auto elapsed_time = (std::chrono::duration_cast<std::chrono::microseconds>(end_time - start_time)).count();
		if (rw_type == "Read")
		{
			total_r_latency += elapsed_time;
		}
		else if (rw_type == "Write")
		{
			total_w_latency += elapsed_time;
		}
		free(rw_buf);
	}
	cout << "read cost: " << (double)total_r_latency / 1000.0 / 1000.0 << " seconds" << endl;
	cout << "write cost: " << (double)total_w_latency / 1000.0 / 1000.0 << " seconds" << endl;
	total_latency = total_r_latency + total_w_latency;
	cout << "read+write cost: " << (double)total_latency / 1000.0 / 1000.0 << " seconds" << endl;

	auto start_time = std::chrono::high_resolution_clock::now();

	fsync(file);
	// fdatasync(file);
	// sync();
	close(file);

	auto end_time = std::chrono::high_resolution_clock::now();
	auto elapsed_time = (std::chrono::duration_cast<std::chrono::microseconds>(end_time - start_time)).count();
	cout << "fsync+close cost: " << (double)elapsed_time / 1000.0 / 1000.0 << " seconds" << endl;

	total_latency += elapsed_time;

	cout << "Trace Test Finished! Total lines: " << line_cnt << endl;
	double total_r_size_mb = (double)total_r_size / (double)MiB;
	double total_w_size_mb = (double)total_w_size / (double)MiB;
	cout << "Total Read size: " << total_r_size_mb << " MiB, "
		 << "Total Write size: " << total_w_size_mb << " MiB" << endl;
	double total_rw_size_mb = total_r_size_mb + total_w_size_mb;
	cout << "Total size: " << total_rw_size_mb << " MiB" << endl;
	double total_latency_sec = (double)total_latency / 1000.0 / 1000.0;
	cout << "Total latency: " << total_latency_sec << " seconds" << endl;
	cout << "Bandwidth: " << total_rw_size_mb / total_latency_sec << "MiB/s" << endl;

	fclose(stdin);
	return 0;
}
