import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Global from '../../Global';

const Nav = styled.nav`
    background-color: ${Global.color.primary};
    
`;
// ${props => props.isScrolled && css`
//         background-color: red;    
//     `}

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false,
            isReady: false
        };
    }

    componentDidMount() {
        window.onscroll = this.onScroll.bind(this);
    }

    onScroll() {
        const isScrolled = !this.state.isScrolled;
        console.log('isScrolled', isScrolled);
        this.setState({ isScrolled });
    }

    render() {
        const { isScrolled, isReady } = this.state;
        return(
            <>
                <Nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <NavLink className="navbar-brand" to="/">Trippy</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/hotels">
                                        Hotels
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link" activeClassName="active" to="/restaurants">
                                        Restaurants
                                </NavLink>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" activeClassName="active" to="/login">
                                            Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact className="nav-link" activeClassName="active" to="/signup">
                                            Sign up
                                    </NavLink>
                                </li>
                            </ul>
                        </span>
                    </div>
                </Nav>
            </>
        );
    }
}

export default Navigation;