import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import './nav-header.scss';

export default class NavHeader extends Component {

    constructor(props) {
        super(props);
        this.menuItemClickAction = this.menuItemClickAction.bind(this);
    }

    menuItemClickAction(href) {
        return () => window.location.href = href;
    }

    renderCategories() {
        const { categories } = this.props;

        return categories.map((category, i)=>{
            return <MenuItem key={category.name} eventKey={i} onClick={this.menuItemClickAction(category.href)}>{category.name}</MenuItem>;
        });
    }

    render() {
        return (
            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <div className="navbar-toggle borderless collapsed">
                            <DropdownButton pullRight bsStyle="default" id='hamburguer-menu' title='' noCaret className='glyphicon glyphicon-menu-hamburger' >
                                <MenuItem header>Categories</MenuItem>
                                {this.renderCategories()}
                                <MenuItem divider />
                                <MenuItem eventKey="4" onClick={this.menuItemClickAction('contact')}>Contact Us</MenuItem>
                            </DropdownButton>
                        </div> 
                        <a className='navbar-brand' href='home'>Universal React</a>
                    </div>
                    <div className='navbar-collapse collapse'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li>
                                <DropdownButton id='categories' title='Categories' noCaret className='categories-dropdown' >
                                    {this.renderCategories()}
                                </DropdownButton>
                            </li>
                            <li><a href='contact'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

NavHeader.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string
    })).isRequired
};