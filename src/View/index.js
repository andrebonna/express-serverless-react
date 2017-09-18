import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './containers/App';
import Home from './home/Home';
import Categories from './categories/Categories';

const pages = {
    Home,
    Categories
};

const props = JSON.parse(window.APP_PROPS);

ReactDOM.render(<App {...props} >{React.createElement(pages[props.page], props.children.props)}</App>, document.getElementById('content'));