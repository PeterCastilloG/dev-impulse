#!/bin/bash
git checkout develop
git pull origin develop
docker-compose -f docker-compose.yaml --env-file .env up -d --build