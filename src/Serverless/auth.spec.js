import { authorizerFunc } from './auth';

describe('Auth Lambda', ()=>{
    it('Test Auth Allow', (done) => {
        authorizerFunc({
            authorizationToken: `Basic ${new Buffer('user:password').toString('base64')}`,
            methodArn: 'methodArnMock'
        }, null, (_, response)=>{
            expect(response).toMatchSnapshot();
            done();
        });
    });

    it('Test Auth Deny without token', (done) => {
        authorizerFunc({
            methodArn: 'methodArnMock'
        }, null, (_, response)=>{
            expect(response).toMatchSnapshot();
            done();
        });
    });

    it('Test Auth Deny', (done) => {
        authorizerFunc({
            authorizationToken: `Basic ${new Buffer('testDeny:password').toString('base64')}`,
            methodArn: 'methodArnMock'
        }, null, (_, response)=>{
            expect(response).toMatchSnapshot();
            done();
        });
    });
});
