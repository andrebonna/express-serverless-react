import React, { Component } from 'react';
import './home.scss';

import ImageGallery from '../components/ImageGallery';

const IMAGES = [
    'http://wallpaperhey.com/Images/nature-image-for-iphone-Free-High-Resolution-Images.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjJ6Jk2PQNu-ZRBQM2FkeiZFEwx8R5AifYX6OPe6kPjMsDbze',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirrr799v2o08VIVZsWAlEL66GkPlCZ5cJNja2GrN1cTGAkC6s',
    'https://i.pinimg.com/736x/5a/e9/50/5ae9501fc3b49810db7901873f77d6f7--beautiful-nature-photos-beautiful-days.jpg',
    'https://i.ytimg.com/vi/kIS5SRuMg3c/hqdefault.jpg',
    'https://i.ytimg.com/vi/x30YOmfeVTE/maxresdefault.jpg',
    'https://images.pexels.com/photos/129441/pexels-photo-129441.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb',
    'http://images.all-free-download.com/images/graphiclarge/trail_nature_landscape_214997.jpg',
    'http://sim01.in.com/4fc598f2c9f2c0cdc5e0decc188d8d10_ft_xl.jpg'
];

export default class Home extends Component {
    render() {
        return <ImageGallery images={IMAGES} />;
    }
}