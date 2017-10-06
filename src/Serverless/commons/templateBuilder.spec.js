import React from 'react';
import templateBuilder from './templateBuilder';
import Home from '../../View/home/Home';

describe('Test template Builder', () => {
    it('templateBuilder with options', (done) => {
        templateBuilder({
            title: 'titleMock',
            metas: {
                metaMock: 'metaContentMock'
            },
            props: {
                categories: [],
                children: <Home images={[]} />
            }
        }, (err, content) => {
            expect(content).toMatchSnapshot();
            done();
        });
    });
});