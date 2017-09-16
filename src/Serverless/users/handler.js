import React from 'react';
import ejs from 'ejs';
import ReactDOMServer from 'react-dom/server';
import Head from '../../View/Head';
import App from '../../View/App';

export function get(event, context, callback) {

    const head = React.createElement(Head, {
        title: 'Serverless Universal React',
        metas: event.queryStringParameters
    });
    const data = {
        cdn_path: process.env.CDN_PATH || '',
        head: ReactDOMServer.renderToString(head),
        content: ReactDOMServer.renderToString(React.createElement(App))
    };
    ejs.renderFile(`${__dirname}/../../View/template.ejs`, data, function(err, data) {
        const response = {
            statusCode: 200,
            headers: {
                'Content-type': 'text/html'
            },
            body: data
        };
        callback(null, response);
    });
}

export function create(event, context, callback) {
    const response = {
        statusCode: 200,
        body: event.body
    };
    callback(null, response);
}
