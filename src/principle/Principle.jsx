import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import Students from '../Students.jsx';
import ListOfFaculties from '../ListOfFaculties.jsx';
import HODList from '../HODList.jsx';
import PerformanceDetails from '../PerformanceDetails.jsx';

export default class Principle extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div>Hi principle</div>
                <NavLink to={this.props.match.url+'/students'}>students</NavLink><br/>
                <NavLink to={this.props.match.url+'/list_of_faculties'}>View List Of Faculties</NavLink><br/>
                <NavLink to={this.props.match.url+'/list_of_hod'}>View List Of HODs</NavLink><br/>
                <NavLink to={this.props.match.url+'/performance_details'}>View Performance Details</NavLink><br/>
                <Route path={this.props.match.path+'/students'} component={Students}/>
                <Route path={this.props.match.path+'/list_of_faculties'} component={ListOfFaculties}/>
                <Route path={this.props.match.path+'/list_of_hod'} component={HODList}/>
                <Route path={this.props.match.path+'/performance_details'} component={PerformanceDetails}/>
            </div>
        );
    }
} 