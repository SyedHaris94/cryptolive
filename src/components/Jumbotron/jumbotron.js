import React, {Component} from 'react'
// import '../../css/style-main.css'

// react-router
import { Link } from "react-router-dom";

import desc from '../../img/divIMg.png'
import futur from '../../img/futurDiv2.png'

// import bitcoin from '../../img/bitcoin.jpeg'

import * as DB from "../../firebase/firebase";
import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'


import {FeatureICO} from '../index'
class Jumbotron extends React.Component{
    constructor(props){
        super(props);
        
        this.twitter = this.twitter.bind(this);
        this.facebook = this.facebook.bind(this);
        this.google = this.google.bind(this);
    }

    
    facebook(){
        this.props.facebook('adad')
    }

    twitter(){
        this.props.twitter('adad')
    }
    google(){
        this.props.google('adad')
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
        
        return(
            <div>
                {/* <!-- CONTAINER STARTS --> */}
                <section id="jumbo">             
                    <div class="jumbotron">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <h3> Invest Smarter With CoinMarketcap.</h3>
                                    <h3> ICOs Ratings From Top Investors and Experts.
                                    </h3>
                                    <Link to="/"style={{ textDecoration: "none" }} className="btn btn-default" >
                                            MARKET
                                    </Link>
                                    <Link to="/icopage"style={{ textDecoration: "none" }} className="btn btn-default" >
                                            ICO
                                    </Link>
                                </div>
                                {User == null ?
                                    <div class="col-md-4 iconButtonDiv">
                                        <h3 id="h3Text">Create a free account</h3>

                                        <button type="button" class="btn btn-facebook" onClick={this.facebook}>
                                            <i class="fa fa-facebook-square  fa-1x"></i>
                                            CONTINUE WITH FACEBOOK</button>

                                        <button type="button" class="btn btn-google" onClick={this.google}>
                                            <i class="fa fa-google fa-1x"></i>
                                            CONTINUE WITH GOOGLE</button>

                                        <button type="button" class="btn btn-twitter" onClick={this.twitter}>
                                            <i class="fa fa-twitter fa-1x"></i>
                                            CONTINUE WITH TWITTER</button>

                                        <button type="button" class="btn btn-lightBlue" data-toggle="modal" data-target="#myModal">
                                            <i class="fa fa-envelope fa-1x"></i>
                                            CONTINUE WITH EMAIL</button>

                                    </div> 
                                : null }
                            </div>
                           <FeatureICO/>
                        </div>
                    </div>              
                </section>
                {/* <!-- CONTAINER ENDS --> */}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        facebook: data => {dispatch(MiddleWare.LoginFacebook(data))},
        twitter: data => {dispatch(MiddleWare.LoginTwitter(data))},
        google: data => {dispatch(MiddleWare.LoginGoogle(data))},
        getList: () => {dispatch(MiddleWare.fetchIcoData());},
        
    })
}


export default connect(null,mapDispatchToProps)(Jumbotron);