import React from 'react';
import templateBuilder from '../commons/templateBuilder';
import constants from '../commons/constants';
import Categories from '../../View/categories/Categories';

export function get(event, context, callback) {
    templateBuilder({
        title: 'Categories', 
        metas: constants.metas,
        props: {
            children: <Categories />
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
