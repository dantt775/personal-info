import React, { Component } from 'react'

import './skills.scss'

export default class SkillItem extends Component {
    constructor(props) {
        super(props);
    }


    createRating() {
        let i=0, jsx = [
            <span className="fa fa-star "></span>,
            <span className="fa fa-star "></span>,
            <span className="fa fa-star "></span>,
            <span className="fa fa-star "></span>,
            <span className="fa fa-star "></span>,
            //<span className="fa fa-star-half-o" aria-hidden="true"></span>,
            
        ]
        for (i; i < this.props.level; i++) {
          jsx[i] = <span className="fa fa-star checked"></span>;
        }
        if(!Number.isInteger(this.props.level)){
            jsx[i-1]=<span className="fa fa-star-half-o" aria-hidden="true"></span>;
        }
        return jsx;
    }

    render() {
        return (
            <div className='skill-item'>
                <p>{this.props.language}</p>
                <p>{this.createRating()}</p>

            </div>

        )
    }
}

