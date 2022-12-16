'use strict';

const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const {
	DynamoDBDocumentClient,
	UpdateCommand,
} = require('@aws-sdk/lib-dynamodb');
const client = new DynamoDBClient({});
const ddbDocClient = DynamoDBDocumentClient.from(client);

const METADATA_TABLE_NAME = process.env.METADATA_TABLE_NAME;

exports.updateTotalViews = async (event) => {
	console.log(event);

	const id = event.StatePayload.Content;
	const views1 = parseInt(event.StatePayload.Views);
	const views2 = parseInt(event.result.Item.Views.N);

	var params = {
		TableName: METADATA_TABLE_NAME,
		Key: {
			id: id,
		},
		UpdateExpression: 'SET #views_ = :myViewsRef',
		ExpressionAttributeValues: {
			':myViewsRef': views1 + views2,
		},
		ExpressionAttributeNames: { '#views_': 'Views' },
		ReturnValues: 'UPDATED_NEW',
	};

	console.log(params);

	try {
		const response = await ddbDocClient.send(new UpdateCommand(params));

		console.log(response);
	} catch (e) {
		console.log(e);
	}

	return event.StatePayload;
};
