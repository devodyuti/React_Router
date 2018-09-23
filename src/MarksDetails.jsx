import React, {Component} from 'react';

export default class MarksDetails extends Component {
    render() {
        return (
            <div>
                <table >
                    <tbody>
                        <tr>
                            <th>Student Name</th>
                            <th>Marks</th>
                        </tr>
                        <tr>
                            <td>Student 1</td>
                            <td>67%</td>
                        </tr>
                        <tr>
                            <td>Student 2</td>
                            <td>77%</td>
                        </tr>
                        <tr>
                            <td>Student 3</td>
                            <td>90%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}