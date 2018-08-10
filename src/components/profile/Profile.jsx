import React, { Component } from 'react'

import './profile.scss'

export default class Profile extends Component {
    render() {
        return (
            <section id="profile">
                <div className='container'>

                    <div className='row'>
                        <div className='col-lg-8 col-lg-offset-2'>
                            <h1 className='profile-title'>Perfil</h1>
                        </div>
                    </div>


                    <div className='row'>

                        <div className='col-lg-12'>


                            <div className='col-lg-4'>
                                <h1 className='about-title'> Sobre mim </h1>
                                <p className='about-p'>
                                    Lorem ipsum cubilia aliquet nostra dictum, vehicula egestas habitasse nisi curabitur tellus,
                                    vitae quisque neque tempus. vehicula malesuada est nisl velit ut vel non augue molestie risus,
                                    torquent ligula aenean conubia hac quisque pulvinar est fermentum magna, eu interdum aliquet
                                    facilisis suscipit tempor inceptos rutrum ad. arcu nibh blandit nostra semper sed porta lectus
                                    nam libero.

                                </p>
                            </div>

                            <div className='col-lg-4 col-lg-offset-0'>
                                <div className='avatar-container'>
                                    <img className='avatar' src={require('../../assets/images/avatar.png')} />
                                </div>
                            </div>

                            <div className='col-lg-4'>
                                <h1 className='details-title'> Detalhes </h1>

                                <h2 className='details-subtitle'> Nome </h2>
                                <p className='details-p'> Daniel Marchi Silva </p>

                                <h2 className='details-subtitle'> Idade </h2>
                                <p className='details-p'> 25 anos </p>

                                <h2 className='details-subtitle'> Local </h2>
                                <p className='details-p'> São Paulo / SP </p>


                            </div>

                        </div>

                    </div>

                </div>



            </section>
        )
    }
}
