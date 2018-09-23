import React, {Component} from 'react';
import {Route,NavLink,Switch} from 'react-router-dom';
import ListOfFaculties from '../ListOfFaculties.jsx';
import Students from '../Students.jsx';
import StudentsFeeDetails from '../StudentsFeeDetails.jsx';
import EmployeeSalaryDetails from '../EmployeeSalaryDetails.jsx';
import PerformanceDetails from '../PerformanceDetails.jsx';
import HODList from '../HODList.jsx';
import navStyle from '../app1.css';

export default class Admin extends Component {
    render() {
        return (
            <div className={navStyle.allign}>
                <NavLink activeClassName={navStyle.decorateNav} to={this.props.match.url+'/list_of_faculties'}>All Faculty List</NavLink><br/>
                <NavLink activeClassName={navStyle.decorateNav} to={this.props.match.url+'/students'}>students</NavLink><br/>
                <NavLink activeClassName={navStyle.decorateNav} to={this.props.match.url+'/student_fee_details'}>Students Fee Details</NavLink><br/>
                <NavLink activeClassName={navStyle.decorateNav} to={this.props.match.url+'/employee_salary_details'}>Employee Salary Details</NavLink><br/>
                <NavLink activeClassName={navStyle.decorateNav} to={this.props.match.url+'/performance_details'}>View Performance Details</NavLink><br/>
                <NavLink activeClassName={navStyle.decorateNav} to={this.props.match.url+'/list_of_hods'}>View All Hods</NavLink>
                <Route path={this.props.match.path+'/students'} component={Students}/>
                <Route path={this.props.match.path+'/list_of_faculties'} component={ListOfFaculties}/>
                <Route path={this.props.match.path+'/student_fee_details'} component={StudentsFeeDetails}/>
                <Route path={this.props.match.path+'/employee_salary_details'}  component={EmployeeSalaryDetails}/>
                <Route path={this.props.match.path+'/list_of_hods'}  component={HODList}/>
                <Route path={this.props.match.path+'/performance_details'}  component={PerformanceDetails}/>
            </div>
        );
    }
} 