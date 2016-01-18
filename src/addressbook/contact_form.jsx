import React from 'react'
import {RestForm, Forms} from 'react-at-rest'

class ContactForm extends RestForm {

  render() {
    let deleteButton;
    let cancelButton;

    // only show a Delete and Cancel button if the resource already exists in the DB (eg. Update vs. Create)
    if (this.props.model.id) {
      deleteButton = <button className='btn btn-danger' onClick={this.handleDestroy}>Delete</button>;
      cancelButton = <button className='btn btn-default' onClick={this.props.handleEditComplete}>Cancel</button>;
    }

    // build the form for a Contact
    return (
      <div className="list-group-item">
        <form onSubmit={this.handleSubmit}>
          <Forms.TextInput {...this.getFieldProps('name')} autoFocus={true} />
          <Forms.TextInput {...this.getFieldProps('email')} />
          <div className='text-right'>
            {cancelButton}
            &nbsp;
            {deleteButton}
            &nbsp;
            <button className='btn btn-primary' disabled={_.isEmpty(this.state.patch)}>Save</button>
          </div>
        </form>
      </div>
    )
  }

}

module.exports = ContactForm
