import React, { Component } from "react";
import {Navbar,TableData, HomePagination, BottomCards, Footer} from '../index'


import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'


// import number format
import NumberFormat from 'react-number-format';


// import moment
import moment from 'moment';


import Chart from 'chart.js';



// import tooltip
import ToolTip from '../tooltip/tooltip';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// import LineChart from '../linechart/linechart'

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

    componentDidMount(){
        this.props.getList();

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
                    y: bitcoinData.Data[date].close, // numerical price
                    volumeto: bitcoinData.Data[date].volumeto,
                    volumefrom: bitcoinData.Data[date].volumefrom,
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

    render(){

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


      
        const data1 = [];
       
        let chart = this.state.data.map((u,v) => {
            data1.push({
                name: u.d,
                price: u.y,
                volume: u.volumeto,
            });
            // count++;
            return data1;
        })
        
        console.log('ch',chart)

        // const data =[  {name: 'January', volume: 4000, price: 2400, amt: 1500},
        //     {name: 'February', volume: 3000, price: 1398, amt: 1000},
        //     {name: 'March', volume: 2000, price: 15000, amt: 200},
        //     {name: 'April', volume: 2780, price: 3908, amt: 2181},
        //     {name: 'May', volume: 1890, price: 4800, amt: 2500},
        //     {name: 'June', volume: 2390, price: 3800, amt: 500},
        //     {name: 'July', volume: 3490, price: 1890, amt: 800},
        //     {name: 'August', volume: 1890, price: 4800, amt: 2181},
        //     {name: 'September', volume: 2390, price: 9800,  amt: 2000 },
        //     {name: 'October', volume: 3490, price: 3800, amt: 2500},
        //     {name: 'November', volume: 2390, price: 1890, amt: 1540},
        //     {name: 'December', volume: 1890, price: 4800, amt: 300
        // }
        // ];

// var chart = makeChart( "chartdiv", {
//     "type": "stock",
//     "theme": "light",
  
//     "dataDateFormat": "DD-MM-YYYY",
  
//     "dataSets": [ {
//       "title": "MSFT",
//       "fieldMappings": [ {
//         "fromField": "Close",
//         "toField": "value"
//       }, {
//         "fromField": "Volume",
//         "toField": "volume"
//       } ],
//       "dataLoader": {
  
//         /**
//          * Originally we assume URL:
//          * https://finance.google.co.uk/finance/historical?q=MSFT&startdate=Oct+1,2008&enddate=Oct+9,2008&output=csv
//          * However, due to CORS restrictions, we are using the copy of the out
//          */
//         "url": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/google_msft.csv",
//         "format": "csv",
//         "delimiter": ",",
//         "useColumnNames": true,
//         "skip": 1,
//         "numberFields": ["Close", "Volume"],
//         "reverse": true,
  
//         /**
//          * Google Finance API returns dates formatted like this "24-Apr-17".
//          * The chart can't parse month names as well as two-digit years, so we 
//          * need to use `postProcess` callback to reformat those dates into a 
//          * chart-readable format
//          */
//         "postProcess": function( data ) {
  
//           // Function that reformats dates
//           function reformatDate( input ) {
  
//             // Reformat months
//             var mapObj = {
//               "Jan": "01",
//               "Feb": "02",
//               "Mar": "03",
//               "Apr": "04",
//               "May": "05",
//               "Jun": "06",
//               "Jul": "07",
//               "Aug": "08",
//               "Sep": "09",
//               "Oct": "10",
//               "Nov": "11",
//               "Dec": "12"
//             };
  
//             var re = new RegExp( Object.keys( mapObj ).join( "|" ), "gi" );
//             input = input.replace( re, function( matched ) {
//               return mapObj[ matched ];
//             } );
  
//             // Reformat years and days into four and two digits respectively
//             var p = input.split("-");
//             if (p[0].length == 1) {
//               p[0] = "0" + p[0];
//             }
//             if (Number(p[2]) > 50) {
//               p[2] = "19" + p[2];
//             }
//             else {
//               p[2] = "20" + p[2];
//             }
//             return p.join("-");
//           }
  
//           // Reformat all dates
//           for ( var i = 0; i < data.length; i++ ) {
//             data[ i ].Date = reformatDate( data[ i ].Date );
//           }
          
//           console.log(data);
  
//           return data;
//         }
//       },
//       "categoryField": "Date"
//     } ],
  
//     "panels": [ {
//         "showCategoryAxis": false,
//         "title": "Value",
//         "percentHeight": 70,
  
//         "stockGraphs": [ {
//           id: "g1",
//           valueField: "value",
//           comparable: true,
//           compareField: "value",
//           balloonText: "[[title]]:<b>[[value]]</b>",
//           compareGraphBalloonText: "[[title]]:<b>[[value]]</b>"
//         } ],
  
//         stockLegend: {
//           periodValueTextComparing: "[[percents.value.close]]%",
//           periodValueTextRegular: "[[value.close]]"
//         }
//       },
  
//       {
//         "title": "Volume",
//         "percentHeight": 30,
//         "stockGraphs": [ {
//           valueField: "volume",
//           type: "column",
//           showBalloon: false,
//           fillAlphas: 1
//         } ],
  
//         stockLegend: {
//           periodValueTextRegular: "[[value.close]]"
//         }
//       }
//     ],
  
//     "chartScrollbarSettings": {
//       "graph": "g1"
//     },
  
//     "chartCursorSettings": {
//       "valueBalloonsEnabled": true,
//       "fullWidth": true,
//       "cursorAlpha": 0.1,
//       "valueLineBalloonEnabled": true,
//       "valueLineEnabled": true,
//       "valueLineAlpha": 0.5
//     },
  
//     periodSelector: {
//       periods: [ {
//         period: "MM",
//         selected: true,
//         count: 1,
//         label: "1 month"
//       }, {
//         period: "YYYY",
//         count: 1,
//         label: "1 year"
//       }, {
//         period: "YTD",
//         label: "YTD"
//       }, {
//         period: "MAX",
//         label: "MAX"
//       } ]
//     }
//   } );




        // var ctx = "myChart";


        // var myChart = new Chart(ctx, {
        //     type: 'bar',
        //     data: {
        //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: [
        //                 'rgba(255, 99, 132, 0.2)',
        //                 'rgba(54, 162, 235, 0.2)',
        //                 'rgba(255, 206, 86, 0.2)',
        //                 'rgba(75, 192, 192, 0.2)',
        //                 'rgba(153, 102, 255, 0.2)',
        //                 'rgba(255, 159, 64, 0.2)'
        //             ],
        //             borderColor: [
        //                 'rgba(255,99,132,1)',
        //                 'rgba(54, 162, 235, 1)',
        //                 'rgba(255, 206, 86, 1)',
        //                 'rgba(75, 192, 192, 1)',
        //                 'rgba(153, 102, 255, 1)',
        //                 'rgba(255, 159, 64, 1)'
        //             ],
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             yAxes: [{
        //                 ticks: {
        //                     beginAtZero:true
        //                 }
        //             }]
        //         }
        //     }
        // });

        
        // let data1 = this.state.data
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
                                <LineChart  style={{marginTop: '50px'}}width={800} height={300} data={data1}
                                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                    <XAxis dataKey="name"/>
                                    <YAxis yAxisId="left" />
                                    <YAxis yAxisId="right" orientation="right" />
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <Tooltip/>
                                    <Legend />
                                    <Line yAxisId="left" type="monotone" dataKey="price" stroke="#8884d8" activeDot={{r: 8}}/>
                                    <Line yAxisId="right" type="monotone" dataKey="volume" stroke="#82ca9d" />
                                </LineChart>
                            
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