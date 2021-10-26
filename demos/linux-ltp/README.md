# Run Linux LTP on Occlum

In this demo, we will show how to run the Linux LTP inside Occlum.

Linux [`LTP`](https://github.com/linux-test-project/ltp) is the most popular test suite for Linux.
Occlum could also apply the LTP to verify the stability and compatibility to Linux app.

Because Occlum doesn't support `fork`, `vfork` has to be used instead in the LTP test.
And a light weight [`test script`](./run-ltp.sh) running in Occlum is provided to be used in this demo.

## Download and build the Linux LTP from source code
```
./dl_and_build_ltp.sh
```

Two patches are applied to make it work on Occlum.
Many test cases are failed due to multiple reasons, such as syscall is not implemented or not completely implemented in Occlum.

* Some test cases may make the Occlum crash or hang (Only checked the cases in syscalls), they are ignored by applying the [`patch`](./0002-Ignore-some-test-cases-which-crash-the-Occlum.patch)

It may be updated with Occlum development.

## Prepare the Occlum instance for LTP demo
```
./prepare_ltp.sh
```

## Run the LTP demo

The script `run-ltp.sh` supports two optional arguments as below.
```
    usage: run-ltp.sh [options]

    options:
    -f CMDFILES     Execute user defined list of testcases
    -s PATTERN      Only run test cases which match PATTERN.

    example: run-ltp.sh -f syscalls -s timerfd
```

If no options provided, all the test cases in syscalls will be run one by one.

Note:

* The `CMDFILES` are defined in the LTP install path, such as `ltp_instance/image/opt/ltp/runtest/` in this demo.