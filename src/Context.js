import React, { Component } from 'react';

const Context = React.createContext();

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
        ]
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
