import { get, create } from './handler';

describe('Handler Lambdas', ()=>{
    it('Test Get Users Page', (done) => {
        get({}, null, (_, response)=>{
            expect(response.body).toMatchSnapshot();
            done();
        });
    });

    it('Test Create Users', (done) => {
        create({
            body: 'bodyMock'
        }, null, (_, response)=>{
            expect(response.body).toMatchSnapshot();
            done();
        });
    });
});
