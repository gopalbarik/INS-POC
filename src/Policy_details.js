import React, { Component } from 'react';
import './Policy_details.css';
class Policy_details extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row">
                <div className="policy_box col-lg-10 offset-lg-1 mt-2 ">
                    <p className="d-flex align-items-start mt-2">Tracking Id: 209648352</p>
                    <p className="d-flex align-items-start mt-2"> Advisor Name: Charlie</p>
                    <p className="d-flex align-items-start mt-2">Status: Pending</p>
                </div>
            </div>
        );
    }
}
export default Policy_details;