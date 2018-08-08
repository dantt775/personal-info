import React, { Component } from 'react'

import './slider1.scss'

export default class Slider1 extends Component {
    render() {
        return (
            <section id='slider1'>
                <div className='slider-content'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12clear'>
                                <h1 className='h1-slider'>Let's build something great together!</h1>
                                <h2 className='h2-slider'>Developer</h2>                                
                                <p>Java / ReactJS / NodeJS / JavaScript / HTML / CSS / BootStrap.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}