import React, { Component } from 'react'
import './footer.scss'

export default class Footer extends Component {



    handleURL(url) {
        window.open(url);
    }


    render() {
        return (
            <section id='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-12 col-lg-offset-5 col-sm-offset-5'>
                            <div className='col-lg-1'>
                                <img className='img-github' onClick={() => this.handleURL('https://github.com/dantt775')}
                                    src={require('../../assets/images/git-hub.png')} />
                            </div>

                            <div className='col-lg-1'>
                                <img onClick={() => this.handleURL('https://linkedin.com')}
                                    src={require('../../assets/images/linkedin.png')} />
                            </div>
                        </div>

                    </div>



                </div>
            </section>
        )
    }
}