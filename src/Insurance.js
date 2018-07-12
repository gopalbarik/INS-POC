import React, { Component } from 'react';
import './Insurance.css';
class Insurance extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="insurance col-lg-10 offset-lg-1 mt-2">
                    <div className="insurance_box p-2">
                        <p className="d-flex align-items-start"><i className="material-icons orange600 ">
                            fiber_manual_record
                        </i> Life Insuarnce</p></div>
                    <div className="insurance_box mt-2 p-2">
                        <p className="d-flex align-items-start ">  <i className="material-icons red100">
                            fiber_manual_record
                        </i>Travel Insurance</p></div>
                    <div className="insurance_box mt-2 p-2">
                        <p className="d-flex align-items-start "> <i className="material-icons green200">
                            fiber_manual_record
                    </i> Home Insurance </p></div>
                </div>
            </div>
        );
    }
}
export default Insurance;