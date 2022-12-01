import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className='card'>
                <img src={this.props.item.images[0]} alt={this.props.item.title} />
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.description}</p>
            </div>
        )
    }
}
