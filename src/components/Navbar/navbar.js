import React, {Component} from 'react'
import '../../css/style-main.css'

// importing images & icons
import round from '../../icons/round.png'
import logo from '../../img/logo.png'


import Auth from '../auth/auth'

// react-router
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

import { ToastContainer, toast } from 'react-toastify';

import * as DB from "../../firebase/firebase";

class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedOption1: 'usd',
            User: null
        }
        this.handlecurrency = this.handlecurrency.bind(this);
        this.logout.bind(this);

    }

    handlecurrency(e){
        this.setState({
            selectedOption1: e.target.value,
        });
    }

    logout() {
        let authen = DB.auth;
        authen.signOut()
        console.log('logout')
    }

    componentDidMount(){
        if(this.props.userLogin === true){
            this.props.userData();
            this.props.userLogin();
    }
    }

   
    render(){
        const  User = DB.auth.currentUser;
        
        DB.auth.onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log('signed in');
            } else {
                console.log('user not signed in');
            }
          });
          
          console.log('sds', User)

          let name, email, photoUrl, uid, emailVerified;
          
          if (User != null) {
            name = User.displayName;
            email = User.email;
            // photoUrl = user.photoURL;
            emailVerified = User.emailVerified;
            uid = User.uid;  
          }

          console.log('name', name)
          console.log('email', email)
          console.log('uid', uid)
         
        return(
            <div>
        
        {/* {console.log("user", this.props.userState)} */}
        {/* {console.log("login", this.props.userLogin)} */}
        
              {/* NAVBAR SECTION STARTS*/}
          <section id="navbar-strap">
          <div className="navbar navbar-default navbar-fixed-top" role="navigation">
              <div className="col-md-12 top-nav">
                  <div className="container">
                      <div className="col-md-12">
                        <div className="pull-right right-side-button" >
                                <ToastContainer />
                            {User != null ? <a id="btn-logut" href="#" style={{textDecoration: 'none'}} onClick={this.logout} hide> Welcome: {email} </a> : <a id="btn-login" href="#" data-toggle="modal" data-target="#myModal" style={{textDecoration: 'none'}}>LOGIN</a> }
                        </div>
                      </div>
                  </div>
              </div>
              <div className="container">
          
                  <div className="navbar-header">
          
                      {/* <!-- Making the collapse navigation for mobile viewport --> */}
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <span className="sr-only">Toggle Navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
          
                      <Link to="/"style={{ textDecoration: "none" }} className="navbar-brand" >
                            <div className="logo">
                                    <img src={logo} />
                            </div>
                      </Link>
          
                       
                  </div>
          
                  {/* <!-- Using the collapse here so that when the breakpoint is triggred this is linked with the menu--> */}
                  <div className="navbar-collapse collapse">
                      <ul className="nav navbar-nav navbar-right">
                          <li>
                            <Link to="/"style={{ textDecoration: "none" }} >
                                MARKETS
                             </Link>
                          </li>
                          <li>
                            <Link to="/icopage" style={{ textDecoration: "none" }} >
                                ICOs
                            </Link>
                          </li>
                          <li>
                            <Link to="/about" style={{ textDecoration: "none" }} >
                                ABOUT CRYPTOLIVE
                            </Link>
                          </li>
                          <li>
                            <Link to="/publish" style={{ textDecoration: "none" }} >
                                PUBLISH ICO
                            </Link>
                          </li>
                          
                      </ul>
                  </div>
            </div>
          </div>
      </section>

    {/* NAVBAR SECTION ENDS*/}
    </div>
          
        )
    }
}


const mapStateToProps = (state) => {
    return {
    // listState: state.RateReducer.getrate,
    userState: state.AuthReducer.profile,
    userLogin: state.AuthReducer.loggedIn

      };
    }

const mapDispatchToProps=(dispatch) =>{
    return {
        userData: (data) => dispatch(MiddleWare.LoginRequest(data)),
        getUserList: () => {
            dispatch(MiddleWare.UserProfile());
        }


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);