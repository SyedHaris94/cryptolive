import React, {Component} from 'react'

import firebase from 'firebase';
import {provider, auth} from '../../firebase/firebase';

import { withRouter } from 'react-router-dom';
import MiddleWare from '../../store/middleware/middleware'
import { connect } from "react-redux"

import { findDOMNode } from 'react-dom';
import $ from 'jquery';

import { css } from 'glamor';

import { ToastContainer, toast } from 'react-toastify';

class Auth extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            resetmail: '',
            contact: 0,           
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.resetEmailChange = this.resetEmailChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.signupUser = this.signupUser.bind(this);
        this.ResetingPass = this.ResetingPass.bind(this);
        this.forgetPass = this.forgetPass.bind(this);
        this.close = this.close.bind(this);

        this.facebook = this.facebook.bind(this);

        
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

    resetEmailChange(e) {
        this.setState({ resetmail : e.target.value });
        }
        
    loginUser = (e) => {
        e.preventDefault();

        let useradd = {
            email: this.state.email,
            password: this.state.password,
        };

        this.setState({password: ""});
        this.setState({email: ""});
  
        
        let route = this.props.history;
        console.log('user', useradd)
        this.props.userData(useradd, route)
        
    }

    signupUser = e => {
        e.preventDefault();
        let obj = {
          name: this.state.firstName + this.state.lastName,
          //name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          contactNum: this.state.contact
        };
        this.setState({name: ""});
        this.setState({password: ""});
        this.setState({email: ""});
        this.setState({contactNum: ""});
        

        let route = this.props.history;
        console.log("user", obj);
        this.props.SignupData(obj, route);
    };

    ResetingPass = e => {
        e.preventDefault();
        let resetpassword = {
          email: this.state.resetmail
        };
        this.setState({resetmail: ""});
        console.log("reseting", resetpassword);
        this.props.reseted(resetpassword);
      };

    handledsignup = () => {
        const el = findDOMNode(this.refs.toggle1); 
        $('#loginbox').hide(); $('#forgetpass').hide();  $('#signupbox').show()               
    };

    handlelogin= () => {
        const el = findDOMNode(this.refs.toggle2);
        $('#signupbox').hide(); $('#forgetpass').hide(); $('#loginbox').show()
    };

    forgetPass = () => {
        const el = findDOMNode(this.refs.toggle3); 
        $('#loginbox').hide(); $('#forgetpass').show()               
    };

    facebook(){
        this.props.facebook('adad')
    }

    close() {
        this.setState({showModal: false});
      }
   
    render(){
        // const {user} = this.state
        
        return(
                <div class="modal fade" id="myModal" role="dialog"  >
                <ToastContainer />   
                    <div class="modal-body">
                        <div id="loginbox" style={{marginTop:'50px'}} class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" align= "center" ref={'toggle1'}>                    
                            <div class="panel panel-info" >
                                    <div class="panel-heading">
                                        <div class="panel-title">Sign In</div>
                                        <div style={{float:'right', fontSize: '80%' ,position: 'relative', top:'-10px'}}><a href="#" onClick={this.forgetPass}>Forgot password?</a></div>
                                    </div>     

                                    <div style={{paddingTop:'30px'}} class="panel-body" >

                                        <div style={{display:'none'}} id="login-alert" class="alert alert-danger col-sm-12"></div>
                                            
                                        <form id="loginform" class="form-horizontal" role="form"  onSubmit={this.loginUser} method="post">
                                                    
                                            <div style={{marginBottom: '25px'}} class="input-group col-md-offset-4">
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
                                                    autofocus
                                                    required/>                                        
                                            </div>
                                                
                                            <div style={{marginBottom: '25px'}} class="input-group col-md-offset-4">
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

                                            <div class="input-group ">
                                                <div class="checkbox">
                                                    <label>
                                                    <input id="login-remember" type="checkbox" name="remember" value="1"/> Remember me
                                                    </label>
                                                </div>
                                            </div>

                                            <div style={{marginTop:'10px'}} class="form-group">
                                                <div class="col-sm-12 controls">
                                                    <button type="submit" onClick= {this.close}
                                                        className="btn btn-primary" style={{marginLeft: '10px',marginBottom: '10px', marginTop: '10px',textAlign: 'center', width: '200px',backgroundColor: '#0097A7', borderRadius: '1px'}}>Submit
                                                    </button>
                                                    <button type="button" onClick={this.facebook} classNameName="btn btn-primary" 
                                                        style={{color: '#fff',textAlign: 'center',height: '35px', marginRight: '30px', marginBottom: '20px',
                                                        width: '200px',marginLeft: '40px',backgroundColor: '#303f9f'}} >
                                                        <i className="fa fa-facebook " aria-hidden="true" style={{marginRight: '10px'}}></i> 
                                                        Login With Facebook 
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="form-group" >
                                                <div class="col-md-12 control">
                                                    <div style={{borderTop: '1px solid #888', paddingTop:'15px', fontSize:'85%'}} >
                                                        Don't have an account! 
                                                        <a href="#" onClick={this.handledsignup}  style={{paddingLeft: '5px'}}>
                                                        Sign Up Here
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>    
                                        </form>     
                                        <button style={{display: 'none'}} id="closeModal" type="button" className="btn btn-default" data-dismiss="modal">Close
                                        </button>
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
                                        <form id="signupform" class="form-horizontal" role="form" onSubmit={this.signupUser } method="post">                                          
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
                                                        autofocus
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
                                                        placeholder="First Name"
                                                        required/>
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
                                                        placeholder="Password"
                                                        required/>
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
                                                        placeholder="contact number"
                                                        required/>
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
                        <div id="forgetpass" style={{display:'none', marginTop:'50px'}} class="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2" ref={'toggle3'} align= "center">
                                <div class="panel panel-info">
                                    <div class="panel-heading">
                                        <div class="panel-title" >Reset Password Here</div>
                                        <div style={{float:'right', fontSize: '85%', position: 'relative', top:'-10px'}} ><a id="signinlink" href="#" onClick={this.handlelogin}>Sign In</a></div>
                                    </div>  
                                    <div class="panel-body" >
                                        <form id="forgetpassform" class="form-horizontal" role="form" onSubmit={this.ResetingPass} method="post">
                                            
                                            <div class="form-group">
                                                <label for="email" class="col-md-3 control-label">Email</label>
                                                <div class="col-md-9">
                                                    <input 
                                                        value={this.state.resetmail}
                                                        onChange={this.resetEmailChange}
                                                        type="email" 
                                                        class="form-control" 
                                                        name="email" 
                                                        placeholder="Email Address"
                                                        autofocus
                                                        required/>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="col-md-offset-2 col-md-9">
                                                    <button type="submit" className="btn btn-primary" style={{textAlign: 'center', width: '150px',backgroundColor: '#0097A7', borderRadius: '1px'}}>Submit Here</button>
                                                </div>
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>             
                        </div> 
                    </div>
                </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        reseting: state.ResetPassReducer,
        // userLogin: state.AuthReducer.loggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        facebook: data => {dispatch(MiddleWare.LoginFacebook(data))},
        userData: (data, route) => dispatch(MiddleWare.LoginRequest(data, route)),
        SignupData: (data, route) => dispatch(MiddleWare.SignupRequest(data, route)),
        reseted: data => dispatch(MiddleWare.resetPass(data))
    }
}
 
