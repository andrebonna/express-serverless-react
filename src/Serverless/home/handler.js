import React from 'react';
import templateBuilder from '../commons/templateBuilder';
import constants from '../commons/constants';
import Home from '../../View/home/Home';

export function get(event, context, callback) {
    templateBuilder({
        title: 'Andréa Buck Photos', 
        metas: constants.metas,
        props: {
            children: <Home />
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
}
