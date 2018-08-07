import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Middle from './components/Middle/Middle.jsx'
import "./assets/scss/main.scss"
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css';






ReactDOM.render(
    <div>

        <Middle />

    </div>
    , document.getElementById('app'))