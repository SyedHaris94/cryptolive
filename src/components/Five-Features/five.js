import React , {Component} from 'react'
// import '../../css/style-main.css'

// react-router
import { Link } from "react-router-dom";

// importing images & icons

import currencies from '../../icons/money-bill-alt.png'
import exchange from '../../icons/exchange-alt.png'
import markets from '../../icons/dollar-sign-selected.png'
import watchlist from '../../icons/binoculars.png'
import portfolio from '../../icons/chart-line.png'
class FiveFeature extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- IMAGES SECTION STARTS --> */}
                <section id="five-features">
                    <div className="container">
                        <div className="row" align="center">

                            <div className=" col-md-offset-1 col-md-2 col-xs-offset-1 col-xs-2 fv-item">
                                <Link to= "/" style={{textDecoration: 'none'}}>
                                    <img src={currencies} alt="currency-icon"/>
                                        <p className="currency-heading">CURRENCIES</p>
                                </Link>
                            </div>
                            <div className="col-md-2 col-xs-2 fv-item">
                                 <Link to="exchanges" style={{textDecoration: 'none'}}>
                                    <img src={exchange} alt="exchange-icon"/>
                                    <p className="exchange-heading">EXCHANGES</p>
                                </Link>
                            </div>
                            
                            <div className="col-md-2 col-xs-2 fv-item">
                                <Link to="market" style={{textDecoration: 'none'}}>
                                    <img src={markets}   alt="dollar-icon"/>
                                    <p className="markets-heading selected">MARKETS</p>
                                </Link>
                            </div>
                            <div className="col-md-2 col-xs-2 fv-item">
                                    <img src={watchlist} alt="binocular-icon"/>
                                    <p className="watchlist-heading">WATCHLIST</p>
                            </div>

                            <div className="col-md-2 col-xs-2 fv-item">
                                    <img src={portfolio} alt="chart-line-icon"/>
                                    <p className="portfolio-heading">PORTFOLIO</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- IMAGES SECTION ENDS --> */}
            </div>
        )
    }
}


export default FiveFeature;