export default withRouter (connect (null, mapDispatchToProps)(Auth))


// class FacebookAuth extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             user: null
//           }
//     }
   
//     login() {
//     //  app.auth().signInWithPopup(facebookProvider)
//     // const result =  auth.signInWithPopup(provider).then((result, error) => {
//     //             if (error) {
//     //                 var errorMessage ="Unable to Signin with Facebook";
//     //                 toast.error(errorMessage, {
//     //                     position: toast.POSITION.TOP_CENTER
//     //                   });
//     //             } else {
//     //             toast.success("successfully Login !", {
//     //                 position: toast.POSITION.TOP_CENTER
//     //             });
//     //             //   this.setState({ redirect: true })
//     //             }
//     //           })
//             //   this.setState({user: result.user})

        
        
        
//     }

//     logout() {
//         auth.signOut()
//         this.setState({user: null});
//     }
      
//     render(){
//         const {user} = this.state


//         return(
//             <button type="button" onClick={this.login.bind(this)} classNameName="btn btn-primary" 
//             style={{color: '#fff',textAlign: 'center',height: '35px', marginRight: '30px', marginBottom: '20px',
//                     width: '200px',marginLeft: '40px',backgroundColor: '#303f9f'}}>
//                   <i className="fa fa-facebook " aria-hidden="true" style={{marginRight: '10px'}}></i> 
//                   Login With Facebook 
//             </button>
           
//         )
//     }
// }