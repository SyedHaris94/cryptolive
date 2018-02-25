import React, { Component } from "react";
import {Navbar, GraphTable,HomePagination, BottomCards, Footer} from '../index'


import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'


// import number format
import NumberFormat from 'react-number-format';

// react charts
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


// import images
import BTC from '../../icons/BTC.png'





const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];
class Bitcoin extends React.Component{
    
    componentDidMount(){

        this.props.getdataa();

    }

    render(){
        // for catching the API array
        let m = this.props.resdata;
        let urlParam = this.props.match.params.id;

        function gotoUrl(api, url) {
            let test = {};

            api.map((m, v) => {    
                
                if (url == m.id) {
                    test.name = m.name;
                    test.id = m.id;
                    test.symbol = m.symbol;
                    test.rank = m.rank;
                    test.price_usd = m.price_usd;
                    test.price_btc = m.price_btc;
                    test['24h_volume_usd'] = m['24h_volume_usd'];
                    test.market_cap_usd = m.market_cap_usd;
                    test.available_supply = m.available_supply;
                    test.total_supply = m.total_supply;
                    test.max_supply = m.max_supply;
                    test.market_cap_usd = m.market_cap_usd;
                    test.percent_change_1h = m.percent_change_1h;
                    test.percent_change_24h = m.percent_change_24h;
                    test.percent_change_7d = m.percent_change_7d;
                    test.last_updated = m.last_updated;
                    
                }

            });

            return test;
        }

        let pageParam = gotoUrl(m, urlParam);
        
    return(
            <div>
                <Navbar/>
                {/* {console.log('dataaa', m)} */}
                 {/* <!--TOP HEADING--> */}
                <section id="cp-heading">

                    <div className="container">
                        <div className="row">

                            <div className="col-md-8 col-xs-8">

                                <img className="pull-left img-responsive currency-icon" src={BTC} alt="BTC-icon" />
                                <h2>{pageParam.name} <span>{pageParam.symbol}</span></h2>

                                <div className="anchors">
                                    <a href="#">Website</a>
                                    <a href="#">Explorer</a>
                                    <a href="#">Message board</a>
                                    <span className="label label-default">#coin</span>
                                    <span className="label label-default">#mineable</span>
                                </div>

                            </div>

         

                            <div className="col-md-4 col-xs-4 price-info" align="right">
                                <div className="row">

                                    <div className="col-md-8 col-xs-8">
                                   {/* <NumberFormat value={pageParam.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /> */}

                                        <h3>${pageParam.price_usd} <br /> <span>{pageParam.price_btc} {pageParam.symbol}</span></h3>
                                    </div>

                                    <div className="col-md-4 col-xs-4 ">
                                        <h4 className="in-green-zone">{pageParam.percent_change_1h}% <i className="fa fa-caret-up" aria-hidden="true"></i></h4>
                                        <h4 className="in-red-zone">{pageParam.percent_change_1h}% <i className="fa fa-caret-down" aria-hidden="true"></i></h4>
                                    </div>

                                </div>
                            </div>
                        

                        </div>
                    </div>

                </section>
                {/* //  <!--TOP HEADING END--> */}

                {/* <!--TOP-CARDS-PANEL--> */}
                <section id="top-cards-panel">

                    <div className="container">
                        <div className="row">
                           <div className="detail-cards" align="center">
                            <div className="col-md-2 market-content">
                        <h4>MARKET CAP</h4>
                        <p><NumberFormat value={pageParam.market_cap_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                    </div>
                    <div className="col-md-2 volume-content">
                    <h4>VOLUME (24h)</h4>
                    <p><NumberFormat value={pageParam["24h_volume_usd"]} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                    </div>
                    <div className="col-md-3 cal-content">
                        <h4>CALCULATING SUPPLY</h4>
                        <p><NumberFormat value={pageParam.total_supply} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
                        
                        {/* <p>${pageParam.total_supply}</p> */}
                    </div>
                    <div className="col-md-2 max-content">
                        <h4>MAX SUPPLY</h4>
                        {/* <p><NumberFormat value={pageParam.max_supply ? pageParam.max_supply : "N/A"} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p> */}

                        <p>{pageParam.max_supply ? pageParam.max_supply : "N/A"}</p>
                    </div>
                    <div className="col-md-2 vol-content">
                        <h4>VOL/MCAP</h4>
                        <p>{pageParam.percent_change_1h}%</p>
                    </div>
                        </div>
                            
                            
                                        
                                

                            

                        </div>
                    </div>

                </section>
                {/* <!--TOP-CARDS-PANEL-END--> */}


                {/* <!--CURRENCY CHART STARTS--> */}
                <section id="currency-chart-cp">

                    <div className="container">
                        <div className="row">

                            <div className="col-md-10 " id="graph-imag">
                            <LineChart width={900} height={400} data={data}
                                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <Tooltip/>
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>                                
                                {/* <!-- <img style="margin: 0 0 0 -17px;" className="img-responsive" src="icons/bitcoin-page/Overview.png" alt="bitcoin-chart"> --> */}
                            </div>

                            <div className="col-md-2 cp-right-panel">
                                <div className="row">

                                    <div className="col-md-12 cp-right-card">
                                        <h4>1 Hr</h4>
                                        <p className="in-green-zone">{pageParam.percent_change_1h}%<i className="fa fa-caret-up " aria-hidden="true"></i></p>
                                    </div>
                                    <div className="col-md-12 cp-right-card">
                                        <h4>24 Hr</h4>
                                        <p className="in-green-zone">{pageParam.percent_change_24h}2% <i className="fa fa-caret-up" aria-hidden="true"></i></p>
                                    </div>
                                    <div className="col-md-12 cp-right-card">
                                        <h4>7 DAYS</h4>
                                        <p className="in-green-zone">{pageParam.percent_change_7d}% <i className="fa fa-caret-up" aria-hidden="true"></i></p>
                                    </div>
                                    {/* <div className="col-md-12 cp-right-card">
                                        <h4>30 DAYS</h4>
                                        <p className="in-red-zone">-12.20% <i className="fa fa-caret-down" aria-hidden="true"></i></p>
                                    </div> */}

                                </div>
                            </div>

                        </div>
                    </div>

                </section>
                {/* <!--CURRENCY CHART ENDS--> */}
              
                <GraphTable/>
                <HomePagination/>
                <BottomCards/>
                <Footer/>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return ({
        getdataa : () => {dispatch(MiddleWare.CryptoInfo()) }
    })
}

const mapStateToProps = (state) => {
    return ({
        resdata : state.BitcoinReducer.data
    })

}



export default connect (mapStateToProps, mapDispatchToProps)(Bitcoin);