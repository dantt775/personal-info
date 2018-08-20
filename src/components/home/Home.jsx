import React, {Component} from 'react'
import Footer from '../footer/Footer.jsx'
import Carousel from '../carousel/Carousel.jsx'
import Profile from '../profile/Profile.jsx'
import Contact from '../contact/Contact.jsx'
import "../../assets/scss/main.scss";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Profile />
                <Contact />
                <Footer />
            </div>

        )
    }
}


