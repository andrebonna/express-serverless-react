import React, { Component } from 'react';
import NavHeader from '../components/NavHeader';
import SimpleCounter from '../components/SimpleCounter';

import './app.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavHeader />
                <section className='main-content'>
                    <p>Hello world!</p>
                    <SimpleCounter />
                </section>
                <footer className='footer'>
                    <p>&copy; André Bonna</p>
                </footer>  
            </div>
        );
    }
}