## Run go-ycsb on Occlum

### Step 1: Prepare docker image and build Occlum
```
sudo docker pull occlum/occlum:0.31.0-rc-ubuntu22.04

git clone https://github.com/lucassong-mh/occlum.git -b dev-atomicdisk-fast25 {occlum_src_path}

sudo docker run -it --device /dev/sgx/enclave --device /dev/sgx/provision --name "ssw-occlum-0.31.0-rc-dev" --net=host -v "{occlum_src_path}:/root/occlum" occlum/occlum:0.31.0-rc-ubuntu22.04

git config --global --add safe.directory /root/occlum  // And other dependent repos

// Inside container
cd /root/occlum
make submodule
OCCLUM_RELEASE_BUILD=1 make install
```

### Step 2: Build go-ycsb from source
```
cd demos/benchmarks/go-ycsb && ./dl_and_build_go-ycsb.sh
```

### Step 3: Run go-ycsb workloads
```
cd demos/benchmarks/go-ycsb && ./run.sh
```
