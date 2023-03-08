window.BENCHMARK_DATA = {
  "lastUpdate": 1678317776612,
  "repoUrl": "https://github.com/lucassong-mh/occlum",
  "entries": {
    "FIO Benchmark on AsyncSFS and JinDisk": [
      {
        "commit": {
          "author": {
            "email": "1498430017@qq.com",
            "name": "Shaowei Song",
            "username": "lucassong-mh"
          },
          "committer": {
            "email": "1498430017@qq.com",
            "name": "Shaowei Song",
            "username": "lucassong-mh"
          },
          "distinct": true,
          "id": "5c1a14d49a554fa42873d64e051823711ab4b8b8",
          "message": "[benchmark ci] Test ASYNC_FS_FIO_Test",
          "timestamp": "2023-03-02T19:40:59+08:00",
          "tree_id": "6fb5b0d637332370614cd37712ebde561de543dd",
          "url": "https://github.com/lucassong-mh/occlum/commit/5c1a14d49a554fa42873d64e051823711ab4b8b8"
        },
        "date": 1677757927042,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sequential Write Throughput",
            "value": 119,
            "unit": "MiB/s",
            "extra": "seqwrite"
          },
          {
            "name": "Random Write Throughput",
            "value": 150,
            "unit": "MiB/s",
            "extra": "randwrite"
          },
          {
            "name": "Sequential Read Throughput",
            "value": 111,
            "unit": "MiB/s",
            "extra": "seqread"
          },
          {
            "name": "Random Read Throughput",
            "value": 85.3,
            "unit": "MiB/s",
            "extra": "randread"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "1498430017@qq.com",
            "name": "Shaowei Song",
            "username": "lucassong-mh"
          },
          "committer": {
            "email": "1498430017@qq.com",
            "name": "Shaowei Song",
            "username": "lucassong-mh"
          },
          "distinct": true,
          "id": "ef7749946487bc9e184d9fe38e427ae045ac71e5",
          "message": "Test JinDisk CI",
          "timestamp": "2023-03-09T00:10:54+08:00",
          "tree_id": "37fd1d0c54b98c64657418af49960ac04dee8725",
          "url": "https://github.com/lucassong-mh/occlum/commit/ef7749946487bc9e184d9fe38e427ae045ac71e5"
        },
        "date": 1678292396369,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sequential Write Throughput",
            "value": 196,
            "unit": "MiB/s",
            "extra": "seqwrite"
          },
          {
            "name": "Random Write Throughput",
            "value": 148,
            "unit": "MiB/s",
            "extra": "randwrite"
          },
          {
            "name": "Sequential Read Throughput",
            "value": 157,
            "unit": "MiB/s",
            "extra": "seqread"
          },
          {
            "name": "Random Read Throughput",
            "value": 150,
            "unit": "MiB/s",
            "extra": "randread"
          }
        ]
      }
    ],
    "Sysbench Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Zheng, Qi",
            "username": "qzheng527",
            "email": "huaiqing.zq@antgroup.com"
          },
          "committer": {
            "name": "volcano",
            "username": "volcano0dr",
            "email": "volcano.dr@hotmail.com"
          },
          "id": "386e968ccb08bdd763e1915eafc39d8fb9df2226",
          "message": "[libos] Enable backtrace for memory allocation failure",
          "timestamp": "2023-01-29T02:52:47Z",
          "url": "https://github.com/lucassong-mh/occlum/commit/386e968ccb08bdd763e1915eafc39d8fb9df2226"
        },
        "date": 1677968180157,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Threads Minimum latency",
            "value": 0.08,
            "unit": "ms",
            "extra": "min"
          },
          {
            "name": "Threads Average Latency",
            "value": 72.3,
            "unit": "ms",
            "extra": "avg"
          },
          {
            "name": "Threads Maximum Latency",
            "value": 14192.82,
            "unit": "ms",
            "extra": "max"
          },
          {
            "name": "Thread 95th Percentile Latency",
            "value": 287.38,
            "unit": "ms",
            "extra": "per95"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zheng, Qi",
            "username": "qzheng527",
            "email": "huaiqing.zq@antgroup.com"
          },
          "committer": {
            "name": "volcano",
            "username": "volcano0dr",
            "email": "volcano.dr@hotmail.com"
          },
          "id": "386e968ccb08bdd763e1915eafc39d8fb9df2226",
          "message": "[libos] Enable backtrace for memory allocation failure",
          "timestamp": "2023-01-29T02:52:47Z",
          "url": "https://github.com/lucassong-mh/occlum/commit/386e968ccb08bdd763e1915eafc39d8fb9df2226"
        },
        "date": 1678317775793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Threads Minimum latency",
            "value": 0.08,
            "unit": "ms",
            "extra": "min"
          },
          {
            "name": "Threads Average Latency",
            "value": 46.61,
            "unit": "ms",
            "extra": "avg"
          },
          {
            "name": "Threads Maximum Latency",
            "value": 563.29,
            "unit": "ms",
            "extra": "max"
          },
          {
            "name": "Thread 95th Percentile Latency",
            "value": 240.02,
            "unit": "ms",
            "extra": "per95"
          }
        ]
      }
    ],
    "FIO Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Zheng, Qi",
            "username": "qzheng527",
            "email": "huaiqing.zq@antgroup.com"
          },
          "committer": {
            "name": "volcano",
            "username": "volcano0dr",
            "email": "volcano.dr@hotmail.com"
          },
          "id": "386e968ccb08bdd763e1915eafc39d8fb9df2226",
          "message": "[libos] Enable backtrace for memory allocation failure",
          "timestamp": "2023-01-29T02:52:47Z",
          "url": "https://github.com/lucassong-mh/occlum/commit/386e968ccb08bdd763e1915eafc39d8fb9df2226"
        },
        "date": 1677971352432,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sequential Write Throughput",
            "value": 34.7,
            "unit": "MiB/s",
            "extra": "seqwrite"
          },
          {
            "name": "Random Write Throughput",
            "value": 20.5,
            "unit": "MiB/s",
            "extra": "randwrite"
          },
          {
            "name": "Sequential Read Throughput",
            "value": 203,
            "unit": "MiB/s",
            "extra": "seqread"
          },
          {
            "name": "Random Read Throughput",
            "value": 208,
            "unit": "MiB/s",
            "extra": "randread"
          }
        ]
      }
    ],
    "Iperf3 Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Zheng, Qi",
            "username": "qzheng527",
            "email": "huaiqing.zq@antgroup.com"
          },
          "committer": {
            "name": "volcano",
            "username": "volcano0dr",
            "email": "volcano.dr@hotmail.com"
          },
          "id": "386e968ccb08bdd763e1915eafc39d8fb9df2226",
          "message": "[libos] Enable backtrace for memory allocation failure",
          "timestamp": "2023-01-29T02:52:47Z",
          "url": "https://github.com/lucassong-mh/occlum/commit/386e968ccb08bdd763e1915eafc39d8fb9df2226"
        },
        "date": 1677971762105,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sender Average Rate",
            "value": 4172,
            "unit": "Mbits/sec",
            "extra": "sender"
          },
          {
            "name": "Receiver Average Rate",
            "value": 4172,
            "unit": "Mbits/sec",
            "extra": "receiver"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zheng, Qi",
            "username": "qzheng527",
            "email": "huaiqing.zq@antgroup.com"
          },
          "committer": {
            "name": "volcano",
            "username": "volcano0dr",
            "email": "volcano.dr@hotmail.com"
          },
          "id": "386e968ccb08bdd763e1915eafc39d8fb9df2226",
          "message": "[libos] Enable backtrace for memory allocation failure",
          "timestamp": "2023-01-29T02:52:47Z",
          "url": "https://github.com/lucassong-mh/occlum/commit/386e968ccb08bdd763e1915eafc39d8fb9df2226"
        },
        "date": 1678317371811,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sender Average Rate",
            "value": 3758,
            "unit": "Mbits/sec",
            "extra": "sender"
          },
          {
            "name": "Receiver Average Rate",
            "value": 3758,
            "unit": "Mbits/sec",
            "extra": "receiver"
          }
        ]
      }
    ]
  }
}