import auth from './auth';

describe('Auth Lambda', ()=>{
    it('Test Auth Allow', (done) => {
        auth.authorizerFunc({
            authorizationToken: `Basic ${new Buffer('user:password').toString('base64')}`,
            methodArn: 'methodArnMock'
        }, null, (_, response)=>{
            expect(response).toMatchSnapshot();
            done();
        });
    });

    it('Test Auth Deny', (done) => {
        auth.authorizerFunc({
            authorizationToken: `Basic ${new Buffer('testDeny:password').toString('base64')}`,
            methodArn: 'methodArnMock'
        }, null, (_, response)=>{
            expect(response).toMatchSnapshot();
            done();
        });
    });
});
