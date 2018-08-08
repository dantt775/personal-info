import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Carousel from './components/carousel/Carousel.jsx'
import Slider1 from './components/slider/Slider1.jsx'
import Slider2 from './components/slider/Slider2.jsx'
import Slider3 from './components/slider/Slider3.jsx'
import "./assets/scss/main.scss"
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css';






ReactDOM.render(
    <div>    
    <Carousel />
    <Footer />
    </div>
    , document.getElementById('app'))