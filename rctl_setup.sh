#!/bin/sh
curl -sL https://s3-us-west-2.amazonaws.com/rafay-prod-cli/publish/rctl-linux-amd64.tar.bz2 > rctl.tar.bz2
tar xvf ./rctl.tar.bz2
chmod 755 ./rctl
rm ./rctl.tar.bz2
sudo cp rctl /usr/local/bin/.
rctl
