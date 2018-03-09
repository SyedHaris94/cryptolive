import React, {Component} from 'react'

import firebase from 'firebase';
import {provider, auth} from '../../firebase/firebase';

import MiddleWare from '../../store/middleware/middleware'
import { connect } from "react-redux"

// react-router
import { Link } from "react-router-dom";


class Auth extends React.Component{
    constructor(){
        super();
        this.state = {
            user: {
                email: '',
                password: '',
                isLogin: false
            },
        };

        this.handleChange = this.handleChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

            
    handleChange(event) {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    loginUser = (e) => {
        e.preventDefault();
        let useradd = {
            email: this.state.user.email,
            password: this.state.user.password,
            
    }
        console.log('user', useradd)
        this.props.userData(useradd)
    }

    login() {
        const result =  auth().signInWithPopup(provider)
        this.setState({user: result.user});
    }

    logout() {
        auth().signOut()
        this.setState({user: null});
    }

    componentWillMount() {
        // const user =  auth.onAuthStateChanged();
        // if(user) this.setState({user})
      }

      
    render(){
        const {user} = this.state


        return(
            
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <h1>Login</h1>
                            <form onSubmit={this.loginUser}>
                                <div class="form-group">
                                    {/* <label for="email">Email address:</label>                                */}
                                        <input 
                                            style={{width: '200px'}}
                                            type="email" 
                                            onChange={this.handleChange}
                                            value={user.email}
                                            placeholder="User Email" 
                                            name="email" 
                                            id="mail"
                                            required/>
                                </div>
                                <div class="form-group">
                                    {/* <label for="pwd">Password:</label> */}
                                        <input 
                                            style={{width: '200px'}}
                                            type="password" 
                                            placeholder="Password" 
                                            name="password"
                                            onChange={this.handleChange}
                                            value={user.password} 
                                            id="pass"
                                            required/>
                                </div>
                                <div class="checkbox">
                                     <label><input type="checkbox"/> Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{textAlign: 'center', width: '200px',backgroundColor: '#0097A7', borderRadius: '1px'}}>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div classNameName="col-md-6">
                        <div classNameName="col-md-12" style={{paddingTop: '30px'}}>
                            <h5>If you dont have already account click <br/>
                                then the button below to create your account
                            </h5>
                        </div>
                        <div classNameName="col-md-12">
                            <Link to="publish"> <button type="button" classNameName="btn btn-primary" style={{color: '#fff',textAlign: 'center',width:'180px',marginLeft: '40px',backgroundColor: '#0097A7'}}>CREATE ACCOUNT</button></Link>
                        </div>
                        <br/>
                            {/* <h3 style={{marginLeft: '80px'}}>OR</h3> */}
                        <div classNameName="col-md-12">
                            
                            {/* <button onClick={this.login.bind(this)}>
                            Login with Facebook
                            </button> */}

                            {/* <button onClick={this.logout.bind(this)}>
                            Logout
                            </button> */}
                            <button type="button" onClick={this.login.bind(this)} classNameName="btn btn-primary" style={{color: '#fff',textAlign: 'center',width: '180px',marginLeft: '40px',backgroundColor: '#303f9f'}}>
                                SIGN WITH FACEBOOK
                            </button>
                        </div>
                        <div classNameName="col-md-12">
                            <br/>
                            <button type="button" onClick={this.login.bind(this)} classNameName="btn btn-primary" style={{color: '#fff',textAlign: 'center',width: '180px',marginLeft: '40px',backgroundColor: '#2196f3'}}>
                                SIGN WITH TWITTER
                            </button>
                         
                        </div>
                    </div>
                    <div className="col-md-12" style={{backgroundColor: '#e0e0e0',height:'50px',width: '920px',marginTop: '50px'}}>
                        <br/>
                        <p style={{textAlign: 'center'}} >So you cant get in your Account? <Link to="/" style={{ color: '#000' }}>Did you forget your password?</Link></p>
                    </div>
                </div>
            </div>
        )
    }
}
    function mapStateToProps(state) {
        return {
            loggedin: state.AuthReducer
    
        }
    }
    
    function mapDispatchToProps(dispatch) {
        return {
            userData: (data) => dispatch(MiddleWare.LoginRequest(data))
        }
    }

export default connect (mapStateToProps, mapDispatchToProps) (Auth);
