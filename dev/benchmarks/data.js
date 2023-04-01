window.BENCHMARK_DATA = {
  "lastUpdate": 1680388880136,
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
          "id": "d0655d41563c6129fd8eff74c00bf917cdf21509",
          "message": "Test new benchmark ci",
          "timestamp": "2023-03-23T10:24:31+08:00",
          "tree_id": "ffafae79e3b8202ad5e10f5334d279bc01287881",
          "url": "https://github.com/lucassong-mh/occlum/commit/d0655d41563c6129fd8eff74c00bf917cdf21509"
        },
        "date": 1679540358814,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sequential Write Throughput",
            "value": 54.8,
            "unit": "MiB/s",
            "extra": "seqwrite"
          },
          {
            "name": "Random Write Throughput",
            "value": 41.5,
            "unit": "MiB/s",
            "extra": "randwrite"
          },
          {
            "name": "Sequential Read Throughput",
            "value": 309,
            "unit": "MiB/s",
            "extra": "seqread"
          },
          {
            "name": "Random Read Throughput",
            "value": 154,
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
        "date": 1678572999759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Threads Minimum latency",
            "value": 0.07,
            "unit": "ms",
            "extra": "min"
          },
          {
            "name": "Threads Average Latency",
            "value": 72.08,
            "unit": "ms",
            "extra": "avg"
          },
          {
            "name": "Threads Maximum Latency",
            "value": 18080.81,
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
        "date": 1678918666318,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Threads Minimum latency",
            "value": 0.07,
            "unit": "ms",
            "extra": "min"
          },
          {
            "name": "Threads Average Latency",
            "value": 72.71,
            "unit": "ms",
            "extra": "avg"
          },
          {
            "name": "Threads Maximum Latency",
            "value": 22140.01,
            "unit": "ms",
            "extra": "max"
          },
          {
            "name": "Thread 95th Percentile Latency",
            "value": 272.27,
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
        "date": 1679177808214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Threads Minimum latency",
            "value": 0.07,
            "unit": "ms",
            "extra": "min"
          },
          {
            "name": "Threads Average Latency",
            "value": 70.86,
            "unit": "ms",
            "extra": "avg"
          },
          {
            "name": "Threads Maximum Latency",
            "value": 18379.37,
            "unit": "ms",
            "extra": "max"
          },
          {
            "name": "Thread 95th Percentile Latency",
            "value": 277.21,
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
        "date": 1679525648012,
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
            "value": 45.61,
            "unit": "ms",
            "extra": "avg"
          },
          {
            "name": "Threads Maximum Latency",
            "value": 591.59,
            "unit": "ms",
            "extra": "max"
          },
          {
            "name": "Thread 95th Percentile Latency",
            "value": 235.74,
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
        "date": 1679784872444,
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
            "value": 45.9,
            "unit": "ms",
            "extra": "avg"
          },
          {
            "name": "Threads Maximum Latency",
            "value": 579.81,
            "unit": "ms",
            "extra": "max"
          },
          {
            "name": "Thread 95th Percentile Latency",
            "value": 235.74,
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
        "date": 1680128795138,
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
            "value": 46.27,
            "unit": "ms",
            "extra": "avg"
          },
          {
            "name": "Threads Maximum Latency",
            "value": 560.84,
            "unit": "ms",
            "extra": "max"
          },
          {
            "name": "Thread 95th Percentile Latency",
            "value": 235.74,
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
        "date": 1678576342156,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sequential Write Throughput",
            "value": 34.9,
            "unit": "MiB/s",
            "extra": "seqwrite"
          },
          {
            "name": "Random Write Throughput",
            "value": 24.9,
            "unit": "MiB/s",
            "extra": "randwrite"
          },
          {
            "name": "Sequential Read Throughput",
            "value": 235,
            "unit": "MiB/s",
            "extra": "seqread"
          },
          {
            "name": "Random Read Throughput",
            "value": 212,
            "unit": "MiB/s",
            "extra": "randread"
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
        "date": 1678922024344,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sequential Write Throughput",
            "value": 34.8,
            "unit": "MiB/s",
            "extra": "seqwrite"
          },
          {
            "name": "Random Write Throughput",
            "value": 25.2,
            "unit": "MiB/s",
            "extra": "randwrite"
          },
          {
            "name": "Sequential Read Throughput",
            "value": 238,
            "unit": "MiB/s",
            "extra": "seqread"
          },
          {
            "name": "Random Read Throughput",
            "value": 211,
            "unit": "MiB/s",
            "extra": "randread"
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
        "date": 1679180992022,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sequential Write Throughput",
            "value": 34.8,
            "unit": "MiB/s",
            "extra": "seqwrite"
          },
          {
            "name": "Random Write Throughput",
            "value": 21,
            "unit": "MiB/s",
            "extra": "randwrite"
          },
          {
            "name": "Sequential Read Throughput",
            "value": 204,
            "unit": "MiB/s",
            "extra": "seqread"
          },
          {
            "name": "Random Read Throughput",
            "value": 209,
            "unit": "MiB/s",
            "extra": "randread"
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
        "date": 1679525219090,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sequential Write Throughput",
            "value": 54.3,
            "unit": "MiB/s",
            "extra": "seqwrite"
          },
          {
            "name": "Random Write Throughput",
            "value": 48.3,
            "unit": "MiB/s",
            "extra": "randwrite"
          },
          {
            "name": "Sequential Read Throughput",
            "value": 323,
            "unit": "MiB/s",
            "extra": "seqread"
          },
          {
            "name": "Random Read Throughput",
            "value": 211,
            "unit": "MiB/s",
            "extra": "randread"
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
        "date": 1679784439121,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sequential Write Throughput",
            "value": 54.9,
            "unit": "MiB/s",
            "extra": "seqwrite"
          },
          {
            "name": "Random Write Throughput",
            "value": 52.8,
            "unit": "MiB/s",
            "extra": "randwrite"
          },
          {
            "name": "Sequential Read Throughput",
            "value": 323,
            "unit": "MiB/s",
            "extra": "seqread"
          },
          {
            "name": "Random Read Throughput",
            "value": 212,
            "unit": "MiB/s",
            "extra": "randread"
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
        "date": 1680130545730,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sequential Write Throughput",
            "value": 57.4,
            "unit": "MiB/s",
            "extra": "seqwrite"
          },
          {
            "name": "Random Write Throughput",
            "value": 53,
            "unit": "MiB/s",
            "extra": "randwrite"
          },
          {
            "name": "Sequential Read Throughput",
            "value": 322,
            "unit": "MiB/s",
            "extra": "seqread"
          },
          {
            "name": "Random Read Throughput",
            "value": 212,
            "unit": "MiB/s",
            "extra": "randread"
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
        "date": 1680388879197,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sequential Write Throughput",
            "value": 50.7,
            "unit": "MiB/s",
            "extra": "seqwrite"
          },
          {
            "name": "Random Write Throughput",
            "value": 46.8,
            "unit": "MiB/s",
            "extra": "randwrite"
          },
          {
            "name": "Sequential Read Throughput",
            "value": 321,
            "unit": "MiB/s",
            "extra": "seqread"
          },
          {
            "name": "Random Read Throughput",
            "value": 213,
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
        "date": 1678573495138,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sender Average Rate",
            "value": 2848,
            "unit": "Mbits/sec",
            "extra": "sender"
          },
          {
            "name": "Receiver Average Rate",
            "value": 2847,
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
        "date": 1678919186768,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sender Average Rate",
            "value": 2682,
            "unit": "Mbits/sec",
            "extra": "sender"
          },
          {
            "name": "Receiver Average Rate",
            "value": 2682,
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
        "date": 1679181421989,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sender Average Rate",
            "value": 3882,
            "unit": "Mbits/sec",
            "extra": "sender"
          },
          {
            "name": "Receiver Average Rate",
            "value": 3881,
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
        "date": 1679523377419,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sender Average Rate",
            "value": 1409,
            "unit": "Mbits/sec",
            "extra": "sender"
          },
          {
            "name": "Receiver Average Rate",
            "value": 1408,
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
        "date": 1679782658360,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sender Average Rate",
            "value": 1546,
            "unit": "Mbits/sec",
            "extra": "sender"
          },
          {
            "name": "Receiver Average Rate",
            "value": 1546,
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
        "date": 1680128267570,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sender Average Rate",
            "value": 447,
            "unit": "Mbits/sec",
            "extra": "sender"
          },
          {
            "name": "Receiver Average Rate",
            "value": 446,
            "unit": "Mbits/sec",
            "extra": "receiver"
          }
        ]
      }
    ],
    "FIO Benchmark on SEFS": [
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
          "id": "d0655d41563c6129fd8eff74c00bf917cdf21509",
          "message": "Test new benchmark ci",
          "timestamp": "2023-03-23T10:24:31+08:00",
          "tree_id": "ffafae79e3b8202ad5e10f5334d279bc01287881",
          "url": "https://github.com/lucassong-mh/occlum/commit/d0655d41563c6129fd8eff74c00bf917cdf21509"
        },
        "date": 1679542851439,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "Sequential Write Throughput",
            "value": 49.9,
            "unit": "MiB/s",
            "extra": "seqwrite"
          },
          {
            "name": "Random Write Throughput",
            "value": 35.8,
            "unit": "MiB/s",
            "extra": "randwrite"
          },
          {
            "name": "Sequential Read Throughput",
            "value": 117,
            "unit": "MiB/s",
            "extra": "seqread"
          },
          {
            "name": "Random Read Throughput",
            "value": 107,
            "unit": "MiB/s",
            "extra": "randread"
          }
        ]
      }
    ]
  }
}