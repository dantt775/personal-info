import React, { Component, Image } from 'react'
import backImage from '../assets/images/bg3.jpg';

export default class Splash extends Component {

    render() {
        return (
            <div style={styles.container} >



            </div>
        )
    }
}

const styles = {
    container: {
        backgroundImage: "url(" + backImage + ")",
        backgroundSize: 'cover',
        height: '100vh',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
}