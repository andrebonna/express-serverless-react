import lambdaLocal from 'lambda-local';
import path from 'path';

var jsonPayload = {
    'key': 1,
    'another_key': "Some text"
}


describe('Test lamda function', ()=>{
    it('Test lambda call', (done) => {
        lambdaLocal.execute({
            event: jsonPayload,
            lambdaHandler: 'create',
            lambdaPath: path.join(__dirname, 'handler.js'),
            timeoutMs: 3000
        }).then((response) => {
            expect(JSON.parse(response.body).message).toEqual(jsonPayload);
            done();
        }).catch((err) => {
            done.fail(err);
        });
    });
});
