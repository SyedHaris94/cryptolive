import React, {Component} from 'react'
// import axios from 'axios';

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

// importing images & icons
import setting from '../../icons/sun.png'
import glass from '../../icons/glass-martini.png'


// import number format
import NumberFormat from 'react-number-format';


class Middle extends React.Component{

    componentDidMount(){

        this.props.getdataa();

    }

    render(){
        // for catching the API array
        let m = this.props.resdata;

        return(
            <div>


                {/* <!-- MIDDLE CTA STARTS--> */}
                <section id="card" >
                    <div className="container">
                        <div className="row">

                            <div className="top-cards" align="center">

                                <div className="col-md-1 col-xs-2 refresh-rate-card">
                                    <h4>REFRESH</h4>
                                    <p>2 Sec</p>
                                </div>
                                {/* <div className="col-md-1 col-xs-2 korean-option-card">
                                    <h4>KOREAN</h4>
                                    <p>2 Sec</p>
                                </div>                                 */}
                                
                                <div className="col-md-2 col-xs-2 global-market">        
                                    <h4>GLOBAL MARKET</h4>
                                   <p><NumberFormat value={m.total_market_cap_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                                </div>
                                
                                <div className="col-md-1 col-xs-2 bitcoin-dominance-card">
                                    <h4>DOMINANCE</h4>
                                    <p>{m.bitcoin_percentage_of_market_cap}%</p>
                                </div>
                                <div className="col-md-1 col-xs-2 total-accounts-card">
                                    <h4>ACCOUNTS</h4>
                                    <p>{m.active_markets}</p>
                                </div>

                            </div>

                            {/* <div className="col-md-offset-1 col-md-1 customise-grid-icon">
                                <img className="img-responsive pull-left" src={setting} alt="logo"/>
                                <p>CUSTOMIZE GRID</p>
                            </div> */}

                            <div className="col-md-2 col-md-offset-2 coin-screener-icon">
                                <img className="pull-left"  src={glass} alt="logo"/>
                                <p>LAYOUT</p>
                            </div>

                            <div className="col-md-2 col-xs-12 form-inpt">

                                <form className="form-horizontal" role="Search">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term"/>
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>

                </section>
                {/* <!-- MIDDLE CTA ENDS--> */}
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return ({
        getdataa : () => {dispatch(MiddleWare.GetGlobal()); }
    })
}

const mapStateToProps = (state) => {
    return ({
        resdata : state.GlobalReducer.data
        
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(Middle);