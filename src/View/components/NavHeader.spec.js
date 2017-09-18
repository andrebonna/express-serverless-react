import React from 'react';
import { shallow } from 'enzyme';
import NavHeader from './NavHeader';

describe('NavHeader', ()=>{
    it('render successfully', ()=>{
        const props = {
            categories: [{
                name: 'nameMock',
                href: 'hrefMock'
            }]
        };
        const wrapper = shallow(<NavHeader {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('menuItemClickAction', ()=>{
        const props = {
            categories: [{
                name: 'nameMock',
                href: 'hrefMock'
            }]
        };
        const wrapper = shallow(<NavHeader {...props} />);
        wrapper.find({ eventKey: '4' }).simulate('click');
        expect(window.location.href).toBe('contact');
    });
});