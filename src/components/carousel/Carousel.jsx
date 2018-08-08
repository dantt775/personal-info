import React, { Component } from 'react'
import Slider from 'react-slick'
import './middle.scss'
import Slider1 from '../slider/Slider1.jsx'
import Slider2 from '../slider/Slider2.jsx'
import Slider3 from '../slider/Slider3.jsx'

export default class Middle extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 5000,
            fade: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Slider {...settings}>
                <Slider1 />
                <Slider2 />
                <Slider3 />
            </Slider>
        )
    }
}