import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';
import App from './containers/App';
import Home from './home/Home';

const pages = {
    Home
};

const props = JSON.parse(window.APP_PROPS);

ReactDOM.render(<App {...props} >{React.createElement(pages[props.page], props.children.props)}</App>, document.getElementById('content'));