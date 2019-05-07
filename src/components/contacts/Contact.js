import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Consumer } from '../../Context';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onShowClick = e => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        });
    };

    onDeleteClick = (dispatch, id) => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                dispatch({ type: 'DELETE_CONTACT', payload: id });
            });
    };

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}{' '}
                                <i
                                    onClick={this.onShowClick}
                                    className="fas fa-sort-down"
                                    style={{ cursor: 'pointer' }}
                                />
                                <i
                                    className="fas fa-times"
                                    style={{
                                        color: 'red',
                                        float: 'right',
                                        cursor: 'pointer'
                                    }}
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        dispatch,
                                        id
                                    )}
                                />
                            </h4>
                            {showContactInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Email: {email}
                                    </li>
                                    <li className="list-group-item">
                                        Phone: {phone}
                                    </li>
                                </ul>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
