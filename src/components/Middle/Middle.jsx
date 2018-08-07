import React, { Component } from 'react'
import Slider from 'react-slick'
import './middle.scss'
export default class Middle extends Component {
    render() {
        var settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 3
        };
        return (
            <Slider {...settings}>
                <div>

                    <img src={require('../../assets/images/bg1.jpg')} />

                </div>
                <div>

                    <img src={require('../../assets/images/bg2.jpg')} />

                </div>
                <div>

                    <img src={require('../../assets/images/bg3.jpg')} />

                </div>
            </Slider>
        )
    }
}