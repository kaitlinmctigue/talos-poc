import React, {Component} from 'react';
import people from './peopleList';
import Card from './Card';
import Table from "react-bootstrap/es/Table";
import Modal from "react-bootstrap/es/Modal";
import DetailModal from "./DetailModal";
import Tabs from "react-bootstrap/es/Tabs";
import Tab from "react-bootstrap/es/Tab";

const peopleAll = people.people;
const demand = peopleAll.splice(0, 6);
const addressing = peopleAll.splice(0, 4);
const consulting = peopleAll.splice(0, 3);
const transferring = peopleAll.splice(0, 4);
const complete = peopleAll.splice(0, 2);

function Stroke(props) {
    if (props.patient.stroke) {
        return <div className="card_critical-alert--icon stroke-icon"></div>;
    }
    return null;
}

function Trauma(props) {
    if (props.patient.trauma) {
        return <div className="card_critical-alert--icon trauma-icon"></div>;
    }
    return null;
}

function Heart(props) {
    if (props.patient.stroke) {
        return <div className="card_critical-alert--icon heart-icon"></div>;
    }
    return null;
}

function EMTALA(props) {
    if (props.patient.emtala) {
        return <div className="card_badge card_badge--emtala">EMTALA</div>;
    }
    return null;
}

function ISO(props) {
    if (props.patient.stroke) {
        return <div className="card_badge card_badge--iso">ISO</div>;
    }
    return null;
}

function toggleModal() {

}

function PatientRow(props) {
    return (
        <tr onClick={toggleModal}>

            <Modal
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
                className="modal_case-detail">
                <Modal.Body>
                    <DetailModal patient={props.patient}/>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn_positive"
                            onClick={toggleModal}>Close</button>
                </Modal.Footer>
            </Modal>

            <td className={(props.patient.sex == 'Male') ? 'table-row--name table-row--male' : 'table-row--name table-row--female'}>
                <strong>{props.patient.name.lname}, {props.patient.name.fname}</strong>
            </td>
            <td>
                <Stroke patient={props.patient}/>
                <Trauma patient={props.patient}/>
                <Heart patient={props.patient}/>
                <ISO patient={props.patient}/>
                <EMTALA patient={props.patient}/>
            </td>
            <td>{props.patient.condition}</td>
            <td>{props.patient.sfacility}</td>
            <td>{props.patient.sphysician}</td>
            <td>{props.patient.rfacility}</td>
        </tr>
    )
}

class Listview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            demand: demand,
            consulting: consulting,
            addressing: addressing,
            transferring: transferring,
            complete: complete,
            showModal: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    // componentDidMount() {
    //     console.log(people);
    //     peopleAll = people.people;
    //     demand = peopleAll.splice(0, 6);
    //     addressing = peopleAll.splice(0, 4);
    //     consulting = peopleAll.splice(0, 3);
    //     transferring = peopleAll.splice(0, 4);
    //     complete = peopleAll.splice(0, 2);
    //
    //     this.state = {
    //         demand: demand,
    //         consulting: consulting,
    //         addressing: addressing,
    //         transferring: transferring,
    //         complete: complete,
    //     };
    // }

    render() {
        return (
            <div className="container-table-parent">
                <div className="header">
                    <h2>Worklist</h2>
                    <button className="btn btn_positive">Create Case</button>
                </div>
                <div className="container-tableview">
                    <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Demand (8)">
                            <div className="container-filter form-group">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-3">
                                        <select className="form-control">
                                            {/*<option value selected>test</option>*/}
                                        </select>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-3">
                                        <input className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="container-table">
                                <Table responsive striped bordered condensed hover>
                                    <thead>
                                    <tr>
                                        <th>Patient</th>
                                        <th>Flags</th>
                                        <th>Diagnosis</th>
                                        <th>Referring Facility</th>
                                        <th>Referring Physicians</th>
                                        <th>Destination Facility</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {demand.map(patient => (
                                        <PatientRow patient={patient}/>
                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                        <Tab eventKey={2} title="Active">
                            <div className="container-filter form-group">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-3">
                                        <select className="form-control">
                                            {/*<option value selected>test</option>*/}
                                        </select>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-3">
                                        <input className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="container-table">
                                <Table responsive striped bordered condensed hover>
                                    <thead>
                                    <tr>
                                        <th>Patient</th>
                                        <th>Flags</th>
                                        <th>Diagnosis</th>
                                        <th>Referring Facility</th>
                                        <th>Referring Physicians</th>
                                        <th>Destination Facility</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {addressing.map(patient => (
                                        <PatientRow patient={patient}/>
                                    ))}
                                    {consulting.map(patient => (
                                        <PatientRow patient={patient}/>
                                    ))}
                                    {transferring.map(patient => (
                                        <PatientRow patient={patient}/>
                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                        <Tab eventKey={3} title="Upcoming (3)">
                            <div className="container-filter form-group">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-3">
                                        <select className="form-control">
                                            {/*<option value selected>test</option>*/}
                                        </select>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-3">
                                        <input className="form-control"/>
                                    </div>
                                </div>
                            </div>
                            <div className="container-table">
                                <Table responsive striped bordered condensed hover>
                                    <thead>
                                    <tr>
                                        <th>Patient</th>
                                        <th>Flags</th>
                                        <th>Diagnosis</th>
                                        <th>Referring Facility</th>
                                        <th>Referring Physicians</th>
                                        <th>Destination Facility</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {complete.map(patient => (
                                        <PatientRow patient={patient}/>
                                    ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Listview;
