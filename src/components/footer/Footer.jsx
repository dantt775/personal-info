import React, { Component } from 'react'
import './footer.scss'

export default class Footer extends Component {



    handleURL(url) {
        window.open(url);
    }


    render() {
        return (

            <div id='container-footer'>




                <div className='icons-container'>
                    <a><img className='img-social' onClick={() => this.handleURL('https://github.com/dantt775')}
                        src={require('../../assets/images/git-hub.png')} />
                    </a>

                    <a><img className='img-social' onClick={() => this.handleURL('https://linkedin.com')}
                        src={require('../../assets/images/linkedin.png')} />
                    </a>
                </div>
                <div className='info-footer'>
                    <p> Daniel Marchi © 2018 </p>
                    <p> daniel.marchi@outlook.com </p>
                </div>
            </div>


        )
    }
}