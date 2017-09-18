import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavHeader from '../components/NavHeader';

export default class App extends Component {
    render() {
        const { categories, children } = this.props;

        return (
            <div>
                <NavHeader categories={categories} />
                <section className='main-content'>
                    {children}
                </section>
                <footer className='footer'>
                    <p>&copy; André Bonna</p>
                </footer>  
            </div>
        );
    }
}

App.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string
    })),
    children: PropTypes.node.isRequired
};

App.defaultProps = {
    categories: [{
        name: 'All',
        href: 'categories'
    }]
};