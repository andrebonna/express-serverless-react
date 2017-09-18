import { get } from './handler';

describe('Handler Lambdas', ()=>{
    it('Test Get Categories Page', (done) => {
        get({}, null, (_, response)=>{
            expect(response.body).toMatchSnapshot();
            done();
        });
    });
});
