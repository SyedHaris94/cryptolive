import React, {Component} from 'react'

import axios from 'axios';

// importing images & icons
import BTC from '../../icons/BTC.png'
import ETH from '../../icons/ETH.png'
import BCH from '../../icons/BCH.png'
import uparrow from '../../icons/up-arrow.png'
import uplite from '../../icons/up-lite.png'
import downarrow from '../../icons/down-arrow.png'
import downlite from '../../icons/down-lite.png'
import lineage from '../../icons/Lineage.png'
import linelite from '../../icons/line-lite.png'
import chartgreen from '../../icons/chart-green.png'
import chartlite from '../../icons/chart-lite-green.png'

// import number format
import NumberFormat from 'react-number-format';

// import uderscore
import _ from 'lodash'

import {Navbar, Jumbo, FiveFeature, Middle, GraphTable, HomePagination, BottomCards, Footer } from '../index'


// react-router
import { Link } from "react-router-dom";


import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 }
];
class Table10 extends React.Component{

  constructor() {
            super();
     
            // an example array of items to be paged
            var exampleItems = _.range(1, 151).map(i => { return {  name: 'Item ' + i }; });
     
            this.state = {
                exampleItems: exampleItems,
                pageOfItems: [],
                lineGraph: []
    
            };
     
            // bind function in constructor instead of render (https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md)
            this.onChangePage = this.onChangePage.bind(this);
        }
     

     onChangePage(pageOfItems) {
              // update state with new page of items
              this.setState({ pageOfItems: pageOfItems });
          }

    componentDidMount() {
        this.props.getdataa();

        // axios.get("https://min-api.cryptocompare.com/data/histoday?fsym=btc&tsym=USD&limit=20").then((response)=>{
        //     this.setState(()=>{
        //         return {
        //           lineGraph: response.data
        //         }
        //      })
        // })

    }

    

    render(){
        
        function gotoUrl(sym) {
            return {
              pathname: `/bitcoin/${sym}`
            }
          }

        return <div>
            <Navbar/>   
            <Jumbo/>  
            <FiveFeature/>
            <Middle/>
            {/* <!-- GRAPH TABLE STARTS--> */}
            <section id="graph-table">
              <div className="container">
                <div className="row">
                  {/* <img src={'https://chart.googleapis.com/chart?&cht=ls&chd=t:0,30,60,70,90,95,100&chco=ff0000&chs=250x150'}/> */}
                  {/* <Link to="/bitcoin"style={{ textDecoration: "none" }} > */}

                  {/* {this.state.crypto} */}

                  <table className="table">
                    <thead>
                      <tr>
                        <th>RANK</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>MARKETCAP</th>
                        <th>VOLUME (24H)</th>
                        <th>CIRCULATING</th>
                        <th>1h</th>
                        <th>24h</th>
                        <th>WEEKLY</th>
                       </tr>
                    </thead>
                    <tbody>
                      {console.log("data from apis graphtable page", this.props.resdata)}
                      {this.props.resdata.map ? this.props.resdata.map(
                          (m, v) => {
                            return <tr key={v}>
                                <td className="td-border">
                                  {m.rank}
                                </td>
                                <td style={{ width: "15%" }}>
                                  <Link to={gotoUrl(m.symbol)} onClick={window.scrollTo(0, 0)} style={{ textDecoration: "none" }}>
                                    <div className="pull-left col-md-offset-4" style={{ paddingTop: "2px" }}>
                                      <img src={BTC} alt="logo" />
                                    </div>
                                    <div className="pull-left" style={{ width: "10%", paddingLeft: "10px" }}>
                                      <p>
                                        {m.name}
                                      </p>
                                      <p className="abbr-p">
                                        {m.symbol}
                                      </p>
                                    </div>
                                  </Link>
                                </td>
                                <td className="graph-td-green">
                                  ${m.price_usd}
                                  <i class="fa fa-caret-up" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                                  {/* <NumberFormat value={m.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} /> */}
                                </td>
                                <td>
                                  ${
                                    m.market_cap_usd
                                  }
                                </td>
                                <td>
                                  ${
                                    m[
                                      "24h_volume_usd"
                                    ]
                                  }
                                </td>
                                <td>
                                  {
                                    m.available_supply
                                  }
                                </td>
                                <td className="graph-td-red-1">
                                  {m.percent_change_1h}%
                                  <i class="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                                </td>
                                <td className="graph-td-red-1">
                                  {m.percent_change_24h}%
                                  <i class="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                                </td>
                                <td>
                                <img src={"https://chart.googleapis.com/chart?&cht=ls&chd=t:0,15,35,42,25,6937,8218&chco=ff0000&chs=50x50"} />
                                  {/* <LineChart width={100} height={50} data={data}>
                                    <Line type="monotone" dataKey="pv" stroke="#c11b55" strokeWidth={2} />
                                  </LineChart> */}
                                  {m.percent_change_7d}%
                                  <i class="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px", color:'#c11b55'}} />

                                      {/* <img src={uplite} style={{width: '8%' , height:'5%'}} alt="logo" img-responsive  id="up-lite"/>
                                      <img src={uparrow} style={{width: '10%' , height:'10%'}} alt="logo" img-responsive id="up-dark"/> */}
                                                                  
                                </td>
                              </tr>;
                          }
                        ) : <div />}
                    </tbody>
                  </table>
                  {/* </Link> */}
                </div>
              </div>
            </section>
            {/* <!-- GRAPH TABLE ENDS --> */}
            <HomePagination/>
            <BottomCards/>
            <Footer/>
          </div>;
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getdataa : () => {dispatch(MiddleWare.GetData10()); }
    })
}

const mapStateToProps = (state) => {
    return ({
        resdata : state.GraphTableReducer.data
    })

}


export default connect(mapStateToProps, mapDispatchToProps)(Table10);