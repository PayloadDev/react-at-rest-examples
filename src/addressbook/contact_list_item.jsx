import React from 'react'

class ContactListItem extends React.Component {

  render() {
    return (
      <div className="list-group-item">
        <div className="pull-right">
          <button
            className="btn btn-default"
            onClick={this.props.onClickEdit(this.props.contact.id)}>Edit</button>
        </div>
        <h4 className="list-group-item-heading">{this.props.contact.name}</h4>
        <div className="list-group-item-text">
          <a href="mailto:{this.props.contact.email}">{this.props.contact.email}</a>
        </div>
      </div>
    )
  }

}

module.exports = ContactListItem
