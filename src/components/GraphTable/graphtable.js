import React, {Component} from 'react'

import {HomePagination} from '../index'

// react-router
import { Link } from "react-router-dom";

// moments
import moment from 'moment';

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

import Pagination from '../Pagination/pagination';

import { AreaChart, Area } from 'recharts';


class TableData extends React.Component{

  constructor() {
    super();
    this.state = {
      // todos: [],
      // currentPage: 1,
      // todosPerPage: 10,
      pageOfItems: []
    };
    // this.handleClick = this.handleClick.bind(this);
    this.onChangePage = this.onChangePage.bind(this);
  }


  
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
}

  render(){

    return(
    <div>
        <section id="graph-table" >    
          <div className="container">
            <div className="row">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="rank">RANK</th>
                      <th className="name">NAME</th> 
                      <th className="price">PRICE</th> 
                      {this.props.market ? <th className="market"> MARKETCAP</th> : null}
                      {this.props.volume ? <th className="volume">VOLUME (24H)</th> : null}
                      {this.props.circul ? <th className="circulating">CIRCULATING</th> : null}
                      {this.props.one_h ? <th className="one_hr">1h</th> : null}
                      {this.props.twenty_4 ? <th className="twenty4_hr">24h</th> : null}
                      {this.props.week ?<th className="weekly">WEEKLY</th> : null}
                    </tr>
                  </thead>
                    <GraphTable 
                    tableDat = {this.props.table} 
                    market_param = {this.props.market}
                    volume_param = {this.props.volume}
                    circul_param = {this.props.circul}
                    one_h_param = {this.props.one_h}
                    twenty_4_param = {this.props.twenty_4}
                    week_param = {this.props.week}
                    curren_select = {this.props.curr_select}
                    pageOfItems = {this.state.pageOfItems}
                     
                    />
                    
                    
                </table>
                <div className="col-md-12">
                  <div className="container">
                    <div className="row">
                      <Pagination items={this.props.table} onChangePage={this.onChangePage} />
                    </div>
                  </div>
                </div>
            </div>
            
          </div>
           
          
        </section>
       
      </div>
    )
  }
  
}


export default (TableData)



class GraphTable extends React.Component{
  render(){
    function gotoUrl(sym) {
            return {
              pathname: `/bitcoin/${sym}`
            }
          }
          const pageData = this.props.tableDat
          const market_param = this.props.market_param
          const volume_param = this.props.volume_param
          const circul_param = this.props.circul_param
          const one_h_param = this.props.one_h_param
          const twenty_4_param = this.props.twenty_4_param
          const week_param = this.props.week_param
          const curren_select = this.props.curren_select
          const pageOfItems = this.props.pageOfItems

          console.log(curren_select)
             return (
            <tbody>
              {console.log('dsds',volume_param)}
              {console.log('arace',pageData)}
                  {/* <!-- GRAPH TABLE STARTS--> */}
                 
              {pageOfItems.map(
                  (m, v) => {
                const pageSym = m.symbol
                let name = m.name;
                // if (name.length > 7){
                //   var c_name = name.substr(0, 7);
                //   var c_name = c_name+'...' ;
                //
                // }
                // else{
                //   var c_name = name;
                // }

                if (curren_select === "usd"){
                   var market = m.market_cap_usd
                   var price = m.price_usd
                   var volume = m.volume_usd
                }
                else if(curren_select === "eur"){
                   var market = m.market_cap_eur
                   var price = m.price_eur
                   var volume = m.volume_eur
                }

              return <tr key={v}>
                        <td className="td-border rank">
                          {m.rank}
                        </td>
                        <td style={{ width: "10%" }} className="name">
                          <Link to={gotoUrl(pageSym)} style={{ textDecoration: "none" }}>
                            <td style={{width: '20%' , textAlign: 'left'}} >

                                <img src={"https://chasing-coins.com/api/v1/std/logo/"+pageSym+""} className="pull-left"
                                  style={{width: '20%',    marginRight: '9%', marginTop: 'calc(100%/8)'}}/>

                              <div style={{textAlign: 'left', marginLeft: '0px' , width: '70%'}} class="pull-left"> {name} <br/>{m.symbol}  </div>


                            </td>
                          </Link>
                        </td>
                        {m.percent_change_1h < 0 ? 
                        <td style={{ width: "15%" }} className="graph-td-red-1 price">
                          {price !== null ? curren_select === "usd" ? '$' + price.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '€' + price.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null}
                          <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                        </td> :  <td className="graph-td-green price">
                          {price !== null ? curren_select === "usd" ? '$' + price.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '€' + price.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null}                          
                          <i className="fa fa-caret-up" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                        </td>}
                        
                        {market_param ?  
                        <td className="market">
                          {market !== null ? curren_select === "usd" ? '$' + market.replace(/\B(?=(\d{3})+(?!\d))/g, ",") :  '€' + market.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null}
                        </td> : null }
                        { volume_param ?
                        <td className="volume">
                          {volume !== null ? curren_select === "usd" ? '$' + volume.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '€' + volume.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null}
                        </td> : null }
                        {circul_param  ?
                        <td className="circulating">
                          {m.available_supply !== null ? m.available_supply.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null}
                        </td> : null }
                        { one_h_param ?
                          m.percent_change_1h < 0 ?  <td className="graph-td-red-1 one_hr">
                          {m.percent_change_1h}%
                          <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                        </td> : <td className="graph-td-green one_hr">
                          {m.percent_change_1h}%
                          <i className="fa fa-caret-up" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                        </td> : null }
                        {twenty_4_param ?
                          m.percent_change_24h < 0 ? <td className="graph-td-red-1 twenty4_hr">
                          {m.percent_change_24h}%
                          <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                        </td> : <td className="graph-td-green twenty4_hr">
                          {m.percent_change_24h}%
                          <i className="fa fa-caret-up" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                        </td> : null }
                        {week_param ?
                          m.percent_change_7d < 0 ? <td className="graph-td-red-1 weekly">
                          <ImageChart 
                            imgNumbers={m.symbol}
                            page={pageData}
                            percent_change = {m.percent_change_7d}
                          />
                          {m.percent_change_7d}%
                          <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px", color:'#c11b55'}} />                                                                  
                        </td> : <td className="graph-td-green weekly">
                          <ImageChart 
                              imgNumbers={m.symbol}
                              page={pageData}
                          />
                          {m.percent_change_7d}%
                          <i className="fa fa-caret-up" aria-hidden="true" style={{ paddingLeft: "5px", color:'#2e7d32'}} />                                                                  
                        </td> : null }
                        
                      </tr>;
                  }
                ) 
                }
              </tbody>

            
      )
      {/* GRAPH TABLE ENDS */}

    }
}


