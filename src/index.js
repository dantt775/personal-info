import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import "./assets/scss/main.scss"






ReactDOM.render(
    <div>
        <Header />
        <Footer />
    </div>
    , document.getElementById('app'))