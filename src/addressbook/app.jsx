import React from 'react'
import {EventableComponent, AppEvents} from 'react-at-rest'
import ContactList from './contact_list'

// EventableComponent provides event handling methods such as @listenTo and @stopListening
class App extends EventableComponent {

  componentDidMount() {
    // set up some global error handling
    this.listenTo(AppEvents, 'api.exception', (error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Address Book</h1>
        <ContactList />
      </div>
    );
  }

}

module.exports = App;
