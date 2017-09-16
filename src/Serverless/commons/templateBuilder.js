import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ejs from 'ejs';
import Head from '../../View/containers/Head';
import App from '../../View/containers/App';

function headBuilder(title, metas) {

    const cssBundle = `${process.env.CDN_PATH || ''}bundle.css`;
    const head = React.createElement(Head, {
        title,
        metas,
        cssBundle
    });
    return ReactDOMServer.renderToString(head);
}

function contentBuilder(props) {
    return ReactDOMServer.renderToString(React.createElement(App, props));
}

export default function templateBuilder({ title, metas, props }, callback) {
    const data = {
        cdn_path: process.env.CDN_PATH || '',
        head: headBuilder(title, metas),
        content: contentBuilder(props)
    };
    ejs.renderFile(`${__dirname}/../../View/template.ejs`, data, callback);
}