import React, { Component } from 'react';

import './App.css';
import ContactList from '../compoments/ContactList/ContactList';
import SearchInput from '../compoments/SearchInput/SearchInput';

import { connect } from "react-redux";
import { contactsFetched } from "../actions/action";

class App extends Component {
 

  componentDidMount (){
    fetch("https://randomuser.me/api/?format=json&results=10")
    .then(response => response.json())
    .then(response => {

      this.props.contactsFetched(response.results)
      })
  }

  // getFilteredContactsForText = (text) => {
  //   return this.state.contacts.filter(contact => contact.name.first.toLowerCase().includes(text.toLowerCase()))
  // }

  // searchHandler = (event) => {
  //   console.log(this.state.contacts);
  //   const text = event.currentTarget.value;
  //   const filteredContacts = this.getFilteredContactsForText(text);
  //   console.log(filteredContacts);
  //   this.setState({
  //   filteredContacts
  // });
  // }

  render() {
    return (
      <div className="App">
      {/* <SearchInput change={this.searchHandler}/> */}
      {/* {this.props.contacts ? <ContactList contacts={this.props.contacts}/> : 'Loading...'} */}
      <ContactList contacts={this.props.contacts}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts
  }
}

const mapDispatchToProps = { contactsFetched };
export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
