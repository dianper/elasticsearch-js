# Elastic Search - Books API

Simple RESTful API with NodeJs and Elastic Search.

# Requirements

* [Node](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install)
* [Docker](https://docs.docker.com/engine/install/)

# Install

**Note:** Elastic Search should be up to API work correctly.

* git clone `https://github.com/dianper/elasticsearch-js.git`
* cd elasticsearch-js
* yarn install

# Docker
```sh
# Pulling the image
docker pull docker.elastic.co/elasticsearch/elasticsearch:7.6.2

# Running
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.6.2

# Check
http://localhost:9200/
```

# Run
```sh
yarn dev
# nodemon index.js

yarn start
# node index.js
```

# Test
```sh
# Not implemented yet
```
