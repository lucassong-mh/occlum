#!/bin/bash
set -e

BLUE='\033[1;34m'
NC='\033[0m'
echo -e "${BLUE}Start building go-ycsb from source.${NC}"

git clone https://github.com/pingcap/go-ycsb.git

pushd go-ycsb

occlum-go build -o bin/go-ycsb cmd/go-ycsb/*

popd
