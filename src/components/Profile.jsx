import React, { Component } from 'react'


export default class Profile extends Component {
    render() {
        return (
            <div style={styles.container}>

                <div style={styles.aboutItem}>
                    <p >
                        <h2>Sobre mim</h2>
                        Lorem ipsum cubilia aliquet nostra dictum, vehicula egestas habitasse nisi curabitur tellus,
                        vitae quisque neque tempus. vehicula malesuada est nisl velit ut vel non augue molestie risus,
                        torquent ligula aenean conubia hac quisque pulvinar est fermentum magna, eu interdum aliquet
                        facilisis suscipit tempor inceptos rutrum ad. arcu nibh blandit nostra semper sed porta lectus
                        nam libero.
                    </p>
                </div>


                <div style={styles.aboutItem}>
                    <img style={styles.avatar} src={require('../assets/images/avatar.png')} />
                </div>


                <div style={styles.aboutItem}>
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


const styles = {
    aboutItem: {
        background: 'tomato',
        padding: '5',
        width: 300,
        height: 300,
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        height: 1100,
        paddingTop: 350
    },
    avatar: {
        height: '80%',
    }
}