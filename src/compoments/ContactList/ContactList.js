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
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Login</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>User ID</th>
                </tr>
            </thead>
            <tbody>
                {contactItems}
            </tbody>
        </table>
    )
}

export default ContactList