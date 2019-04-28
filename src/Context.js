import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
};

export class Provider extends Component {
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
        ],

        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;
