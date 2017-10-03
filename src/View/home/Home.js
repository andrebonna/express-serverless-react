import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './home.scss';

import ImageGallery from '../components/ImageGallery';

export default class Home extends Component {
    render() {
        const { images } = this.props;

        return <ImageGallery images={images} />;
    }
}

Home.propTypes = {
    images: PropTypes.array.isRequired
};