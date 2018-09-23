import React, {Component} from 'react';
import {Route,NavLink} from 'react-router-dom';
import CreateInvoice from './CreateInvoice.jsx';
import GeneratePayslip from './GeneratePayslip.jsx';
import ListOfFaculties from './ListOfFaculties.jsx';
import Students from './Students.jsx';

export default class Accountant extends Component {
    render() {
        return (
            <div>
                <NavLink to={this.props.match.url+'/create_invoice'}>Create Invoice</NavLink><br/>
                <NavLink to={this.props.match.url+'/generate_payslip'}>Generate Payslip</NavLink><br/>
                <NavLink to={this.props.match.url+'/list_of_faculties'}>List Of Faculties</NavLink><br/>
                <NavLink to={this.props.match.url+'/students'}>View All Students</NavLink><br/>
                <Route path={this.props.match.path+'/create_invoice'} component={CreateInvoice}/>
                <Route path={this.props.match.path+'/generate_payslip'} component={GeneratePayslip}/>
                <Route path={this.props.match.path+'/list_of_faculties'} component={ListOfFaculties}/>
                <Route path={this.props.match.path+'/students'} component={Students}/>
            </div>
        );
    }
}