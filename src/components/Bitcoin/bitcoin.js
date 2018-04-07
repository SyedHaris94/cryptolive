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

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// import '../../..amstockchart_3.21.12.free/amcharts/style.css'

var AmCharts = require("@amcharts/amcharts3-react");

class Bitcoin extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            fetchingData: true,
            data: [],
            hoverLoc: null,
            activePoint: null,
            market_show: true,
            volume_show : true,
            cicular_show: true,
            one_h_show : true,
            twenty_4_show: true,
            week_show : true,
            selectedOption1: 'usd',

        }
        this.handlecurrency = this.handlecurrency.bind(this);

      }
    
    handlecurrency(e){
        this.setState({
            selectedOption1: e.target.value,
        });
    }
    handleChartHover(hoverLoc, activePoint){
        this.setState({
            hoverLoc: hoverLoc,
            activePoint: activePoint
        })
    }

    componentWillMount(){
        this.props.getList();

        const getData = () => {

            const pageID = this.props.match.params.symbol;
            const url = 'https://min-api.cryptocompare.com/data/histoday?fsym='+pageID+'&tsym=USD&limit=365&aggregate=1&e=CCCAGG';
      
            fetch(url).then( r => r.json())
              .then((bitcoinData) => {
                const sortedData = [];
                let count = 0;
                
                for (let date in bitcoinData.Data){
                  sortedData.push({
                    date: moment.unix(bitcoinData.Data[date].time).format('YYYY-MM-DD HH:MM:SS'),
                    p: bitcoinData.Data[date].close,
                    x: count, //previous days
                    close: bitcoinData.Data[date].close, // numerical price
                    volumeto: bitcoinData.Data[date].volumeto,
                    volumefrom: bitcoinData.Data[date].volumefrom,
                    high: bitcoinData.Data[date].high,
                    low: bitcoinData.Data[date].low,
                    open : bitcoinData.Data[date].open

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

    // componentDidMount(){
        
    // }
    

    render(){

              
        var chartData = [];
        var chartData_1 = [];
        let state_chart = this.state.data;
        generateChartData(this.state.data);
        
        


        console.log('start',state_chart)
        // state_chart.map((u,v) => {
        //     var value = Math.round( Math.random() * ( 30 ) + 100 );
        //     // chartData[ u.x ] = ( {
        //     //       "date": u.d,
        //     //       "open": u.open,
        //     //       "close": u.close,
        //     //       "high": u.high,
        //     //       "low": u.low,
        //     //       "volume": u.volume,
        //     //       "value": value
        //     // } );
        //     chartData_1.push({
        //         name: u.date,
        //         price: u.p,
        //         volumeto: u.volumeto,
        //         volumefrom : u.volumefrom,
        //         open : u.open,
        //         i: u.count,
        //         close : u.close
        //         });
        //         return chartData_1;
        //     })
        //     console.log('chart',chartData_1)

        function generateChartData(state_chart) {
           
        //   var firstDate = new Date();
        //   firstDate.setHours( 0, 0, 0, 0 );
        //   firstDate.setDate( firstDate.getDate() - 2000 );
        
        //   for ( var i = 0; i < 100; i++ ) {
        //     var newDate = new Date( firstDate );
        
        //     newDate.setDate( newDate.getDate() + i );
        
        //     var open = Math.round( Math.random() * ( 30 ) + 100 );
        //     var close = open + Math.round( Math.random() * ( 15 ) - Math.random() * 10 );
        
        //     var low;
        //     if ( open < close ) {
        //       low = open - Math.round( Math.random() * 5 );
        //     } else {
        //       low = close - Math.round( Math.random() * 5 );
        //     }
        
        //     var high;
        //     if ( open < close ) {
        //       high = close + Math.round( Math.random() * 5 );
        //     } else {
        //       high = open + Math.round( Math.random() * 5 );
        //     }
        
        //     var volume = Math.round( Math.random() * ( 1000 + i ) ) + 100 + i;
        //     var value = Math.round( Math.random() * ( 30 ) + 100 );
        
        //     chartData[ i ] = ( {
        //       "date": newDate,
        //       "open": open,
        //       "close": close,
        //       "high": high,
        //       "low": low,
        //       "volume": volume,
        //       "value": value
        //     } );
        //   }

            let state_length = state_chart.length;
            console.log("state length",state_length)
            let temp = "";
            temp += "[";
        {state_chart.map((m,v)=> {
            if (state_length == v+1){
                temp += '{"date": "'+m.date+'","open": "'+m.open+'","close": "'+m.close+'","high": "'+m.high+'","low": "'+m.low+'","volume": "'+m.volumefrom+'","value": "'+m.p+'"}'
            }
            else{
                temp += '{"date": "'+m.date+'","open": "'+m.open+'","close": "'+m.close+'","high": "'+m.high+'","low": "'+m.low+'","volume": "'+m.volumefrom+'","value": "'+m.p+'"},'
            }
            return(
             temp  
            )
        })}
        temp += "]";
        var obj = JSON.parse(temp);
        console.log('temp',obj);
        chartData = obj;
        
        //   chartData = [ {
        //     "date": "04-04-2018",
        //     "open": 1000,
        //     "close": 1000,
        //     "high": 10,
        //     "low": 20,
        //     "volume": 200,
        //     "value": 100
        //   },
        //   {
        //     "date": "04-05-2018",
        //     "open": 2000,
        //     "close": 3000,
        //     "high": 20,
        //     "low": 40,
        //     "volume": 500,
        //     "value": 200
        //   },
        //   {
        //     "date": "04-06-2018",
        //     "open": 3000,
        //     "close": 5000,
        //     "high": 70,
        //     "low": 80,
        //     "volume":100,
        //     "value": 800
        //   }];



    }
        var chart = AmCharts.makeChart( "chartdiv", 
        {
          "type": "stock",
          "theme": "light",
          "dataSets": [ {
            "fieldMappings": [ 
                {
              "fromField": "open",
              "toField": "open"
            },
             {
              "fromField": "close",
              "toField": "close"
            }, {
              "fromField": "high",
              "toField": "high"
            }, {
              "fromField": "low",
              "toField": "low"
            }, {
              "fromField": "volume",
              "toField": "volume"
            }, {
              "fromField": "value",
              "toField": "value"
            } ],
            "color": "#7f8da9",
            "dataProvider": chartData,
            "title": "Volume",
            "categoryField": "date"
          }, {
            "fieldMappings": [ {
              "fromField": "value",
              "toField": "value"
            } ],
            "color": "#fac314",
            "dataProvider": chartData,
            "compared": true,
            "title": "Price",
            "categoryField": "date"
          } ],
        
        
          "panels": [ {
              "title": "Value",
              "showCategoryAxis": false,
              "percentHeight": 70,
              "valueAxes": [ {
                "id": "v1",
                "dashLength": 5
              } ],
        
              "categoryAxis": {
                "dashLength": 5
              },
        
              "stockGraphs": [ {
                "type": "candlestick",
                "id": "g1",
                "openField": "open",
                "closeField": "close",
                "highField": "high",
                "lowField": "low",
                "valueField": "close",
                "lineColor": "#7f8da9",
                "fillColors": "#7f8da9",
                "negativeLineColor": "#db4c3c",
                "negativeFillColors": "#db4c3c",
                "fillAlphas": 1,
                "useDataSetColors": false,
                "comparable": true,
                "compareField": "value",
                "showBalloon": false,
                "proCandlesticks": true
              } ],
        
              "stockLegend": {
                "valueTextRegular": undefined,
                "periodValueTextComparing": "[[percents.value.close]]%"
              }
            },
        
            {
              "title": "Volume",
              "percentHeight": 30,
              "marginTop": 1,
              "showCategoryAxis": true,
              "valueAxes": [ {
                "dashLength": 5
              } ],
        
              "categoryAxis": {
                "dashLength": 5
              },
        
              "stockGraphs": [ {
                "valueField": "volume",
                "type": "column",
                "showBalloon": false,
                "fillAlphas": 1
              } ],
        
              "stockLegend": {
                "markerType": "none",
                "markerSize": 0,
                "labelText": "",
                "periodValueTextRegular": "[[value.close]]"
              }
            }
          ],
        
          "chartScrollbarSettings": {
            "graph": "g1",
            "graphType": "line",
            "usePeriod": "WW"
          },
        
          "chartCursorSettings": {
            "valueLineBalloonEnabled": true,
            "valueLineEnabled": true
          },
        
          "periodSelector": {
            "position": "bottom",
            "periods": [ {
              "period": "DD",
              "count": 10,
              "label": "10 days"
            }, {
              "period": "MM",
              "selected": true,
              "count": 1,
              "label": "1 month"
            }, {
              "period": "YYYY",
              "count": 1,
              "label": "1 year"
            }, {
              "period": "YTD",
              "label": "YTD"
            }, {
              "period": "MAX",
              "label": "MAX"
            } ]
          },
          "export": {
            "enabled": true
          }
        } );


        const { name_show, market_show, volume_show, cicular_show, one_h_show, twenty_4_show, week_show } = this.state;

        const curr_select = this.state.selectedOption1

        console.log("list", this.props.listState)
        
        let filterData = this.props.listState
        
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
                    test.price_eur = m.price_eur;
                    test.price_btc = m.price_btc;
                    test['24h_volume_usd'] = m['24h_volume_usd'];
                    test['24h_volume_eur'] = m['24h_volume_eur'];
                    test.market_cap_usd = m.market_cap_usd;
                    test.market_cap_eur = m.market_cap_eur;
                    test.available_supply = m.available_supply;
                    test.total_supply = m.total_supply;
                    test.max_supply = m.max_supply;
                    test.percent_change_1h = m.percent_change_1h;
                    test.percent_change_24h = m.percent_change_24h;
                    test.percent_change_7d = m.percent_change_7d;
                    test.last_updated = m.last_updated;
                    
                }

            });

            return test;
        }

        let pageParam = gotoUrl(m, urlParam);


    console.log('dataa', this.state.data)
    return(
            <div>
                <Navbar/>
                 {/* <!--TOP HEADING--> */}
                <section id="cp-heading">
                    <div className="container">
                        <div className="row">
                        {/* {console.log('asdasd', data1)} */}
                            <div className="col-md-8 col-xs-8">
                            {/* {console.log('logo', this.props.imageParam)} */}
                            <img src={"https://chasing-coins.com/api/v1/std/logo/"+this.props.match.params.symbol+""} className="pull-left img-responsive currency-icon" style={{width: '10%', height: '10%'}}/>
                                {/* <img className="pull-left img-responsive currency-icon" src={BTC} alt="BTC-icon" /> */}
                                <h2>{pageParam.name} <span>{pageParam.symbol}</span></h2>
                                <div className="anchors">
                                    <a href="#">Website</a>
                                    {/* <a href="#">Explorer</a>
                                    <a href="#">Message board</a> */}
                                    <span className="label label-default">#coin</span>
                                    <span className="label label-default">#mineable</span>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-4 price-info" align="right">
                                <div className="row">
                                    <div className="col-md-8 col-xs-8">
                                       <h3>${pageParam.price_usd} <br /> <span>{pageParam.price_btc} {pageParam.symbol}</span></h3>
                                    </div>
                                    <div className="col-md-4 col-xs-4 top-right-red">
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
                                <div id="chartdiv" style={{width:'100%', height:'400px'}}>
                                </div>
                            </div>
                            <div className="col-md-2 cp-right-panel">
                                <div className="row">
                                    <div className="col-md-12 cp-right-card">
                                        <h4>1 Hr</h4>
                                        
                                       {pageParam.percent_change_1h < 0 ? <p className="in-red-zone">{pageParam.percent_change_1h}%<i className="fa fa-caret-down " aria-hidden="true"></i></p> : <p className="in-green-zone">{pageParam.percent_change_1h}%<i className="fa fa-caret-up " aria-hidden="true"></i></p> }
                                    </div>
                                    <div className="col-md-12 cp-right-card">
                                        <h4>24 Hr</h4>
                                        {pageParam.percent_change_24h < 0 ? <p className="in-red-zone">{pageParam.percent_change_24h}% <i className="fa fa-caret-down" aria-hidden="true"></i></p> : <p className="in-green-zone">{pageParam.percent_change_24h}% <i className="fa fa-caret-up" aria-hidden="true"></i></p> }
                                    </div>
                                    <div className="col-md-12 cp-right-card">
                                        <h4>7 DAYS</h4>
                                        {pageParam.percent_change_7d < 0 ? <p className="in-red-zone">{pageParam.percent_change_7d}% <i className="fa fa-caret-down" aria-hidden="true"></i></p> : <p className="in-red-zone">{pageParam.percent_change_7d}% <i className="fa fa-caret-up" aria-hidden="true"></i></p>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--CURRENCY CHART ENDS--> */}
                <div id="bitcoin-table"> 
                    <TableData 
                        table={filterData} 
                        market = {this.state.market_show}
                        volume = {this.state.volume_show}
                        circul = {this.state.cicular_show}
                        one_h = {this.state.one_h_show}
                        twenty_4 = {this.state.twenty_4_show}
                        week = {this.state.week_show}
                        curr_select = {curr_select}
                    /> 
                </div>
                <BottomCards/>
                <Footer/>
            </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return ({
        getList: () => {dispatch(MiddleWare.fetchCryptoData())},
        getdataa : () => {dispatch(MiddleWare.CryptoInfo()) }
    })
}

const mapStateToProps = (state) => {
    return ({
        listState: state.CryptoReducer.crypto_data,
        resdata : state.BitcoinReducer.data       
    })

}



export default connect (mapStateToProps, mapDispatchToProps)(Bitcoin);