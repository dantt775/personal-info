import React, { Component } from 'react'

import './profile.scss'

export default class Profile extends Component {
    render() {
        return (
            <div id='container'>

                <div className='about-item'>
                    <p >
                        <h2>Sobre mim</h2>
                        Lorem ipsum cubilia aliquet nostra dictum, vehicula egestas habitasse nisi curabitur tellus,
                        vitae quisque neque tempus. vehicula malesuada est nisl velit ut vel non augue molestie risus,
                        torquent ligula aenean conubia hac quisque pulvinar est fermentum magna, eu interdum aliquet
                        facilisis suscipit tempor inceptos rutrum ad. arcu nibh blandit nostra semper sed porta lectus
                        nam libero.
                    </p>
                </div>


                <div className='about-item'>
                    <img className='avatar' src={require('../../assets/images/avatar.png')} />
                </div>
                

                <div className='about-item'>
                    <p >
                        <h2> Dados </h2>
                        Lorem ipsum cubilia aliquet nostra dictum, vehicula egestas habitasse nisi curabitur tellus,
                        vitae quisque neque tempus. vehicula malesuada est nisl velit ut vel non augue molestie risus,
                        torquent ligula aenean conubia hac quisque pulvinar est fermentum magna, eu interdum aliquet
                        facilisis suscipit tempor inceptos rutrum ad. arcu nibh blandit nostra semper sed porta lectus
                        nam libero.
                    </p>
                </div>





            </div>
        )
    }
}
