import React, {Component} from 'react'
// import '../../css/style-main.css'

// react-router
import { Link } from "react-router-dom";

import desc from '../../img/divIMg.png'
import futur from '../../img/futurDiv2.png'

import * as DB from "../../firebase/firebase";

class Jumbotron extends React.Component{
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

                                        <button type="button" class="btn btn-facebook">
                                            <i class="fa fa-facebook-square  fa-1x"></i>
                                            CONTINUE WITH FACEBOOK</button>

                                        <button type="button" class="btn btn-google">
                                            <i class="fa fa-google fa-1x"></i>
                                            CONTINUE WITH GOOGLE</button>

                                        <button type="button" class="btn btn-twitter">
                                            <i class="fa fa-twitter fa-1x"></i>
                                            CONTINUE WITH EMIAL</button>

                                        <button type="button" class="btn btn-lightBlue">
                                            <i class="fa fa-envelope fa-1x"></i>
                                            CONTINUE WITH EMIAL</button>

                                    </div> 
                                : null }
                            </div>
                            <div class="row">
                                <h3 className= "feature">Feature ICOs</h3>

                                <div class="col-md-2 futureIcoDiv">
                                    <img class="imgdiv" src={desc} alt=""/>
                                    <div class="list-inline">
                                        <li class="rating">4.4</li>
                                        <li class="icon-star"><i class="fa fa-star"></i></li>
                                    </div>
                                    <h4 class="h4Head">StopTheFakes</h4>
                                    <p class="divPara">To achieve the button styles above, Bootstrap has the following classes:</p>
                                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                                </div>

                                <div class="col-md-2 futureIcoDiv">
                                    <img class="imgdiv" src={futur}/>
                                    <div class="list-inline">
                                        <li class="rating">4.4</li>
                                        <li class="icon-star"><i class="fa fa-star"></i></li>
                                    </div>
                                    <h4 class="h4Head">StopTheFakes</h4>
                                    <p class="divPara">To achieve the button styles above, Bootstrap has the following classes:</p>
                                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                                </div>

                                <div class="col-md-2 futureIcoDiv">
                                    <img class="imgdiv" src={desc} alt=""/>
                                    <div class="list-inline">
                                        <li class="rating">4.4</li>
                                        <li class="icon-star"><i class="fa fa-star"></i></li>
                                    </div>
                                    <h4 class="h4Head">StopTheFakes</h4>
                                    <p class="divPara">To achieve the button styles above, Bootstrap has the following classes:</p>
                                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                                </div>

                                <div class="col-md-2 futureIcoDiv">
                                    <img class="imgdiv" src={futur} alt=""/>
                                    <div class="list-inline">
                                        <li class="rating">4.4</li>
                                        <li class="icon-star"><i class="fa fa-star"></i></li>
                                    </div>
                                    <h4 class="h4Head">StopTheFakes</h4>
                                    <p class="divPara">To achieve the button styles above, Bootstrap has the following classes:</p>
                                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                                </div>

                                <div class="col-md-2 futureIcoDiv">
                                    <img class="imgdiv" src={desc} alt=""/>
                                    <div class="list-inline">
                                        <li class="rating">4.4</li>
                                        <li class="icon-star"><i class="fa fa-star"></i></li>
                                    </div>
                                    <h4 class="h4Head">StopTheFakes</h4>
                                    <p class="divPara">To achieve the button styles above, Bootstrap has the following classes:</p>
                                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                                </div>
                            </div>
                        </div>
                    </div>              
                </section>
                {/* <!-- CONTAINER ENDS --> */}
            </div>
        );
    }
}

export default Jumbotron;