import React , {Component} from 'react'
// import '../../css/style-main.css'

// importing images & icons

import currencies from '../../icons/money-bill-alt-selected.png'
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
                                <img src={currencies} alt="currency-icon"/>
                                        <p className="currency-heading">CURRENCIES</p>
                            </div>
                            <div className="col-md-2 col-xs-2 fv-item">
                                    <img src={exchange} alt="exchange-icon"/>
                                    <p className="exchange-heading">EXCHANGES</p>
                            </div>
                            <div className="col-md-2 col-xs-2 fv-item">
                                <img src={markets}   alt="dollar-icon"/>
                                <p className="markets-heading selected">MARKETS</p>
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