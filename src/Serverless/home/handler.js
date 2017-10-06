import React from 'react';
import AWS from 'aws-sdk';
import templateBuilder from '../commons/templateBuilder';
import constants from '../commons/constants';
import Home from '../../View/home/Home';

const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

function getImagesFiltered(queryStringParameters) {
    let params = {
        TableName: 'Photos',
        Select: 'ALL_ATTRIBUTES'
    };

    if (queryStringParameters && queryStringParameters.filter) {
        params = {
            ...params,
            ScanFilter: {
                Categories: {
                    ComparisonOperator: 'CONTAINS',
                    AttributeValueList: [queryStringParameters.filter]
                }
            }
        };
    }

    return dynamodb.scan(params).promise();
}

function getCategories(data) {
    return dynamodb.scan({
        TableName: 'Photos',
        Select: 'SPECIFIC_ATTRIBUTES',
        AttributesToGet: ['Categories']
    }).promise().then((categories)=>{
        const categoriesSet = new Set();
        categories.Items.map(({ Categories })=>{
            Categories.forEach(category => categoriesSet.add(category));
        });          
        return { 
            data, 
            categories: [...categoriesSet] 
        };
    });
}

export function get(event, context, callback) {

    const {
        queryStringParameters
    } = event;

    getImagesFiltered(queryStringParameters)
        .then(getCategories)
        .then(({data, categories}) => {
            templateBuilder({
                title: 'Andréa Buck Photos',
                metas: constants.metas,
                props: {
                    categories,
                    children: <Home images={data.Items} />
                }
            }, (err, data) => {
                if (err) {
                    callback(err);
                }
                const response = {
                    statusCode: 200,
                    headers: {
                        'Content-type': 'text/html'
                    },
                    body: data
                };
                callback(null, response);
            });
        }).catch(callback);
}
