#! /bin/bash
set -e

rm -rf ltp_instance
occlum new ltp_instance

cd ltp_instance
rm -rf image
copy_bom -f ../ltp.yaml --root image --include-dir /opt/occlum/etc/template

yq '.resource_limits.user_space_size.init = "3000MB" |
    .resource_limits.kernel_space_heap_size.init ="2000MB" |
    .resource_limits.kernel_space_heap_size.max ="2000MB" |
    .resource_limits.kernel_space_stack_size ="4MB" |
    .mount[0].options.layers[1].options.async_sfs_total_size = "25GB" |
    .entry_points = [ "/opt/ltp" ] |
    .env.default = [ "OCCLUM=yes", "LTPROOT=/opt/ltp", "TMP=/tmp", "HOME=/root" ]' \
    -i Occlum.yaml

occlum build

