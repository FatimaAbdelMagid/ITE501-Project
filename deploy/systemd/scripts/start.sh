#!/bin/bash
set -e
cd /home/ec2-user/app

# Start via pm2 on port 3000
pm2 start src/server.js --name ite501-api
pm2 save
