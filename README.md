# WDCC MongoDB / Deployments Workshop - Starter project

This is the starter project for the final workshop in the WDCC series, where we will learn about MongoDB, add it to our backend, and then deploy our frontend, backend, and database!

**IMPORTANT: You MUST [FORK](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this repo - do NOT just clone the WDCC version, or you will not be able to deploy later!** Make your own personal fork, which you'll be able to push to.

We have created a Gist for this workshop, available at:

- TODO LINK HERE

## Setup and links

Before we get started with the workshop itself, we'll make sure we have all the necessary software installed.

- [Node.js](https://nodejs.org/en): you need to have this installed on your machine.

- [MongoDB](https://www.mongodb.com/)

  - [MongoDB Compass](https://www.mongodb.com/products/tools/compass): you'll need this installed, to browse your database.

  - [MongoDB Community Server](https://www.mongodb.com/products/self-managed/community-edition): you'll _optionally_ need this installed, if you want a local copy of your database. You _can_ just use Atlas though, if you want to _(see below)_.

    - As an alternative to MongoDB Community Server, another way of getting a local database running is to use [Docker](https://www.docker.com/). Once Docker is installed and running, then you can use a command like:

      ```bash
      docker run -p 27017:27017 -v wdcc-mongo-volume:/data/db mongo:latest
      ```

  - [Atlas cloud database](https://www.mongodb.com/atlas): You'll need an account here. You should easily be able to get one with an existing Gmail or GitHub account.

- [Digital Ocean](https://www.digitalocean.com/): You'll need an account here. You can easily get one with an existing GitHub account. New Digital Ocean accounts get $200 in free credits for the first 60 days.

## Docs

- [MongoDB docs](https://www.mongodb.com/developer/)

  - [Atlas docs](https://www.mongodb.com/docs/atlas/)

- [mongoose docs](https://mongoosejs.com/docs/)
