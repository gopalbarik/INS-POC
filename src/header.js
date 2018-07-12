import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div classname="row">
                <div className="header col-lg-10 offset-lg-1 ">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#news">Claims</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a className="active ml-auto" href="#about">User</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Header;
