import React, {Component} from 'react';


export default class EmployeeSalaryDetails extends Component {
    render() {
        return(
            <table >
                <tbody>
                <tr>
                    <th>Employee Name</th>
                    <th>Salary</th>
                </tr>
                <tr>
                    <td>Employee 1</td>
                    <td>10000</td>
                </tr>
                <tr>
                    <td>Employee 2</td>
                    <td>10000</td>
                </tr>
                <tr>
                    <td>Employee 3</td>
                    <td>90000</td>
                </tr>
                </tbody>
            </table>
        );
    }
}