class ImageChart extends React.Component{
  constructor(props) {
      super(props);
      this.ImageApi = this.ImageApi.bind(this);
      this.state = {
        mainCurData: []
      };
    }
    
    
      ImageApi = (sym) => {
        const url = 'https://min-api.cryptocompare.com/data/histoday?fsym='+sym+'&tsym=USD&limit=6&aggregate=1&e=CCCAGG';
          fetch(url).then( r => r.json())
          .then((bitcoinData) => {
            const sortedData = [];
            let count = 0;
            
            for (let index in bitcoinData.Data){
              sortedData.push({
                  d: moment.unix(bitcoinData.Data[index].time).format('MMM DD'),
                  p: bitcoinData.Data[index].close.toLocaleString('us-EN',{ style: 'currency', currency: 'USD' }),
                  x: count, //previous days
                  close: bitcoinData.Data[index].close, // numerical price
                  high: bitcoinData.Data[index].high,
                  low: bitcoinData.Data[index].low,
                  open: bitcoinData.Data[index].open,
                });
                count++;
            }
            
            this.setState({
              mainCurData: sortedData
            })
          });
      }
  
      componentDidMount() {
        const imgProp = this.props.imgNumbers
        const p = this.props.page
        this.ImageApi(imgProp)
      }
          
      
      render(){
              const data =[]
              console.log('data image', this.state.mainCurData)
              // const data = [
              //     {name: 'Page A', uv: 7280, pv: 6595,},
              //     {name: 'Page B', uv: 7228, pv: 6806,},
              //     {name: 'Page C', uv: 7056, pv: 6463,},
              //     {name: 'Page D', uv: 8218, pv: 6835,},
              //     {name: 'Page E', uv: 7528, pv: 7039,},
              //     {name: 'Page F', uv: 7442, pv: 7434,},
              //     {name: 'Page G', uv: 6929, pv: 6602,},
              // ];

              let chart = this.state.mainCurData.map((u,v) => {
                data.push({
                    name: u.d,
                    high: u.high,
                    low: u.low,
                    avrg : Math.round((u.high + u.low)/2),
                    close: u.close
                });
                return data;
            })

            console.log('sd',data)
  
                const percent_change = this.props.percent_change
                const x = [];
                return(
                  <div>
                    {this.state.mainCurData.map((item) => {
                      x.push(
                        item.high , item.low
                      );
                    })}
                    
                  {percent_change < 0 ? 
                      <div><AreaChart width={120} height={40} data={data}>
                        <Area type='monotone' dataKey='avrg' stroke='#bf2433' fill='#f7a3bb' />
                      </AreaChart>
                 {/* <img className="table-chart" src={"https://chart.googleapis.com/chart?&cht=ls&chd=t:"+x[0]+","+x[1]+","+x[2]+","+x[3]+","+x[4]+","+x[5]+","+x[6]+"&chco=BD0056&chs=180x50&chds="+Math.min(...x)+","+Math.max(...x)+""} /> */}
                </div> 
                :
                    <AreaChart width={120} height={40} data={data}>
                      <Area type='monotone' dataKey='avrg' stroke='#2a702c' fill='#d5e5d5' />
                    </AreaChart>
                // <img className="table-chart" src={"https://chart.googleapis.com/chart?&cht=ls&chd=t:"+x[0]+","+x[1]+","+x[2]+","+x[3]+","+x[4]+","+x[5]+","+x[6]+"&chco=328035&chs=180x50&chds="+Math.min(...x)+","+Math.max(...x)+""} />
              }
                  </div>
                );
      }
}
