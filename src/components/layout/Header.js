import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = props => {
    const { branding } = props;
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        {branding}
                    </a>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mr-2">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mr-2">
                                <Link to="/contact/add" className="nav-link">
                                    Add Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

Header.defaultProps = {
    branding: 'My App'
};

Header.propTypes = {
    branding: PropTypes.string.isRequired
};

export default Header;
