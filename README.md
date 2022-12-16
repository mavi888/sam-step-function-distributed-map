# Step functions Distributed Map demo

_Infrastructure as code framework used_: AWS SAM
_AWS Services used_: AWS Step Functions, AWS DynamoDB, AWS Lambda

## Summary of the demo

In this demo you will see:

- How to create a Step Function using Distributed Map for iterating over lots items
- How to create a Step Function that calls another Step Function asyncronously
- How to use Step Functions intrinsic functions
- How to use direct integrations from Step Functions to AWS DynamoDB

This demo is part of a video posted in FooBar Serverless channel. You can check the video to see the whole demo.

Important: this application uses various AWS services and there are costs associated with these services after the Free Tier usage - please see the AWS Pricing page for details. You are responsible for any AWS costs incurred. No warranty is implied in this example.

## Requirements

- AWS CLI already configured with Administrator permission
- AWS SAM CLI installed - minimum version 1.37.0 (sam --version)
- NodeJS 16.x installed

## Deploy this demo

We will be using AWS SAM and make sure you are running the latest version - at the time of writing, this was 1.37.0 (sam --version).

Deploy the project to the cloud:

```
sam deploy -g # Guided deployments
```

Next times, when you update the code, you can build and deploy with:

```
sam deploy
```

To delete the app:

```
sam delete
``

## Testing

To test this application you need to have a csv file called metrics and place it in the bucket this application creates.

This is the format that the file needs to have in order for this to work:

```

Content,VideoTitle,VideoPublishTime,Views
1wNb_RMvI9E,AWS LAMBDA?,"May 3, 2021",24993

```


## Links related to this code

- Video with more details:
- [Launch blog post for Distributed Map](https://aws.amazon.com/blogs/aws/step-functions-distributed-map-a-serverless-solution-for-large-scale-parallel-data-processing/)
- [Launch blog post for Intrinsic functions](https://aws.amazon.com/blogs/compute/introducing-new-intrinsic-functions-for-aws-step-functions/)
```
