import React, {Component} from 'react';
import {Route,NavLink} from 'react-router-dom';
import PerformanceDetails from './PerformanceDetails.jsx';
import Students from './Students.jsx';
import AttendanceDetails from './AttendanceDetails.jsx';
import MarksDetails from './MarksDetails.jsx';
import ListOfFaculties from './ListOfFaculties.jsx';

export default class Hod extends Component {
    render() {
        return(
            <div>
                <NavLink to={this.props.match.url+'/performance_details'}>Performance Details</NavLink><br/>
                <NavLink to={this.props.match.url+'/students'}>View All Students</NavLink><br/>
                <NavLink to={this.props.match.url+'/marks_details'}>View Marks Of Students</NavLink><br/>
                <NavLink to={this.props.match.url+'/attendance_details'}>View Attendance Of Students</NavLink><br/>
                <NavLink to={this.props.match.url+'/list_of_faculties'}>View List Of Faculties</NavLink><br/>
                <Route path={this.props.match.path+'/performance_details'} component={PerformanceDetails}/>
                <Route path={this.props.match.path+'/students'} component={Students}/>
                <Route path={this.props.match.path+'/marks_details'} component={MarksDetails}/>
                <Route path={this.props.match.path+'/attendance_details'} component={AttendanceDetails}/>
                <Route path={this.props.match.path+'/list_of_faculties'} component={ListOfFaculties}/>
            </div>
        );
    }
}