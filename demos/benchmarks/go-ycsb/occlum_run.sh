#!/bin/bash

# Exit when error
set -xe

# /ext2 -> Ext2+SwornDisk, /root -> SEFS (SGX-PFS)
/bin/go-ycsb load badger -P /workloads/workloada -p badger.dir=/ext2
/bin/go-ycsb run badger -P /workloads/workloada -p badger.dir=/ext2

# /bin/go-ycsb load badger -P /workloads/workloada -p badger.dir=/root
# /bin/go-ycsb run badger -P /workloads/workloada -p badger.dir=/root
