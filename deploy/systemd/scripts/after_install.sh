#!/bin/bash
set -e
cd /home/ec2-user/app

# Ensure permissions
sudo chown -R ec2-user:ec2-user /home/ec2-user/app

# Install dependencies
npm install --omit=dev

# Install pm2 if missing
npm install -g pm2
pm2 startup systemd -u ec2-user --hp /home/ec2-user || true
