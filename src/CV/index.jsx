import React, { Component } from 'react'

import HeadCV from './HeadCV'
import SectionsCV from './SectionsCV'

import './style.css';
 

export default class CV extends Component {
    
    render() {


        if (this.state.number === 10) {
            setTimeout(() => {
                this.setState({
                    number: 100,
                    surname: "Hello"
                })
            }, 2000);

        }
        console.log("state number ", )

        console.log("state number ", this.state.number)
        return (
            <div>
                <HeadCV />
                {this.props.data.map((item, index) => {
                    return <SectionsCV index={Math.random(index)} item={this.state.surname}  />
                })}
            </div>
        )
    }
}
