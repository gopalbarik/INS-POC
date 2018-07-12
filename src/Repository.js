import React, { Component } from 'react';
import Initials from './initials';
export default class Repository extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Kritika Priyadarshni',
            address: 'Cognizant bantala',
            email: 'kritika@gmail.com',
            phone: '9876543219'
        },
            {
                tracking_id: '62716317625',
                advisor_name: 'Charlie',
                status: 'pending'
            }
    }


    render() {
        return (
            <Initials name={this.state.name} address={this.state.address} email={this.state.email} phone={this.state.phone} tracking_id={this.state.tracking_id} />
        );
    }
}