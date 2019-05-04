import React, { Component } from 'react';

export default class Footer extends Component {

    handleURL(url) {
        window.open(url);
    }
    render() {
        return (

            <div style={styles.containerFooter}>

                <div style={styles.iconsContainer}>
                    <a><img style={styles.imgSocial} onClick={() => this.handleURL('https://github.com/dantt775')}
                        src={require('../assets/images/git-hub.png')} />
                    </a>

                    <a><img style={styles.imgSocial} onClick={() => this.handleURL('https://linkedin.com')}
                        src={require('../assets/images/linkedin.png')} />
                    </a>
                </div>
                <div style={styles.infoFooter}>
                    <p> Daniel Marchi © 2018 </p>
                    <p> daniel.marchi@outlook.com </p>
                </div>
            </div>

        )
    }
}

const styles = {
    containerFooter: {
        display: 'flex',
        flexDirection: 'column',
        height: 200,
        

    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    imgSocial: {
        marginLeft: 10,        
    },
    infoFooter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    }

}