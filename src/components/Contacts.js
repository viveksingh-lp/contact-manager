import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Chester Bennington',
                email: 'chesterbe@gmail.com',
                phone: '333-333-3333'
            },
            {
                id: 2,
                name: 'Brad Delson',
                email: 'bdelson@gmail.com',
                phone: '111-111-1111'
            },
            {
                id: 3,
                name: 'Rob Bourdon',
                email: 'robbourdon@gmail.com',
                phone: '222-222-2222'
            }
        ]
    };

    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </React.Fragment>
        );
    }
}

export default Contacts;
