# Express-Serverless with Universal React Template
Hybrid NodeJS Server/Serverless API/Universal-React architecture Template. Code your API handlers using AWS Lambda syntax and bind your endpoints in serverless.yml. Since it's a NodeJS project, you can install any lib you want.

Run it anywhere! 

### Requirements

- [NodeJS 6+ installed](https://nodejs.org/en/download/)
- [AWS account with API credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
- [Serverless CLI installed](https://serverless.com/framework/docs/providers/aws/guide/installation#installing-the-serverless-framework)
- [Docker installed (optional)](https://docs.docker.com/engine/installation/)

## Create new API endpoints
Inside `src/Serverless` folder you will find all files containing [AWS Lambda](http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html) functions. 
Inside `src/View` folder you will find React files.
There is a GET/POST example with a dumb authorizer step. The GET returns a page with universal-react.
Following [serverless framework](https://serverless.com/framework/docs/providers/aws/guide/functions/) you can configure new endpoints in `serverless.yml` 

## Environment Variables
```
NODE_ENV: # defines your deployment environment (e.g. production)
CDN_PATH: # Define CDN root path (AWS S3 bucket URL)
BUCKET_NAME: # Define AWS S3 bucket name
```

## Deploy Client Template to S3 Bucket
```
BUCKET_NAME=<your-bucket-name> npm run deploy:client
```

## Deploy Backend Template as Serverless
```
CDN_PATH=<path-to-your-s3-bucket> npm run deploy:backend
```

## Run Template on a local server
```
npm install
npm start
```

## Run Template as a docker container
```
docker build -t express-serverless .
docker run -p 3000:3000 express-serverless
```

## Run Unit Tests
```
npm install
npm test
```







