import React, {Component} from 'react';
import Footer from '../footer/Footer.jsx';
import Carousel from '../carousel/Carousel.jsx';
import Profile from '../profile/Profile.jsx';
import Skills from '../skills/Skills.jsx';
import Contact from '../contact/Contact.jsx';
import "../../assets/scss/main.scss";
import './home.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="teste">
              
              <Profile />
              <Skills />
              <Footer />
            </div>

        )
    }
}


