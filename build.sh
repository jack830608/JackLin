#!/bin/bash

version=`cat ./DockerVersion`
IMAGE="jack1in/jacklin:$version"
container_name="jacklin"
docker pull ${IMAGE}
docker rm -f $container_name
docker run --name $container_name \
        -p 3000:3000 \
        --restart=always \
        -e NODE_ENV=production \
        -d ${IMAGE}