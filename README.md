# NarrowSight-Server
Server component for NarrowSight. Serves the API and stores all things related with NarrowSight in MongoDB.

## Getting started
For now the server component can be installed through cloning this repository and installing the needed dependencies. We used yarn to manage our dependencies.

```
// Getting the repo
$ git clone https://github.com/NarrowSight/NarrowSight-Server.git

// Installing dependencies
$ yarn

// Running the server
$ yarn run start

// Access the API through the url shown in the startup output.
```
## Nodemon

For development purposes NarrowSight-Server also ships with nodemon. Nodemon convenient helps the developemnt flow by automatically restarting NodeJS on file changes. You can use the development option by invoking `start-dev` in stead of `start`

```
$ yarn run start-dev
```
