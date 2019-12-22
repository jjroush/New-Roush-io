---
title: AWS Lambda Provisioned Concurrency
date: ''
keywords: 'aws, lambda, warm, serverless functions'
---
![Lambda on the Beach](https://roush-image.s3.amazonaws.com/Lambda-provisioned.png)

A big tradeoff for implementing a Serverless architecture is cold start times. The serverless cold-start tax is typically within a few hundred milliseconds but it has been reported that Lambdas executed in the AWS VPC environment to take an upwards of 8 seconds. This is time a user has to wait in user-facing contexts. 

The benefit for serverless (FAAS) is that you only pay for what is used. As a dev

In user-facing contexts, this cold-start time is unacceptable. AWS announced a solution at their recent REinvent conference on December 3rd. [Provisioned Concurrency](https://aws.amazon.com/about-aws/whats-new/2019/12/aws-lambda-announces-provisioned-concurrency/) provides AWS users with more control of their serverless 

-hacky implentation
# Function Warming

Lambdas execute within a container which is created upon a trigger of an HTTP request, S3 event, etc. The time it takes for AWS to stand up the execution environment is considered the cold-start time. Lambda is smart enough to reuse a container that has already been stood up. If 2 Lambda triggers are done one after another, only a single Lambda container is created. Only the first call experiences the cold start. This differs from if 2 request are done concurrently. Lambda will stand up two Lambda Containers and both executions will experience the cold start. 

# Provisioned Concurrency

Provisioning Concurrency tells AWS Lambda to prepare a set a specified amount of execution environments. When concurrency is greater than the provisioned concurrency, new environments are created.  

Provisioned Concurrency gaurentees that cold-start time (ms) is within double-digits.
# Usage

# Future of Serverless

Seeing the development. It shows how serverless will continue to mature and 

# Learn More

[AWS Blog post testing comparing performance of Lambda Function with and without provisioned concurrency.](https://aws.amazon.com/blogs/aws/new-provisioned-concurrency-for-lambda-functions/) 

