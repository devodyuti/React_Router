import React, {Component} from 'react';
import {Route,NavLink} from 'react-router-dom';
import StudentsPerformanceDetails from './StudentsPerformanceDetails.jsx';
import EmployeesPerformanceDetails from './EmployeesPerformanceDetails.jsx';

export default class PerformanceDetails extends Component {
    render() {
        return (
            <div>
                <NavLink to={this.props.match.url+'/students_performance'}>View Students Performnace</NavLink><br/>
                <NavLink to={this.props.match.url+'/employee_performance'}>View Employees Performnace</NavLink><br/>
                <Route path={this.props.match.path+'/students_performance'} component={StudentsPerformanceDetails}/>
                <Route path={this.props.match.path+'/employee_performance'} component={EmployeesPerformanceDetails}/>
            </div>
        );
    }
}