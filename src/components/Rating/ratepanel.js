import React, {Component} from 'react'

import MiddleWare from "../../store//middleware/middleware";
import { connect } from "react-redux";

class RatePanel extends React.Component{

    render(){

        let overall = this.props.overall_rate;

        return(
                <div class="col-md-10 col-xs-9">
                    <div class="col-md-3 col-xs-12">
                        <p class="bitMap-1stDiv"> Medicalchain is a decentralized platform that enables secure, fast platform</p>
                    </div>
                    <div class="col-md-3 col-xs-12">
                        <div class="row col-xs-12">
                            <p class="end-time">END IN</p>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-xs-6 endDate">
                                <div class="col-md-4 col-xs-4">
                                    <h3 class="end-date">21</h3>
                                    <p class="end-days">Days</p>
                                </div>
                                <div class="col-md-4 col-xs-4">
                                    <h3 class="end-date">17</h3>
                                    <p class="end-hours">Hours</p>
                                </div>
                                <div class="col-md-4 col-xs-4">
                                    <h3 class="end-date">17</h3>
                                    <p class="end-minut">Minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6 col-xs-6 rateDiv">
                                <h1 class="rating-number">4.8</h1> <sub class="subscript-rating">/5</sub>
                                <p class="rating-icon-fa">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                </p>
                                <p class="beforeIcon-ratingStar-text">
                                    Based on 247 reviews over the past year
                                </p>
                            </div>
                        </div>
                    </div>  
                </div>

        );
    }
}

    

export default (RatePanel);