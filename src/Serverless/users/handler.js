import templateBuilder from '../commons/templateBuilder';

export function get(event, context, callback) {
    templateBuilder({
        title: 'Serverless Universal React', 
        metas: event.queryStringParameters
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

export function create(event, context, callback) {
    const response = {
        statusCode: 200,
        body: event.body
    };
    callback(null, response);
}
