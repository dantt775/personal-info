import React, { Component } from 'react'

import SkillItem from './SkillItem.jsx'

export default class Skills extends Component {
    render() {
        return (
            <div style={styles.skillContainer}>
                <SkillItem
                    language={"Java"}
                    level={4.5}
                />

                <SkillItem
                    language={"SQL"}
                    level={3.5}
                />

                <SkillItem
                    language={"HTML/CSS/Javascript"}
                    level={3.5}
                />

                <SkillItem
                    language={"Reactjs"}
                    level={3.5}
                />

                <SkillItem
                    language={"React-Native"}
                    level={3}
                />

                <SkillItem
                    language={"Nodejs"}
                    level={3}
                />

                <SkillItem
                    language={"Git"}
                    level={4}
                />


            </div>
        )
    }
}

const styles = {
    skillContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'gray'
    }
}