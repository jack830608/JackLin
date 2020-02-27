#!/bin/bash

version=`cat ./DockerVersion`
docker build -t jack1in/jacklin:$version .
docker push jack1in/jacklin:$version