import React, {Component} from 'react'

import MiddleWare from "../../store//middleware/middleware";
import { connect } from "react-redux";

class RatePanel extends React.Component{

    render(){

        let overall = this.props.overall_rate;

        return(
            <div className='row'>
                <div className="col-md-6 col-xs-12">
                    <h1 className="ratePoint"></h1>{overall} <sub className="subscript">/5</sub>
                    <p className="rating-icon">
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </p>
                    <p className="beforeIcon-ratingStar">
                        Based on 247 reviews over the past year
                    </p>
                </div>
                <div className="col-md-5 col-xs-12 progressBar">
                    <div className="row rating-row-1">
                        <div className="col-md-1 col-xs-1 num-rating">5</div>
                        <div className="col-md-1 col-xs-1"><i className="fa fa-star star" aria-hidden="true"></i></div>
                        <div className="col-md-7 col-xs-7 progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                            </div>
                        </div>
                        <div className="col-md-1 col-xs-1 num-rating num-rat">245</div>
                    </div>

                    <div className="row rating-row-2">
                        <div className="col-md-1 col-xs-1 num-rating">4</div>
                        <div className="col-md-1 col-xs-1"><i className="fa fa-star star" aria-hidden="true"></i></div>
                        <div className="col-md-7 col-xs-7 progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="0"
                                aria-valuemin="0" aria-valuemax="100" style={{width:"20%"}}>
                            </div>
                        </div>
                        <div className="col-md-1 col-xs-1 num-rating">17</div>
                    </div>
                    <div className="row rating-row-3">
                        <div className="col-md-1 col-xs-1 col-xs-1 num-rating">3</div>
                        <div className="col-md-1 col-xs-1 col-xs-1"><i className="fa fa-star star" aria-hidden="true"></i></div>
                        <div className="col-md-7 col-xs-7 col-xs-7 progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{width:"5%"}}>
                            </div>
                        </div>
                        <div className="col-md-1 col-xs-1 num-rating">2</div>
                    </div>
                    <div className="row rating-row-4">
                        <div className="col-md-1 col-xs-1 num-rating">2</div>
                        <div className="col-md-1 col-xs-1"><i className="fa fa-star star" aria-hidden="true"></i></div>
                        <div className="col-md-7 col-xs-7 progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{width:"5%"}}>
                            </div>
                        </div>
                        <div className="col-md-1 col-xs-1 num-rating">2</div>
                    </div>
                    <div className="row rating-row-5">
                        <div className="col-md-1 col-xs-1 num-rating">1</div>
                        <div className="col-md-1 col-xs-1"><i className="fa fa-star star" aria-hidden="true"></i></div>
                        <div className="col-md-7 col-xs-7 progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                aria-valuemin="0" aria-valuemax="100" style={{width:"10%"}}>
                            </div>
                        </div>
                        <div className="col-md-1 col-xs-1 num-rating">8</div>
                    </div>
                </div>
            </div>
        );
    }
}

    

export default (RatePanel);