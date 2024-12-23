#!/bin/bash
set -e

# 1. Init Occlum Workspace
rm -rf occlum_instance && occlum new occlum_instance
cd occlum_instance

TCS_NUM=$(($(nproc) * 2))
new_json="$(jq --argjson THREAD_NUM ${TCS_NUM} '.resource_limits.user_space_size="5000MB" |
    .resource_limits.user_space_max_size = "5000MB" |
    .resource_limits.kernel_space_heap_size = "5000MB" |
    .resource_limits.kernel_space_heap_max_size="5000MB" |
    .resource_limits.max_num_of_threads = $THREAD_NUM |
    .mount += [{"target": "/ext2", "type": "ext2", "options": {"disk_size": "30GB"}}]' Occlum.json)" && \
echo "${new_json}" > Occlum.json

# 2. Copy files into Occlum Workspace and build
rm -rf image
copy_bom -f ../go-ycsb.yaml --root image --include-dir /opt/occlum/etc/template

SGX_MODE=SIM occlum build

# 3. Run benchmark under different workloads
BLUE='\033[1;34m'
NC='\033[0m'
echo -e "${BLUE}Run go-ycsb on Occlum.${NC}"

occlum run /bin/occlum_run.sh
