import React, { Component } from 'react';

export default class NavHeader extends Component {
    render() {
        return (
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle collapsed glyphicon glyphicon-menu-hamburger' />
                        <a className='navbar-brand' href='users'>Universal React</a>
                    </div>
                    <div className='navbar-collapse collapse'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><a href='categories'>Categories</a></li>
                            <li><a href='contact'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}