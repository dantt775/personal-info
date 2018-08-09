import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Carousel from './components/carousel/Carousel.jsx'
import Profile from './components/profile/Profile.jsx'
import "./assets/scss/main.scss"
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css';






ReactDOM.render(
    <div>    
    <Header />
    <Carousel />
    <Profile />
    <Footer />
    </div>
    , document.getElementById('app'))