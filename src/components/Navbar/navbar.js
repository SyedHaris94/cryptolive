import React, {Component} from 'react'
import '../../css/style-main.css'

// importing images & icons
import round from '../../icons/round.png'
import logo from '../../img/logo.png'


import Auth from '../auth/auth'

// react-router
import { Link } from "react-router-dom";

class Navbar extends React.Component{
    render(){
        return(
            <div>

               {/* NAVBAR SECTION STARTS*/}
          <section id="navbar-strap">
          <div className="navbar navbar-default navbar-fixed-top" role="navigation">
              <div className="col-md-12 top-nav">
                  <div className="container">
                      <div className="col-md-12">
                        <div className="pull-right right-side-button" >
                              <img className="top-nav-currency-icon" src={round} />
                               <a id="style-main" className="style-changer" href="#">
                                  <i className="fa fa-2x fa-sun-o" aria-hidden="true"></i>
                              </a>
                              <a id="dark-theme" className="style-changer" href="#">
                                  <i className="fa fa-2x fa-moon-o" aria-hidden="true"></i>
                              </a>
                              <a data-toggle="modal" data-target="#myModal">LOGIN</a>
                              {/* <Link to='auth' style={{textDecoration: 'none'}}>LOGIN</Link> */}
                                  {/* <Link to='auth' style={{textDecoration: 'none'}}>SIGN UP</Link> */}
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


export default Navbar;