import React, {Component} from 'react'

import {HomePagination} from '../index'

// react-router
import { Link } from "react-router-dom";

// moments
import moment from 'moment';

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'


// import Pagination from 'react-paginating';


class TableData extends React.Component{

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
                    />
                </table>
             {console.log('sd',this.props.curr_select)}
                  {/* <TablePagination/> */}
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

          console.log(curren_select)
             return (
            <tbody>

              {console.log('arace',pageData)}
                  {/* <!-- GRAPH TABLE STARTS--> */}
                 
              {pageData.map(
                  (m, v) => {
                const pageSym = m.symbol
                let name = m.name;
                if (name.length > 7){
                  var c_name = name.substr(0, 7);
                  var c_name = c_name+'...' ;
                  
                }
                else{
                  var c_name = name;
                }
                
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
                                  style={{width: '20%', }}/>
                              <div style={{textAlign: 'left', marginLeft: '10px'}} class="pull-left"> {c_name} <br/>{m.symbol}  </div>
                            </td>
                          </Link>
                        </td>
                        {m.percent_change_1h < 0 ? 
                        <td style={{ width: "15%" }} className="graph-td-red-1 price">
                          {curren_select === "usd" ? '$' + price.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '€' + price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          <i className="fa fa-caret-down" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                        </td> :  <td className="graph-td-green price">
                          {curren_select === "usd" ? '$' + price.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '€' + price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}                          
                          <i className="fa fa-caret-up" aria-hidden="true" style={{ paddingLeft: "5px" }} />
                        </td>}
                        
                        {market_param ?  
                        <td className="market">
                          { curren_select === "usd" ? '$' + market.replace(/\B(?=(\d{3})+(?!\d))/g, ",") :  '€' + market.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td> : null }
                        { volume_param ?
                        <td className="volume">
                          {curren_select === "usd" ? '$' + volume.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '€' + volume.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </td> : null }
                        {circul_param  ?
                        <td className="circulating">
                          {m.available_supply.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
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
        }
          
      
        render(){
          const percent_change = this.props.percent_change
                  const x = [];
                  return(
                    <div>
                      {this.state.mainCurData.map((item) => {
                        x.push(
                         item.high , item.low
                        );
                      })}
                    {percent_change < 0 ? <img className="table-chart" src={"https://chart.googleapis.com/chart?&cht=ls&chd=t:"+x[0]+","+x[1]+","+x[2]+","+x[3]+","+x[4]+","+x[5]+","+x[6]+"&chco=BD0056&chs=180x50&chds="+Math.min(...x)+","+Math.max(...x)+""} /> :
                  <img className="table-chart" src={"https://chart.googleapis.com/chart?&cht=ls&chd=t:"+x[0]+","+x[1]+","+x[2]+","+x[3]+","+x[4]+","+x[5]+","+x[6]+"&chco=328035&chs=180x50&chds="+Math.min(...x)+","+Math.max(...x)+""} />}
                    </div>
                  );
              }
  }

  class TablePagination extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        activePage: 1
      };
      this.handlePageChange = this.handlePageChange.bind(this)
    }

  handlePageChange(pageNumber) {
  console.log(`active page is ${pageNumber}`);
  this.setState({activePage: pageNumber});
  }


    render(){
      return(
        <div>
          {/* <!-- HOME PAGINATION --> */}
          {/* <section id="homepage-pagination">
              <div className="col-md-12" align="center">
                  <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={50}
                  totalItemsCount={450}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange}
                   />
              </div>
            </section> */}
            {/* <!-- HOME PAGINATION ENDS --> */}
        </div>
      );
    }
  }



  //   constructor(props) {
//             
//     super(props);
    
//     this.state = {
//       tableData: [],
//       // isLoading: true

//     };

//   }

// rateData = (start, end) => {

//   const url = 'https://api.coinmarketcap.com/v1/ticker/?start='+start+'&limit='+end+'';

//   fetch(url).then( r => r.json())
//     .then((marketData) => {
//       const tabledata = [];

//       for (let index in marketData){
//         tabledata.push({
//             id: marketData[index].id,
//             rank: marketData[index].rank,
//             name: marketData[index].name,
//             symbol: marketData[index].symbol,
//             rank: marketData[index].rank,
//             price_usd: marketData[index].price_usd,
//             market_cap_usd: marketData[index].market_cap_usd,
//             volume_usd: marketData[index]['24h_volume_usd'],
//             available_supply: marketData[index].available_supply,
//             percent_change_1h: marketData[index].percent_change_1h,
//             percent_change_24h: marketData[index].percent_change_24h,
//             percent_change_7d: marketData[index].percent_change_7d
//           });
//       }
      
//       this.setState({
//         tableData: tabledata,
//         isLoading: false

//       })
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// }


//   componentDidMount() {
//     this.rateData(0, 150);
//   }