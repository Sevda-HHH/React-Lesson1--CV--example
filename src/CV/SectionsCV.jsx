import React, { Component } from 'react';

export default class SectionsCV extends Component {
    render() {
        return (
            <div className='sectionsCV' key={this.props.index}>
                <div className='title'>{this.props.item.title}</div> 
                <ul>
                    {this.props.item.list !== undefined && this.props.item.list.map((elem, index) => {
                        return <li key={index}>{elem}</li>
                    })}
                </ul>
            </div>
        )
    }
}
