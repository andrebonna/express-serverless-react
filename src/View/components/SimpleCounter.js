import React, { Component } from 'react';
import './simple-counter.scss';


export default class SimpleCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    incrementCount() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <button className='increment-button' onClick={this.incrementCount.bind(this)}>
            Count: {this.state.count}
            </button>
        );
    }
}