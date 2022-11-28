import React, { Component } from 'react'

import profileImage from '../profileImage.jpeg'

export default class HeadCV extends Component {
    render() {
        return (
            <div className='head-cv'>
                <div className='profile-picture'
                    style={{
                        backgroundImage: `url(${profileImage})`
                        , backgroundSize: "cover"
                    }}>
                </div>
                <div className='title'>
                    <h1>Husu Bayramli</h1>
                    <h2>Frontend Developer </h2>
                </div>
            </div>
        )
    }
}
