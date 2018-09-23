import React, {Component} from 'react';


export default class EmployeesPerformanceDetails extends Component {
    render() {
        return(
            <table >
                <tbody>
                <tr>
                    <th>Employee Name</th>
                    <th>Performance</th>
                </tr>
                <tr>
                    <td>Employee 1</td>
                    <td>Needs Improvemet</td>
                </tr>
                <tr>
                    <td>Employee 2</td>
                    <td>Met Expectation</td>
                </tr>
                <tr>
                    <td>Employee 3</td>
                    <td>Excellent</td>
                </tr>
                </tbody>
            </table>
        );
    }
}