import handler from './handler';

describe('Handler Lambdas', ()=>{
    it('Test Create', (done) => {
        const payload = {
            'key': 1,
            'another_key': "Some text"
        };
        handler.create({
            body: JSON.stringify(payload)
        }, null, (_, response)=>{
            expect(JSON.parse(response.body)).toEqual(payload);
            done();
        });
    });
});
