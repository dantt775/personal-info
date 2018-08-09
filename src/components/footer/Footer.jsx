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
                        <div className='col-lg-12'>

                            <div className='icons-container'>    
                                <a><img className='img-github' onClick={() => this.handleURL('https://github.com/dantt775')}
                                    src={require('../../assets/images/git-hub.png')} />
                                </a>

                                <a><img className='img-linkedin' onClick={() => this.handleURL('https://linkedin.com')}
                                    src={require('../../assets/images/linkedin.png')} />
                                </a>
                            </div>
                            <p> Daniel Marchi © 2018 </p>
                            <p> daniel.marchi@outlook.com </p>
                        </div>

                    </div>
                    <div className='row'>

                    </div>



                </div>
            </section>
        )
    }
}