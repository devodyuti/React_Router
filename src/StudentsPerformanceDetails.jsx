import React, {Component} from 'react';


export default class StudentsPerformanceDetails extends Component {
    render() {
        return(
            <table >
                <tbody>
                <tr>
                    <th>Student Name</th>
                    <th>Performance</th>
                </tr>
                <tr>
                    <td>Student 1</td>
                    <td>Needs Improvemet</td>
                </tr>
                <tr>
                    <td>Student 2</td>
                    <td>Met Expectation</td>
                </tr>
                <tr>
                    <td>Student 3</td>
                    <td>Excellent</td>
                </tr>
                </tbody>
            </table>
        );
    }
}