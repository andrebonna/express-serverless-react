import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Lightbox from 'react-images';
import { CSSTransition } from 'react-transition-group';

import './home.scss';

const buildInitialState = ()=>{
    return [
        [],
        [],
        [],
        [],
        [],
        []
    ];
};

const getNumberOfColumns = (document) => {
    const width = document.documentElement.clientWidth;
    if (width <= 768) {
        return 1;
    }
    else if (width > 768 && width <= 992) {
        return 2;
    }
    else if (width > 992 && width <= 1200) {
        return 4;
    }
    return 6;
};

const IMAGES = [
   
];

export default class Home extends Component {

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
        window.querySelector('body').removeEventListener('resize', this.resize);
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

    buildColumns() {
        const columns = buildInitialState();
        const numColumns = getNumberOfColumns(document);

        IMAGES.forEach((image, i) => {
            columns[i % numColumns].push(this.renderImage(image, i));
        });
        
        this.setState({ 
            columns,
            numberOfColumns: (12 / numColumns)
        });
    }

    resize() {
        (function step(){
            clearTimeout(this.timeout);
            this.timeout = setTimeout(this.buildColumns, 200);
        }).call(this);
    }

    renderImage(image, index) {
        return (
            <CSSTransition in timeout={1000} classNames="image-fade" appear>
                <div role='presentation' onClick={this.onClickImage(index)}>
                    <img className='full-width' alt='' src={image} />
                </div>
            </CSSTransition>
        );
    }

    renderColumns(index) {
        const { columns, numberOfColumns } = this.state;
        const i = numberOfColumns;

        return (
            <Col lg={i} md={i} sm={i} xs={i}>
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

    render() {
        const { lightboxIsOpen, currentImage } = this.state;
        return (
            <div>
                {this.renderColumns(0)}
                {this.renderColumns(1)}
                {this.renderColumns(2)}
                {this.renderColumns(3)}
                {this.renderColumns(4)}
                {this.renderColumns(5)}
                <Lightbox
                    images={IMAGES.map(image=>({ src:image }))}
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