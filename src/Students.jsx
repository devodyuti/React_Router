import React, {Component} from 'react';

export default class Students extends Component {
    render() {
        return(
            <div>
                 <table >
                <tbody>
                <tr>
                    <th>Student Name</th>
                </tr>
                <tr>
                    <td>Student 1</td>
                </tr>
                <tr>
                    <td>Student 2</td>
                </tr>
                <tr>
                    <td>Student 3</td>
                </tr>
                </tbody>
            </table>
            </div>
        );
    }
}