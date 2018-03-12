import React, {Component} from 'react'

import firebase from 'firebase';
import {provider, auth} from '../../firebase/firebase';

import MiddleWare from '../../store/middleware/middleware'
import { connect } from "react-redux"

import { findDOMNode } from 'react-dom';
import $ from 'jquery';

// import Signup from './signup'

// react-router
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Auth extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           
                // name: '',
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                contact: 0,
                isLogin: false
           
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.signupUser = this.signupUser.bind(this);

    }
            
   
    handleFirstNameChange(e) {
        this.setState({ firstName : e.target.value });
     }

    handleLastNameChange(e) {
    this.setState({ lastName : e.target.value });
    }


    handleEmailChange(e) {
        this.setState({ email : e.target.value });
        }

    handlePasswordChange(e) {
        this.setState({ password : e.target.value });
        }


    handleContactChange(e) {
        this.setState({ contact : e.target.value });
        }


    loginUser = (e) => {
        e.preventDefault();
        let useradd = {
            email: this.state.email,
            password: this.state.password,
            
    }
        console.log('user', useradd)
        this.props.userData(useradd)
    }

    signupUser = e => {
        e.preventDefault();
        let obj = {
          name: this.state.firstName + this.state.lastName,
        // name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          contactNum: this.state.contact
        };
        let route = this.props.history;
        console.log("user", obj);
        this.props.SignupData(obj, route);
      };

    handledsignup = () => {
        const el = findDOMNode(this.refs.toggle1);
        

        $('#loginbox').hide(); $('#signupbox').show()
                
    };


    handlelogin= () => {
        const el = findDOMNode(this.refs.toggle2);
        $('#signupbox').hide(); $('#loginbox').show()
       
    };

    render(){
        const {user} = this.state

        return(
            <div>
                <div id="loginbox" style={{marginTop:'50px'}} class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">                    
                    <div class="panel panel-info" >
                            <div class="panel-heading">
                                <div class="panel-title">Sign In</div>
                                <div style={{float:'right', fontSize: '80%' ,position: 'relative', top:'-10px'}}><a href="#">Forgot password?</a></div>
                            </div>     

                            <div style={{paddingTop:'30px'}} class="panel-body" >

                                <div style={{display:'none'}} id="login-alert" class="alert alert-danger col-sm-12"></div>
                                    
                                <form id="loginform" class="form-horizontal" role="form" onSubmit={this.loginUser}>
                                            
                                    <div style={{marginBottom: '25px'}} class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                                <input 
                                                    style={{width: '200px'}}
                                                    type="email" 
                                                    class="form-control" 
                                                    value={this.state.email}
                                                    onChange={this.handleEmailChange}
                                                    placeholder="User Email" 
                                                    name="email" 
                                                    id="mail"
                                                    required/>                                        
                                    </div>
                                        
                                    <div style={{marginBottom: '25px'}} class="input-group">
                                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                                <input 
                                                    style={{width: '200px'}}
                                                    type="password" 
                                                    class="form-control" 
                                                    value={this.state.password}
                                                    onChange={this.handlePasswordChange}
                                                    placeholder="password" 
                                                    name="password" 
                                                    id="pass"
                                                    required/> 
                                                
                                    </div>
                                            

                                        
                                    <div class="input-group">
                                            <div class="checkbox">
                                                <label>
                                                <input id="login-remember" type="checkbox" name="remember" value="1"/> Remember me
                                                </label>
                                            </div>
                                    </div>


                                    <div style={{marginTop:'10px'}} class="form-group">

                                        <div class="col-sm-12 controls">
                                        <button type="submit" className="btn btn-primary" style={{textAlign: 'center', width: '150px',backgroundColor: '#0097A7', borderRadius: '1px'}}>Submit</button>
                                            <FacebookAuth/>

                                        </div>
                                    </div>


                                    <div class="form-group" >
                                        <div class="col-md-12 control">
                                            <div style={{borderTop: '1px solid #888', paddingTop:'15px', fontSize:'85%'}} ref={'toggle1'}>
                                                Don't have an account! 
                                                <a href="#" onClick={this.handledsignup} >
                                                Sign Up Here
                                                </a>
                                            </div>
                                        </div>
                                    </div>    
                                </form>     

                            </div>                     
                    </div>  
                </div>
                <div id="signupbox" style={{display:'none', marginTop:'50px'}} class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" ref={'toggle2'}>
                        <div class="panel panel-info">
                            <div class="panel-heading">
                                <div class="panel-title" >Sign Up</div>
                                <div style={{float:'right', fontSize: '85%', position: 'relative', top:'-10px'}} ><a id="signinlink" href="#" onClick={this.handlelogin}>Sign In</a></div>
                            </div>  
                            <div class="panel-body" >
                                <form id="signupform" class="form-horizontal" role="form" onSubmit={this.signupUser}>
                                    
                                    <div class="form-group">
                                        <label for="email" class="col-md-3 control-label">Email</label>
                                        <div class="col-md-9">
                                            <input 
                                                value={this.state.email}
                                                onChange={this.handleEmailChange}
                                                type="email" 
                                                class="form-control" 
                                                name="email" 
                                                placeholder="Email Address"
                                                required/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="firstname" class="col-md-3 control-label">First Name</label>
                                        <div class="col-md-9">
                                            <input 
                                                value={this.state.firstName}
                                                onChange={this.handleFirstNameChange}
                                                type="text" 
                                                class="form-control" 
                                                name="name" 
                                                placeholder="First Name"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="lastname" class="col-md-3 control-label">Last Name</label>
                                        <div class="col-md-9">
                                            <input 
                                                value={this.state.lastName}
                                                onChange={this.handleLastNameChange}
                                                type="text" 
                                                class="form-control" 
                                                name="lastname" 
                                                placeholder="Last Name"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="col-md-3 control-label">Password</label>
                                        <div class="col-md-9">
                                            <input 
                                                value={this.state.password}
                                                onChange={this.handlePasswordChange}
                                                type="password" 
                                                class="form-control" 
                                                name="password" 
                                                placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="password" class="col-md-3 control-label">Contact Num</label>
                                        <div class="col-md-9">
                                            <input 
                                                value={this.state.contact}
                                                onChange={this.handleContactChange}
                                                type="number" 
                                                class="form-control" 
                                                name="number" 
                                                placeholder="contact number"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-offset-3 col-md-9">
                                        <button type="submit" className="btn btn-primary" style={{textAlign: 'center', width: '150px',backgroundColor: '#0097A7', borderRadius: '1px'}}>Signup</button>
                                        </div>
                                    </div>
                                    
                                </form>
                             </div>
                        </div>             
                    </div> 
               
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        loggedin: state.AuthReducer

    }
}

function mapDispatchToProps(dispatch) {
    return {
        userData: (data) => dispatch(MiddleWare.LoginRequest(data)),
        SignupData: (data, route) => dispatch(MiddleWare.SignupRequest(data, route))

    }
}
 
export default connect (mapStateToProps, mapDispatchToProps)(Auth)


class FacebookAuth extends React.Component{
    constructor(){
        super();
        this.state = {
            user: null
          }
    }
   
    login() {
        const result =  auth.signInWithPopup(provider)
        this.setState({user: result.user});
    }

    logout() {
        auth.signOut()
        this.setState({user: null});
    }
      
    render(){
        const {user} = this.state


        return(
            <button type="button" onClick={this.login.bind(this)} classNameName="btn btn-primary" style={{color: '#fff',textAlign: 'center',width: '180px',marginLeft: '40px',backgroundColor: '#303f9f'}}>
                   Login With Facebook
            </button>
           
        )
    }
}