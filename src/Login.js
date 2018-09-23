import React, {Component} from 'react';
import {logUser,logOutUser} from './actions/LoginAction.js';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Admin from './Admin/Admin.jsx';
import Principle from './principle/Principle.jsx';
import Faculty from './Faculty.jsx';
import Accountant from './Accountant.jsx';
import Hod from './Hod.jsx';

const styles = {
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end'
}

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            showLogin:true,
            showErrorMessage:false
        }
    }

    navigateUser() {
        switch(this.props.user&&this.props.user.Key) {
            case 'admin123':
                this.setState({showLogin:false});
                this.props.history.push('/admin');
                break;                
            case 'principle345':
                this.setState({showLogin:false});
                this.props.history.push('/principle');
                break;
            case 'faculty':
                this.setState({showLogin:false});
                this.props.history.push('/faculty');
                break;
            case 'accountant1234':
                this.setState({showLogin:false});
                this.props.history.push('/accountant');
                break;
            case 'hod1234':
                this.setState({showLogin:false});
                this.props.history.push('/hod');
                break;
            default:
                break;
        }
        this.setState({showErrorMessage:true});
    }

    getUserId(event) {
        this.setState({showErrorMessage:false});
        console.log(event.target.value);
        this.props.logUser(event.target.value);
    }

    renderLogin() {
        if(this.state.showLogin) {
            return(
                <div>
                    <h2>Please login</h2>
                    <span>UserId</span>
                    <input  type="text" onChange={(event)=>this.getUserId(event)}/>
                    <button onClick={()=>this.navigateUser()}>Login</button>
                    {this.state.showErrorMessage&&<h5 style={{color:'red'}}>userId is invalid</h5>}
                </div>
            );
        }
    }

    renderRoutes() {
        if(!this.state.showLogin){
            return (
                <div>
                    {this.props.user && this.props.user.Key==='admin123' && <Route path={'/admin'} component={Admin}/>}
                    {this.props.user && this.props.user.Key==='principle345' && <Route path={'/principle'} component={Principle}/>}
                    {this.props.user && this.props.user.Key==='faculty' && <Route path={'/faculty'} component={Faculty}/>}
                    {this.props.user && this.props.user.Key==='accountant1234' && <Route path={'/accountant'} component={Accountant}/>}
                    {this.props.user && this.props.user.Key==='hod1234' && <Route path={'/hod'} component={Hod}/>}
                </div>
            );
            
        }
    }

    logOut() {
        this.setState({showLogin:true,showErrorMessage:false});
        this.props.logOutUser();
        this.props.history.push('/');

    }

    render(){
        return(
            <div>
                {this.renderLogin()}
                {this.renderRoutes()}
                <div style={styles}>
                    {!this.state.showLogin&&<button onClick={()=>{this.logOut()}}>Log Out </button>}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        user:state.userStore
    }
}

export default connect(mapStateToProps,{logUser,logOutUser})(Login);