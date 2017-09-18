import React from 'react';
import templateBuilder from './templateBuilder';
import Home from '../../View/home/Home';

describe('Test template Builder', ()=>{
    it('templateBuilder with options', (done)=>{
        templateBuilder({
            title: 'titleMock',
            metas: {
                metaMock: 'metaContentMock'
            },
            props: {
                children: <Home />
            }
        }, (err, content)=>{
            expect(content).toMatchSnapshot();
            done();
        });
    });
});