#!/bin/bash
set -e
pm2 stop ite501-api || true
pm2 delete ite501-api || true
