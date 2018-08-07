import React, { Component } from 'react'
import "./header.scss"


export default class Header extends Component {

    render() {
        return (
            <section id='header'>
                <div className='container'>
                    <div className='header-contet'>

                        <div className='row'>

                            <div className='col-lg-3'>
                                <img src={require('../../assets/images/react-native.png')} />
                            </div>

                            <div className='col-lg-3'>
                                <p className='header-item'>section</p>
                            </div>

                            <div className='col-lg-3'>
                                <p className='header-item'>section</p>
                            </div>

                            <div className='col-lg-3'>
                                <p className='header-item'>section</p>
                            </div>

                        </div>



                    </div>
                </div>
            </section>
        )
    }
}