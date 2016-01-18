import {PubSub, Store} from 'react-at-rest'
import React from 'react'
import ContactListItem from './contact_list_item'
import ContactForm from './contact_form'


// PubSub provides a workflow for retrieving resources from the API
class ContactList extends PubSub {

  constructor(props) {
    super(props)

    // create a store for accessing the /contacts API.
    this.ContactStore = new Store('contacts');

    // bind our event handlers
    this.handleEditContact = this.handleEditContact.bind(this);
    this.handleEditComplete = this.handleEditComplete.bind(this);
  }


  bindResources(props) {
    // subscribe to all Contacts via the ContactStore
    this.subscribeAll(this.ContactStore);
  }


  // event handler for clicking the Edit button
  handleEditContact(id) {
    return (e) => {
      e.preventDefault();
      this.setState({editingContact: id});
    }
  }


  // event handler for closing the Contact Form
  handleEditComplete() {
    this.setState({editingContact: null});
  }


  renderContacts() {
    // loop through and render all the contacts retrieved from the API.
    // Our ContactStore stores its data in state.contacts
    var contacts = this.state.contacts.map((contact) => {
      if (contact.id === this.state.editingContact)
        return <ContactForm
                  store={this.ContactStore}
                  model={contact}
                  key={contact.id}
                  onSuccess={this.handleEditComplete} />
      else
        return <ContactListItem
                  contact={contact}
                  key={contact.id}
                  onClickEdit={this.handleEditContact} />
    });
    return contacts
  }


  // render either the "add new contact" button, or the new contact form
  // depending on state
  renderNewContact() {
    if (this.state.newContact !== true)
      return <button
              style={{marginTop: 30}}
              onClick={() => this.setState({newContact: true})}
              className='btn btn-default'>Add New Contact</button>
    else
      return (
        <div style={{marginTop: 30}}>
          <h4>Add New Contact</h4>
          <ContactForm
            store={this.ContactStore}
            model={{}}
            onSuccess={() => this.setState({newContact: false})} />
        </div>
      )
  }


  render() {
    // state.loaded will be true when all bound resources have finished their initial load
    if (!this.state.loaded) return <div>Loading contacts...</div>

    return (
      <div className='list-group'>
        {this.renderContacts()}
        {this.renderNewContact()}
      </div>
    )
  }

}

module.exports = ContactList;
