import React, {Component} from 'react'

import {HomePagination} from '../index'

// import number format
import NumberFormat from 'react-number-format';

// react-router
import { Link } from "react-router-dom";

// moments
import moment from 'moment';

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'


import Pagination from "react-js-pagination";

// TableData > TableRow > CrptoDetail > ImageChart > ClickableTable

class TableData extends React.Component{
constructor(props){
  super(props);
  this.state = {
  }
}
  
  render(){
    
    const pageData = this.props.tableData
    return(
    
    <div>

        <section id="graph-table" >    
          <div className="container">
                  <div className="row">
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
                        <GraphTable/>
                      </table>
                      {/* <TablePagination/> */}
                  </div>
                </div>
                {/* <HomePagination
                  // imgNumbers={m.symbol}
                  page={pageData}
                /> */}
                
        </section>
      </div>
    )
  }
  
}


export default (TableData)


class GraphTable extends React.Component{

  constructor(props) {
            
    super(props);
    
    this.state = {
      tableData: [],
      isLoading: true

    };

  }

rateData = (start, end) => {

  const url = 'https://api.coinmarketcap.com/v1/ticker/?start='+start+'&limit='+end+'';

  fetch(url).then( r => r.json())
    .then((marketData) => {
      const tabledata = [];

      for (let index in marketData){
        tabledata.push({
            id: marketData[index].id,
            rank: marketData[index].rank,
            name: marketData[index].name,
            symbol: marketData[index].symbol,
            rank: marketData[index].rank,
            price_usd: marketData[index].price_usd,
            market_cap_usd: marketData[index].market_cap_usd,
            volume_usd: marketData[index]['24h_volume_usd'],
            available_supply: marketData[index].available_supply,
            percent_change_1h: marketData[index].percent_change_1h,
            percent_change_24h: marketData[index].percent_change_24h,
            percent_change_7d: marketData[index].percent_change_7d
          });
      }
      
      this.setState({
        tableData: tabledata,
        isLoading: false

      })
    })
    .catch((e) => {
      console.log(e);
    });
}


componentDidMount() {
  this.rateData(0, 150);
}

    render(){

        function gotoUrl(sym) {
            return {
              pathname: `/bitcoin/${sym}`
            }
          }
          const pageData = this.state.tableData
           
        return (
            
            <tbody>
                {/* {console.log('page data ',pageData )} */}
                  {/* <!-- GRAPH TABLE STARTS--> */}
                  {this.state.isLoading ? <h1 style={{ marginLeft: '400px',textAlign: 'center', color: 'pink' }}>loading ...</h1> : 
                           this.state.tableData.map(
                                (m, v) => {
                              const pageSym = m.symbol
                              let name = m.name;
                              let c_name = name.substr(0, 5);

                                  return <tr key={v}>
                                      <td className="td-border">
                                        {m.rank}
                                      </td>
                                      <td style={{ width: "15%" }}>
                                        <Link to={gotoUrl(pageSym)} style={{ textDecoration: "none" }}>
                                        <td style={{width: '20%' , textAlign: 'left'}} >
                                              <img src={"https://chasing-coins.com/api/v1/std/logo/"+pageSym+""} className="pull-left"
                                                  style={{width: '20%', }}/>
                                              <div style={{textAlign: 'left', paddingTop: '5px', marginLeft: '10px'}} class="pull-left"> {c_name + '...'} <br/>{m.symbol}  </div>
                                        </td>
                                      
                                        </Link>
                                      </td>
                                      {m.percent_change_1h < 0 ?  <td className="graph-td-red-1">
                                        ${m.price_usd.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                                      </td> :  <td className="graph-td-green">
                                        ${m.price_usd.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                        <i className="fa fa-caret-up" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                                      </td>}
                                     
                                      <td>
                                        ${
                                          m.market_cap_usd.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                        }
                                      </td>
                                      <td>
                                        ${
                                        m.volume_usd.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                        }
                                      </td>
                                      <td>
                                        {
                                          m.available_supply.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                        }
                                      </td>
                                      {m.percent_change_1h < 0 ?  <td className="graph-td-red-1">
                                        {m.percent_change_1h}%
                                        <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                                      </td> : <td className="graph-td-green">
                                        {m.percent_change_1h}%
                                        <i className="fa fa-caret-up" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                                      </td>}
                                     
                                      {m.percent_change_24h < 0 ? <td className="graph-td-red-1">
                                        {m.percent_change_24h}%
                                        <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                                      </td> : <td className="graph-td-green">
                                        {m.percent_change_24h}%
                                        <i className="fa fa-caret-up" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                                      </td>}
                                      {m.percent_change_7d < 0 ? <td className="graph-td-red-1">
                                      <ImageChart 
                                        imgNumbers={m.symbol}
                                        page={pageData}
                                      />

                                      {/* <HomePagination
                                        imgNumbers={m.symbol}
                                        page={pageData}
                                      /> */}

                                        {m.percent_change_7d}%
                                        <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px", color:'#c11b55'}} />                                                                  
                                      </td> : <td className="graph-td-green">
                                      <ImageChart 
                                        imgNumbers={m.symbol}
                                        page={pageData}
                                      />

                                      {/* <HomePagination
                                        imgNumbers={m.symbol}
                                        page={pageData}
                                      /> */}

                                        {m.percent_change_7d}%
                                        <i className="fa fa-caret-up" aria-hidden="true" style={{ paddingLeft: "5px", color:'#2e7d32'}} />                                                                  
                                      </td>}
                                      
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
                    y: bitcoinData.Data[index].close, // numerical price
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
          // console.log(imgProp)
          // console.log('table data', p);
        }
          
      
        render(){
                  const x = [];
                  return(
                    <div>
                      {/* {console.log('dfdsdsawrerf',this.state.mainCurData)} */}
                      {this.state.mainCurData.map((item) => {
                        x.push(
                          Math.round(item.high , item.low)
                        );
                      })}
                    {/* <svg viewBox="0 0 500 100" class="chart">
                      <polyline
                        fill="none"
                        stroke="#0074d9"
                        stroke-width="2"
                        points="
                        108,101
                        110,103
                        110,102
                        111,108
                        115,110
                        115,110
                        116,114
                      "
                      />
                    </svg> */}
                   
                    <img src={"https://chart.googleapis.com/chart?&cht=ls&chd=t:"+x[0]+","+x[1]+","+x[2]+","+x[3]+","+x[4]+","+x[5]+","+x[6]+"&chco=ff0000&chs=180x50&chds=0,"+Math.max(...x)+""} />
                    </div>
                  );
              }
  }


  // class TablePagination extends React.Component{
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       activePage: 1
  //     };
  //     this.handlePageChange = this.handlePageChange.bind(this)
  //   }

  // handlePageChange(pageNumber) {
  // console.log(`active page is ${pageNumber}`);
  // this.setState({activePage: pageNumber});
  // }


  //   render(){
  //     return(
  //       <div>
  //         {/* <!-- HOME PAGINATION --> */}
  //         {/* <section id="homepage-pagination">
  //             <div className="col-md-12" align="center">
  //                 <Pagination
  //                 activePage={this.state.activePage}
  //                 itemsCountPerPage={50}
  //                 totalItemsCount={450}
  //                 pageRangeDisplayed={5}
  //                 onChange={this.handlePageChange}
  //                  />
  //             </div>
  //           </section> */}
  //           {/* <!-- HOME PAGINATION ENDS --> */}
  //       </div>
  //     );
  //   }
  // }
