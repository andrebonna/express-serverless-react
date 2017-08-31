'use strict';

module.exports.create = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: event.body
    };
    callback(null, response);
};
