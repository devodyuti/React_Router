import React, {Component} from 'react';
import {Route,NavLink} from 'react-router-dom';
import AssignAssignment from './AssignAssignment.jsx';
import ViewAssignments from './ViewAssignments.jsx';
import AttendanceDetails from './AttendanceDetails.jsx';
import Students from './Students.jsx';
import PerformanceDetails from './PerformanceDetails.jsx';
import ViewLibrary from './ViewLibrary.jsx';

export default class Faculty extends Component {
    render() {
        return (
            <div>
                <NavLink to={this.props.match.url+'/assign_assignment'}>Assign Assignment</NavLink><br/>
                <NavLink to={this.props.match.url+'/view_assignment'}>View Assignment</NavLink><br/>
                <NavLink to={this.props.match.url+'/attendance_details'}>View/Create Attendance</NavLink><br/>
                <NavLink to={this.props.match.url+'/students'}>View All Students</NavLink><br/>
                <NavLink to={this.props.match.url+'/performance_details'}>View Performance Details</NavLink><br/>
                <NavLink to={this.props.match.url+'/library'}>View Library</NavLink><br/>
                <Route path={this.props.match.path+'/students'} component={Students}/>
                <Route path={this.props.match.path+'/assign_assignment'} component={AssignAssignment}/>
                <Route path={this.props.match.path+'/view_assignment'} component={ViewAssignments}/>
                <Route path={this.props.match.path+'/attendance_details'} component={AttendanceDetails}/>
                <Route path={this.props.match.path+'/performance_details'} component={PerformanceDetails}/>
                <Route path={this.props.match.path+'/library'} component={ViewLibrary}/>
            </div>
        );
    }
}