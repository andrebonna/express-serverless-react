import { get } from './handler';

describe('Handler Lambdas', ()=>{
    it('Test Get Home Page', (done) => {
        get({}, null, (_, response)=>{
            expect(response.body).toMatchSnapshot();
            done();
        });
    });
});
