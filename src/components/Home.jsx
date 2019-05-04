import React, { Component } from 'react';
import Footer from './Footer';
import Profile from './Profile';
import Skills from './Skills';
import Header from './Header';
import Splash from './Splash';
export default class Home extends Component {
    render() {
        return (
            <div >
                <Splash />
                <Profile />
                <Skills />
                <Footer />
            </div>

        )
    }
}


