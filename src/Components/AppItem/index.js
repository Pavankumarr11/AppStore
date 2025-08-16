import React, { Component } from 'react'
import './style.css'

class AppItem extends Component {
    render() {
        const { appDetails } = this.props
        const { appName, imageUrl,  } = appDetails
        return (
            <li className="app-item">
                <div class="card-container">
                    <img src={imageUrl} alt={appName} className="app-image" />
                    <p className="app-name">{appName}</p>
                </div>
            </li>
        )
    }
}

export default AppItem
