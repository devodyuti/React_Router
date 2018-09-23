import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login.js';



export default class App extends React.Component {
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Route  path='/' component={Login}/>
                    </div>
                </Router>
            </div>
        );
    }
}

//<Route path='/' component={Initial}/>