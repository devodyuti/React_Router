import React, {Component} from 'react';

export default class ViewLibrary extends Component {
    render() {
        return(
            <table>
                <tbody>
                <tr>
                    <th>Books</th>
                    <th>shelf</th>
                </tr>
                <tr>
                    <td>C++</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Scala</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Node</td>
                    <td>3</td>
                </tr>
                </tbody>
            </table>
        );
    }
}