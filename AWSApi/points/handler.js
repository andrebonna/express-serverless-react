'use strict';

module.exports.create = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: event
        })
    };
    callback(null, response);
};
