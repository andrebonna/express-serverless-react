import React from 'react';
import AWS from 'aws-sdk';
import templateBuilder from '../commons/templateBuilder';
import constants from '../commons/constants';
import Home from '../../View/home/Home';

const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

export function get(event, context, callback) {
    dynamodb.scan({
        TableName: 'Photos',
        Select: 'ALL_ATTRIBUTES'
    }, function(err, data) {
        templateBuilder({
            title: 'Andréa Buck Photos', 
            metas: constants.metas,
            props: {
                children: <Home images={data.Items} />
            }
        }, (err, data) => {
            const response = {
                statusCode: 200,
                headers: {
                    'Content-type': 'text/html'
                },
                body: data
            };
            callback(null, response);
        });
        
    });
}
