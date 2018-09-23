import React, {Component} from 'react';
import {connect} from 'react-redux';

class ViewAssignments extends Component {

   renderAssignments() {
       return this.props.assignments.length>0?this.props.assignments.map((assign,index)=>{
           return (
                <tr key={index}>
                    <td><input value={assign.id} disabled type='text'/></td>
                    <td><textarea value={assign.assignment} disabled type="text"/></td> 
                    <td><input disabled value={assign.startDate} type="date"/></td>
                    <td><input disabled value={assign.endDate} type="date"/></td>
                </tr>
           )
       }) : <tr>
                <td><input  disabled type='text'/></td>
                <td><textarea  disabled type="text"/></td> 
                <td><input disabled  type="date"/></td>
                <td><input disabled  type="date"/></td>
            </tr>       
    }
    render() {
        return(
            <table>
                <tbody>
                    <tr>
                        <th>Student Id</th>
                        <th>Assignments</th>
                        <th>start date</th>
                        <th>end date</th>
                    </tr>
                    {this.renderAssignments()}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps=(state)=> {
    return {
        assignments:state.formData
    }
};

export default connect(mapStateToProps)(ViewAssignments)