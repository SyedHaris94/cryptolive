import React, {Component} from 'react'
// import '../../css/style-main.css'

// react-router
import { Link } from "react-router-dom";

class Jumbotron extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- CONTAINER STARTS --> */}
                <section id="jumbo">
                    <div className="jumbotron">
                        <div className="container">
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
                    </div>
                </section>
                {/* <!-- CONTAINER ENDS --> */}
            </div>
        );
    }
}

export default Jumbotron;