import React, { Component } from 'react'
import './footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <section id='footer'>
            <div className='container'>

            <img src={require('../../assets/images/react-native.png')}/>
            <h1>This is a fucking header</h1>
                
            </div>
            </section>
        )
    }
}