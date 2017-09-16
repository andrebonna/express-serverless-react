const generatePolicy = function(principalId, effect, resource) {
    return {
        principalId: principalId,
        policyDocument: {
            Version: '2012-10-17',
            Statement: [{
                Action: 'execute-api:Invoke',
                Effect: effect,
                Resource: resource
            }]
        }
    };
};

export function authorizerFunc(event, context, callback) {

    let permission = 'Allow';
    if (!event.authorizationToken) {
        permission = 'Deny';
        callback(null, generatePolicy('anonymous', permission, event.methodArn));
    }
    else {
        const [, token] = event.authorizationToken.split(' ');
        const [user] = new Buffer(token, 'base64').toString().split(':');
    
        if (user === 'testDeny') {
            permission = 'Deny';
        }
        //TODO: Make any validation in any Third Party Authorization Provider
        callback(null, generatePolicy(user, permission, event.methodArn));
    } 
}