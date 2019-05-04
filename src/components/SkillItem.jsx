import React, { Component } from 'react'


export default class SkillItem extends Component {
    constructor(props) {
        super(props);
    }


    createRating() {
        let i = 0, jsx = [
            <span style={styles.unchecked}></span>,
            <span style={styles.unchecked} className="fa fa-star "></span>,
            <span style={styles.unchecked} className="fa fa-star "></span>,
            <span style={styles.unchecked}className="fa fa-star "></span>,
            <span style={styles.unchecked} className="fa fa-star "></span>,
            //<span className="fa fa-star-half-o" aria-hidden="true"></span>,

        ]
        for (i; i < this.props.level; i++) {
            jsx[i] = <span style={styles.checkedAndHalf} className="fa fa-star checked"></span>;
        }
        if (!Number.isInteger(this.props.level)) {
            jsx[i - 1] = <span style={styles.checkedAndHalf} className="fa fa-star-half-o" aria-hidden="true"></span>;
        }
        return jsx;
    }

    render() {
        return (
            <div style={styles.skillItem}>
                <p style={styles.skillItem.p}>{this.props.language}</p>
                <p>{this.createRating()}</p>

            </div>

        )
    }
}
const styles = {
    skillItem: {
        padding: 5,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 250,
        p:{
            color: 'black',
            fontSize: 14
        }
        
    },
    checkedAndHalf: {
        color: 'orange',
        backgroundColor: 'ping',
    },
    unchecked: {
        color: 'gray'
    }
}
