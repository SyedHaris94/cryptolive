import React, {Component} from 'react'
import '../../css/style-main.css'

// importing images & icons
import round from '../../icons/round.png'
// import logo from '../../img/logo.png'

import logo from '../../img/Slice.png'


// import Auth from '../auth/auth'

// react-router
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

import {Auth} from '../index'

import * as DB from "../../firebase/firebase";
import { ToastContainer, toast } from 'react-toastify';


class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            selectedOption1: 'usd',
            User: null,
            theme: import ('../../css/style-main.css')

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
        localStorage.removeItem('user')
        window.location.reload()
        toast.success("logout succesfull", {
            position: toast.POSITION.TOP_RIGHT
        })
}
    
   

    changeDark(){
        import ('../../css/dark-theme.css');
    }

    changeLite(){
        window.location.reload()
    }
   
    componentDidMount(){
        if(this.props.userLogin === true){
            this.props.userData();
            this.props.userLogin();
        }

        
        console.log('user session',localStorage.getItem("user"))
        // if (!localStorage.getItem('user')){
        //     localStorage.setItem('user',0)
        // }

    }

    componentWillUpdate(nextProps, nextState){
      
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
          
          console.log('user..', User)

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
        {console.log("login", this.props.userLogin)}
        
              {/* NAVBAR SECTION STARTS*/}
          <section id="navbar-strap">
          <ToastContainer />   
          <div className="navbar navbar-default navbar-fixed-top" role="navigation">
              <div className="col-md-12 top-nav">
                  <div className="container">
                      <div className="col-md-12">
                        <div className="pull-right right-side-button" >                                                       
                        <a id="style-main" class="style-changer" href="#" onClick={this.changeLite}>
                            <i class="fa fa-2x fa-sun-o" aria-hidden="true"></i>
                        </a>
                        <a id="dark-theme" class="style-changer" href="#" onClick={this.changeDark}>
                            <i class="fa fa-2x fa-moon-o" aria-hidden="true"></i>
                        </a>
                            {localStorage.getItem("user") ? <a id="btn-logut" href="#" style={{textDecoration: 'none'}} onClick={this.logout} hide> Welcome {localStorage.getItem("user")} <i class="fa fa-sign-out" aria-hidden="true"></i></a> : 
                            <a id="btn-login" href="#" data-toggle="modal" data-target="#myModal" style={{textDecoration: 'none'}}>LOGIN</a> }
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
                                <img src={logo} className="logo" />
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
          <Auth/>
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