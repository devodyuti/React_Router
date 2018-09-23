import React, {Component} from 'react';
import {connect} from 'react-redux';
import {formDataAction} from './actions/formDataAction';

const studentsFromServiceMockData=[
    {
        id:'1'
    },
    {
        id:'2'
    },
    {
        id:'3'
    },
    {
        id:'4'
    },
    {
        id:'5'
    }
]

class AssignAssignment extends Component {

    generateStudentTable(){
        return studentsFromServiceMockData.map((student,index)=> {
            return(
                <tr key={index}>
                    <td><input id={`studentId${student.id}`} name={`studentId${student.id}`} value={student.id} disabled type='text'/></td>
                    <td><textarea id={`assignStudentId${student.id}`} name={`assignStudentId${student.id}`} type="text"/></td> 
                    <td><input id={`startDateOfStudentId${student.id}`} name={`startDateOfStudentId${student.id}`} type="date"/></td>
                    <td><input id={`endDateOfStudentId${student.id}`} name={`endDateOfStudentId${student.id}`} type="date"/></td>
                </tr>
            );
        });
    }

    submitForm(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const taskDetailsOfStudents = studentsFromServiceMockData.map(student=>{
            return {
                id:student.id,
                assignment:data.get(`assignStudentId${student.id}`),
                startDate:data.get(`startDateOfStudentId${student.id}`),
                endDate:data.get(`endDateOfStudentId${student.id}`)
            }
        });
        this.props.formDataAction(taskDetailsOfStudents);
        this.props.history.push('/faculty');
    }

    render() {
        return (
            <div>
                <form onSubmit={(event)=>this.submitForm(event)}>
                <table>
                    <tbody>
                        <tr>
                            <th>Student Id</th>
                            <th>Task Details</th> 
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                        {this.generateStudentTable()}
                    </tbody>
                </table>
                <input type="submit"/>
                </form>
            </div>
        );
    }
}


export default connect(null,{formDataAction})(AssignAssignment);