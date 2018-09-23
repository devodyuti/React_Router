import React, {Component} from 'react';
import {connect} from 'react-redux';
import {attendanceAction} from './actions/attendanceAction';

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


class AttendanceDetails extends Component {

    state = {
        changeAttendance:false
    }

    generateAttendanceTable(){
        return studentsFromServiceMockData.map((student,index)=> {
            return(
                <tr key={index}>
                    <td><input id={`Student${student.id}`} value={`Student${student.id}`} disabled/></td>
                    <td><input disabled={!this.state.changeAttendance} readOnly={false} id={`attendanceOfStudent${student.id}`} name={`attendanceOfStudent${student.id}`} defaultValue={this.props.attendance.length!==0?this.props.attendance[index].attendance:'0%' } type="text" /></td>

                </tr>
            );
        });
    }

    editAttendance() {
        this.setState({
            changeAttendance:true
        });
    }

    submitForm(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const attendanceOfStudents = studentsFromServiceMockData.map(student=>{
            return {
                id:student.id,
                attendance:data.get(`attendanceOfStudent${student.id}`)
            }
        });
        this.props.attendanceAction(attendanceOfStudents);
        this.props.history.push('/'+this.props.match.url.split('/')[1]);
    }
    render() {
        return (
            <div>
                <form onSubmit={(event)=>{this.submitForm(event)}}>
                    <table >
                        <tbody>
                            <tr>
                                <th>Student Name</th>
                                <th>Attendance</th>
                            </tr>
                            {this.generateAttendanceTable()}
                        </tbody>
                    </table>
                    <input disabled={!this.state.changeAttendance} type='submit'/>
                </form>
                <button onClick={()=>{this.editAttendance()}}>Edit Attendance</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        attendance:state.attendance
    }
}

export default connect(mapStateToProps,{attendanceAction})(AttendanceDetails);