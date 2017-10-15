import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import './nav-header.scss';

export default class NavHeader extends Component {
    constructor(props) {
        super(props);
        this.renderCategories = this.renderCategories.bind(this);
    }

    renderCategories(eventKeyPrefix) {
        const { categories } = this.props;
        
        return categories.map((category, i)=>{
            return (
                <MenuItem 
                    key={category.name} 
                    eventKey={`${eventKeyPrefix}.${i}`} 
                    href={category.href}
                >
                    {category.name}
                </MenuItem>
            );
        });
    }

    render() {
        return (
            <Navbar fluid fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="">React-Serverless</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavDropdown eventKey={1} title="Categories" id="basic-nav-dropdown">
                            {this.renderCategories(1)}
                        </NavDropdown>
                        <NavItem role='link' eventKey={2} href="contact">Contact Us</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        );
    }
}

NavHeader.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        href: PropTypes.string
    })).isRequired
};