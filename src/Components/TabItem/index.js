import React, { Component } from 'react'
import './style.css'

class TabItem extends Component {

  onClickTab = () => {
    const {tabDetails, changeTab} = this.props
    changeTab(tabDetails.tabId)
  }
  render() {
    const {tabDetails, isActive} = this.props 
    const tabClass = isActive ? 'tab-button active' : 'tab-button'
    return(
      <li className="tab-item">
        <button className = {tabClass} onClick= {this.onClickTab}>{tabDetails.displayText}</button>
      </li>
    )
  }
}
export default TabItem

