import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../Context';

class Contacts extends Component {
    deleteContact = id => {
        const { contacts } = this.state;
        this.setState({
            contacts: contacts.filter(contact => {
                return contact.id !== id;
            })
        });
    };

    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            {contacts.map(contact => (
                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                    deleteClickHandler={this.deleteContact.bind(
                                        this,
                                        contact.id
                                    )}
                                />
                            ))}
                        </React.Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
