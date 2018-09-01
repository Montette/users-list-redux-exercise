import React from 'react';
import Contact from '../Contact/Contact'

const ContactList = (props) => {
    
    let contactItems = props.contacts.map((contact) => {
        // console.log(contact);
        if(contact === '') {
            return null
        } else {
       return  <Contact name={`${contact.name.first} ${contact.name.last}`} key={contact.login.username} avatar={contact.picture.thumbnail} phone={contact.phone}/>
        }
    }) 
    return (
        <ul>
            {contactItems}   
        </ul>   
    )
}

export default ContactList