import React, { Component } from 'react'


export default class Header extends Component {

    render() {
        return (
            <section style={styles.container}>

                <div style={styles.itemsContainer}>
                
                    <a style={styles.itemsContainer.a}> Teste</a>
                    <a style={styles.itemsContainer.a}> Teste</a>
                    <a style={styles.itemsContainer.a}> Teste</a>

                </div>

            </section>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        backgroundColor: 'gray',
        height: 80
    },
    itemsContainer: {
        fontColor: 'black',
        a: {
            color: 'black',
        }
    }
}