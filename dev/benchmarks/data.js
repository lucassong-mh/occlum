window.BENCHMARK_DATA = {
  "lastUpdate": 1677757928766,
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
      }
    ]
  }
}