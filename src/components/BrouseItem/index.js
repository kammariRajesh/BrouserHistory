import {Component} from 'react'

import './index.css'

class BrouseItem extends Component {
  deleteBrouseItem = () => {
    const {item, deleteHistory} = this.props
    const {id} = item
    return deleteHistory(id)
  }

  render() {
    const {item} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = item
    return (
      <div className="list-item-bg-container">
        <li className="list-item">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="app-icon" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </li>
        <button
          type="button"
          className="delete-icon"
          testid="delete"
          onClick={this.deleteBrouseItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    )
  }
}

export default BrouseItem
