import React, {Component} from 'react';


export default class StudentsFeeDetails extends Component {
    render() {
        return(
            <table >
                <tbody>
                <tr>
                    <th>Student Name</th>
                    <th>Fees</th>
                </tr>
                <tr>
                    <td>Student 1</td>
                    <td>10000</td>
                </tr>
                <tr>
                    <td>Student 2</td>
                    <td>10000</td>
                </tr>
                <tr>
                    <td>Student 3</td>
                    <td>90000</td>
                </tr>
                </tbody>
            </table>
        );
    }
}