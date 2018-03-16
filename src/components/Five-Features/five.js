import React , {Component} from 'react'
// import '../../css/style-main.css'

// react-router
import { Link } from "react-router-dom";

import { findDOMNode } from 'react-dom';

import $ from 'jquery';
 
class FiveFeature extends React.Component{
constructor(props){
    super(props);

    this.handlehover = this.handlehover.bind(this);

}
    handlehover = () => {
        const el = findDOMNode(this.refs.toggle1); 
        $(".div1").hover(
            function() {
                $(this).addClass('active');
            }, function() {
                if(!$( this).hasClass('clicked') ){
                    $( this ).removeClass('active');
                }
            }
        );
        
        $(".div1").click(function(){
            $(this).toggleClass('clicked');
        });    };
    render(){
        return(
            <div>
                {/* <!-- IMAGES SECTION STARTS --> */}
                <section id="five-features">
                    <div className="container">
                        <div className="row" align="center">
                        {/* <div className= 'div1' ref={'toggle1'} onClick={this.handlehover}></div> */}
                            <div className=" col-md-offset-1 col-md-2 col-xs-offset-1 col-xs-2 fv-item">
                                <Link to= "/" style={{textDecoration: 'none'}}>
                                <i className="fa fa-money fa-2x five-icons" aria-hidden="true"></i>
                                    <p className="currency-heading">CURRENCIES</p>
                                </Link>
                            </div>
                            <div className="col-md-2 col-xs-2 fv-item">
                                 <Link to="exchanges" style={{textDecoration: 'none'}}>
                                    <i className="fa fa-exchange fa-2x five-icons" aria-hidden="true"></i>
                                    <p className="exchange-heading">EXCHANGES</p>
                                </Link>
                            </div>
                            
                            <div className="col-md-2 col-xs-2 fv-item">
                                <Link to="market" style={{textDecoration: 'none'}}>
                                    <i className="fa fa-usd fa-2x five-icons" aria-hidden="true"></i>
                                    <p className="markets-heading selected">MARKETS</p>
                                </Link>
                            </div>
                            <div className="col-md-2 col-xs-2 fv-item">
                                <Link to="/" style={{textDecoration: 'none'}}>
                                <i className="fa fa-binoculars fa-2x five-icons" aria-hidden="true"></i>
                                    <p className="watchlist-heading">WATCHLIST</p>
                                </Link>
                            </div>

                            <div className="col-md-2 col-xs-2 fv-item">
                                <Link to="/" style={{textDecoration: 'none'}}>
                                    <i className="fa fa-line-chart fa-2x five-icons" aria-hidden="true"></i>
                                    <p className="portfolio-heading">PORTFOLIO</p>
                                </Link>
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