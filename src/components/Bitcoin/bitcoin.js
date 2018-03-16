import React, { Component } from "react";
import {Navbar,TableData, HomePagination, BottomCards, Footer} from '../index'


import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'


// import number format
import NumberFormat from 'react-number-format';


// import moment
import moment from 'moment';


// import tooltip
import ToolTip from '../tooltip/tooltip';

// import line chart
import LineChart from '../linechart/linechart';


// import images0
import BTC from '../../icons/BTC.png'


class Bitcoin extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          fetchingData: true,
          data: null,
          hoverLoc: null,
          activePoint: null
        }
      }
    
    handleChartHover(hoverLoc, activePoint){
    this.setState({
        hoverLoc: hoverLoc,
        activePoint: activePoint
    })
    }

    componentDidMount(){
        const getData = () => {

            const pageID = this.props.match.params.symbol;
            const url = 'https://min-api.cryptocompare.com/data/histoday?fsym='+pageID+'&tsym=USD&limit=30&aggregate=1&e=CCCAGG';
      
            fetch(url).then( r => r.json())
              .then((bitcoinData) => {
                const sortedData = [];
                let count = 0;
                
                for (let date in bitcoinData.Data){
                  sortedData.push({
                    d: moment.unix(bitcoinData.Data[date].time).format('MMM DD'),
                    p: bitcoinData.Data[date].close.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
                    x: count, //previous days
                    y: bitcoinData.Data[date].close // numerical price
                  });
                  count++;
                }
                this.setState({
                  data: sortedData,
                  fetchingData: false
                })
              })
              .catch((e) => {
                console.log(e);
              });
          }
          getData();
        this.props.getdataa();

    }

    render(){
        // for catching the API array
        let m = this.props.resdata;
        // {console.log('parameters',this.props.resdata)}
        
        let urlParam = this.props.match.params.symbol;
        // {console.log('parameters',this.props.match.params.symbol)}
        function gotoUrl(api, url) {
            let test = {};

            api.map((m, v) => {    
                
                if (url == m.symbol) {
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
                 {/* <!--TOP HEADING--> */}
                <section id="cp-heading">
                    <div className="container">
                        <div className="row">
                        {/* {console.log('asdasd', this.state.data)} */}
                            <div className="col-md-8 col-xs-8">
                            {/* {console.log('logo', this.props.imageParam)} */}
                            <img src={"https://chasing-coins.com/api/v1/std/logo/"+this.props.match.params.symbol+""} className="pull-left img-responsive currency-icon" style={{width: '10%', height: '10%'}}/>
                                {/* <img className="pull-left img-responsive currency-icon" src={BTC} alt="BTC-icon" /> */}
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
                                       <h3>${pageParam.price_usd} <br /> <span>{pageParam.price_btc} {pageParam.symbol}</span></h3>
                                    </div>
                                    <div className="col-md-4 col-xs-4 ">
                                    {pageParam.percent_change_1h < 0 ?  
                                        <h4 className="in-red-zone">{pageParam.percent_change_1h}% <i className="fa fa-caret-down" aria-hidden="true"></i></h4>
                                      : <h4 className="in-green-zone">{pageParam.percent_change_1h}% <i className="fa fa-caret-up" aria-hidden="true"></i></h4>
                                    }</div>
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
                                </div>
                                <div className="col-md-2 max-content">
                                    <h4>MAX SUPPLY</h4>
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
                                {/* <div className= "container"> */}
                                    <div className='row'>
                                        <div className='popup'>
                                            {this.state.hoverLoc ? <ToolTip hoverLoc={this.state.hoverLoc} activePoint={this.state.activePoint}/> : null}
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='chart'>
                                            { !this.state.fetchingData ?
                                            <LineChart data={this.state.data} onChartHover={ (a,b) => this.handleChartHover(a,b) }/>
                                            : null }
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>

                            <div className="col-md-2 cp-right-panel">
                                <div className="row">
                                    <div className="col-md-12 cp-right-card">
                                        <h4>1 Hr</h4>
                                        
                                       {pageParam.percent_change_1h < 0 ? <p className="in-red-zone">{pageParam.percent_change_1h}%<i className="fa fa-caret-down " aria-hidden="true"></i></p> : <p className="in-green-zone">{pageParam.percent_change_1h}%<i className="fa fa-caret-up " aria-hidden="true"></i></p> }
                                    </div>
                                    <div className="col-md-12 cp-right-card">
                                        <h4>24 Hr</h4>
                                        {pageParam.percent_change_24h < 0 ? <p className="in-red-zone">{pageParam.percent_change_24h}2% <i className="fa fa-caret-down" aria-hidden="true"></i></p> : <p className="in-green-zone">{pageParam.percent_change_24h}2% <i className="fa fa-caret-up" aria-hidden="true"></i></p> }
                                    </div>
                                    <div className="col-md-12 cp-right-card">
                                        <h4>7 DAYS</h4>
                                        {pageParam.percent_change_7d < 0 ? <p className="in-red-zone">{pageParam.percent_change_7d}% <i className="fa fa-caret-down" aria-hidden="true"></i></p> : <p className="in-red-zone">{pageParam.percent_change_7d}% <i className="fa fa-caret-up" aria-hidden="true"></i></p>}
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
                <div id="bitcoin-table"> <TableData/> </div>
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