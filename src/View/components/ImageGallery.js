import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import Lightbox from 'react-images';
import { CSSTransition } from 'react-transition-group';

import './image-gallery.scss';

const SMALL_DROP = 768;
const MEDIUM_DROP = 992;
const FULL_DROP = 1200;

const buildInitialState = () => {
    return [
        [],
        [],
        [],
        [],
        [],
        []
    ];
};

function getNumberOfColumns(document, maxSize) {
    const width = document.documentElement.clientWidth;
    if (width <= SMALL_DROP) {
        return maxSize / maxSize;
    }
    else if (width > SMALL_DROP && width <= MEDIUM_DROP) {
        return Math.ceil(maxSize / 3);
    }
    else if (width > MEDIUM_DROP && width <= FULL_DROP) {
        return Math.ceil((2 * maxSize) / 3);
    }
    return maxSize;
}

function getSrcSet(urls) {
    return urls.map((url)=>{
        const regex = /-([0-9]+)\.png/;
        const width = url.match(regex)[1];
        return `${url} ${width}w`;
    });
}

export default class ImageGallery extends Component {

    constructor(props) {
        super(props);

        this.resize = this.resize.bind(this);
        this.buildColumns = this.buildColumns.bind(this);
        this.onClickImage = this.onClickImage.bind(this);
        this.onCloseLightbox = this.onCloseLightbox.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);
        this.onClickNext = this.onClickNext.bind(this);
        this.renderImage = this.renderImage.bind(this);

        this.state = {
            columns: buildInitialState(),
            numberOfColumns: 0,
            lightboxIsOpen: false,
            currentImage: 0
        };
    }

    componentDidMount() {
        window.addEventListener('resize', this.resize);
        this.buildColumns();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize);
    }

    onClickImage(index) {
        return () => {
            this.setState({
                lightboxIsOpen: true,
                currentImage: index
            });
        };
    }

    onCloseLightbox() {
        this.setState({
            lightboxIsOpen: false
        });
    }

    onClickPrev() {
        const { currentImage } = this.state;
        this.setState({
            currentImage: currentImage - 1
        });
    }

    onClickNext() {
        const { currentImage } = this.state;
        this.setState({
            currentImage: currentImage + 1
        });
    }

    getImages() {
        const { images } = this.props;

        const imagesMap = images.map(image => ({ 
            src: image.URLs[0],
            srcset: getSrcSet(image.URLs),
            caption: image.Description
        }));
        return imagesMap;
    }

    buildColumns() {
        const { images, maxNumberOfColumns } = this.props;
        const columns = buildInitialState();
        const numColumns = getNumberOfColumns(document, maxNumberOfColumns);

        images.forEach((image, i) => {
            columns[i % numColumns].push(this.renderImage(image, i));
        });

        this.setState({
            columns,
            numberOfColumns: 12 / numColumns
        });
    }

    resize() {
        (function step() {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(this.buildColumns, 200);
        }).call(this);
    }

    renderImage(image, index) {
        return (
            <CSSTransition in timeout={1000} classNames="image-fade" appear>
                <div role='presentation' onClick={this.onClickImage(index)}>
                    <img className='full-width' alt='' src={image.URLs[1]} title={image.Title} />
                </div>
            </CSSTransition>
        );
    }

    renderColumns(maxSize) {
        const columnsBuilded = [];
        for (let index = 0; index < maxSize; index++) {
            const { columns, numberOfColumns } = this.state;
            const i = numberOfColumns;

            if (columns[index].length) {
                columnsBuilded.push(
                    <Col lg={i} md={i} sm={i} xs={i} key={`${index}`}>
                        {columns[index].map((image, i) => {
                            return (
                                <Row className='row-spacing' key={`${index}.${i}`}>
                                    {image}
                                </Row>
                            );
                        })}
                    </Col>
                );
            }
        }
        return columnsBuilded;
    }

    render() {
        const { maxNumberOfColumns } = this.props;
        const { lightboxIsOpen, currentImage } = this.state;
        return (
            <div>
                {this.renderColumns(maxNumberOfColumns)}
                <Lightbox
                    images={this.getImages()}
                    isOpen={lightboxIsOpen}
                    currentImage={currentImage}
                    onClose={this.onCloseLightbox}
                    onClickPrev={this.onClickPrev}
                    onClickNext={this.onClickNext}
                />
            </div>
        );
    }
}

ImageGallery.propTypes = {
    images: PropTypes.array,
    maxNumberOfColumns: PropTypes.oneOf([1, 2, 3, 4, 6])
};

ImageGallery.defaultProps = {
    images: [],
    maxNumberOfColumns: 4
};