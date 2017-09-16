import React, { Component } from 'react';
import SimpleCounter from './SimpleCounter';

export default class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Hello World App</h1>
                </header>
                <section>
                    <p>Hello world!</p>
                    <SimpleCounter />
                </section>
                <footer>
                    <p>&copy; André Bonna</p>
                </footer>  
            </div>
        );
    }
}