import React, { Component } from 'react';

import './App.css';
import ContactList from '../compoments/ContactList/ContactList';
import { ContactsFilterContainer } from '../compoments/ContactsFilter/ContactsFilter';

import { connect } from "react-redux";
import { contactsFetched } from "../actions/action";
import { getFilteredContacts } from '../selectors/getFilteredContacts'

class App extends Component {
 

  componentDidMount (){
    fetch("https://randomuser.me/api/?format=json&results=10")
    .then(response => response.json())
    .then(response => {

      this.props.contactsFetched(response.results)
      })
  }


  render() {
    return (
      <div className="App">
      <ContactsFilterContainer />
      <ContactList contacts={this.props.contacts}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: getFilteredContacts(state.contacts, state.contactsSearch)
  }
}

const mapDispatchToProps = { contactsFetched };
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

