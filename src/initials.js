import React, { Component } from 'react';
import Avatar from 'react-avatar';
import './Initials.css';
class Initials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
        }
    }

    render() {
        return (
            <div classname="row">
                <div className="content col-lg-10 offset-lg-1">
                    <div className="initials mt-3 ml-3">
                        <Avatar color={Avatar.getRandomColor('sitebase', ['palegreen'])}
                            name="Kritka Priyadarshni"
                            round={true} />
                    </div>
                    <div className="info_box mr-2 mt-2">
                        <div className="personal_information ">
                            <p className=" d-flex align-items-start ml-2 mt-2">Name:{this.state.name}</p>
                            <p className=" d-flex align-items-start ml-2 mt-2">Address:{this.props.address}</p>
                            <p className=" d-flex align-items-start ml-2 mt-2">Email: {this.props.email}</p>
                            <p className=" d-flex align-items-start ml-2 mt-2">Phone: {this.props.phone}</p></div>
                    </div>
                </div>
            </div>

        );
    }



}
export default Initials;