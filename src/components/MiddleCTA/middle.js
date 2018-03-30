import React, {Component} from 'react'

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

// importing images & icons
import setting from '../../icons/sun.png'
import glass from '../../icons/glass-martini.png'


// import number format
import NumberFormat from 'react-number-format';

import TableData from '../GraphTable/graphtable';

class Middle extends React.Component{

  constructor(props){
        super(props);
        this.state = {
            term : '',
            tableData: [],
            timerInterval: 2000,
            isLoading: true,
            market_show: true,
            volume_show : true,
            cicular_show: true,
            one_h_show : true,
            twenty_4_show: true,
            week_show : true,
            selectedOption1: 'usd',
            coin: ''
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.searchFor = this.searchFor.bind(this);
        this.handlecurrency = this.handlecurrency.bind(this);
        this.SendCryptoData = this.SendCryptoData.bind(this);

    }

    handlecurrency(e){
        this.setState({
            selectedOption1: e.target.value,
        });
    }

    getNames = () => {
        console.log('names');
        setTimeout(this.getNames, this.state.timerInterval);
    }

    searchFor(term) {
        return function(x){
            return x.first || !term;
        }
    }

    searchHandler (event) {
        this.setState({ term : event.target.value})
        // console.log(event.target.value)
    }

    rateData = (start, end) => {

        const url = 'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&start='+start+'&limit='+end+'';
      
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
                  price_eur: marketData[index].price_eur,
                  market_cap_usd: marketData[index].market_cap_usd,
                  market_cap_eur: marketData[index].market_cap_eur,
                  volume_usd: marketData[index]['24h_volume_usd'],
                  volume_eur: marketData[index]['24h_volume_eur'],
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


    componentWillMount(){
        this.props.getList();
    }

    componentDidMount(){
        this.props.getdataa();
        this.rateData(0, 1600);
        setTimeout(this.getNames, this.state.timerInterval);
        // this.SendCryptoData();
        // console.log("didmount running",this.props.getList());
       
    }

    handleTimer = (e) => {
        const val = e.target.value;  
        console.log('interval', val*1000);
        this.setState({timerInterval: val*1000})
     }

    SendCryptoData (ev) {
        ev.preventDefault();
        let crypto_coin = this.state.tableData
        console.log('rate', crypto_coin)
        let crypto = {
            coin : crypto_coin

        }
        console.log("crypto Curr info", crypto);

        this.props.sendingData(crypto);
    }

    render(){
        const { name_show, market_show, volume_show, cicular_show, one_h_show, twenty_4_show, week_show } = this.state;
        console.log("list", this.props.listState)
        console.log('sdasd',this.state.tableData)
        const {term} = this.state;
        let filterData = this.state.tableData.filter(
            (tableData) => {
                return tableData.name.toLowerCase().indexOf(this.state.term) !== -1;
            }
        );
        // for catching the API array
        let m = this.props.resdata;
        
        const curr_select = this.state.selectedOption1
        // console.log('you have selected',curr_select)
          
        console.log('filterDataa',filterData)
        return(
            <div >
                {/* <!-- MIDDLE CTA STARTS--> */}
                <section id="card" >
                    <div className="container">
                        <div className="row">
                            <div className="top-cards" align="center">
                                <div className="col-md-1 col-xs-2 refresh-rate-card">
                                    <h4>REFRESH</h4>
                                    <div class="select-container">
                                        <select id="timerInterval" className="selectpicker" onChange={this.handleTimer}>
                                            <option value= "2">2 Sec</option>
                                            <option value = "5">5 Sec</option>
                                            <option value = "10">10 Sec</option>
                                        </select>        
                                    </div>
                                </div>
                                {/* <button onClick={this.notify}>Notify !</button> */}
                                <div className="col-md-1 col-xs-2 curren-option-card">
                                    <h4>CURRENCY</h4>
                                    <div class="select-container">
                                        <select class="selectpicker" value={this.state.selectedOption1} onChange={this.handlecurrency} >
                                            <option value="usd">USD</option>
                                            <option value="eur">EUR</option>
                                        </select>     
                                    </div>
                                </div>                                
                                <div className="col-md-2 col-xs-2 global-market">        
                                    <h4>GLOBAL MARKET</h4>
                                    <p>{curr_select === "usd" ? '$' + m.total_market_cap_usd : '€' + m.total_market_cap_usd * 0.814079}</p>

                                   {/* <p><NumberFormat value={curr_select === 'usd' ? m.total_market_cap_usd : m.total_market_cap_usd * 0.814079} displayType={'text'} thousandSeparator={true}/></p> */}
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

                            <div className="col-md-1 col-md-offset-2 coin-screener-icon">
                                <a href="#" style={{textDecoration: 'none'}} data-toggle="modal" data-target="#layoutModal"><img className="pull-left" src={glass} alt="logo"/><p>LAYOUT</p></a>
                            </div>
                            <div className="col-md-2 col-xs-6 form-inpt">
                                <form className="form-horizontal" role="Search">
                                    <div className="input-group">
                                        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.searchHandler} value = {term}/>
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit" ><i className="glyphicon glyphicon-search" onClick={this.SendCryptoData}></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>     
                                         
                        </div>
                    </div>
                    {this.state.isLoading ? <h1 style={{textAlign: 'center', color: 'pink' }}>loading ...</h1> : 
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
                    }

                    {/* Layout Modal */}
                    <div id="layoutModal" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            {/* <!-- Modal content--> */}
                            <div className="modal-content" align="center">
                                <div className="modal-header" align= "center">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h3 className="modal-title">Column Visibility</h3>
                                    <h4>Select values you wish to see</h4>
                                </div>
                                <div className="modal-body col-md-6" >
                                    <div className="row"> 
                                        <span style={{marginLeft: '20px'}}>Market Cap</span>
                                        <div className="col-md-offset-1">
                                            <label className="switch">
                                                <input type="checkbox" data-toggle="toggle"  onClick={() => this.setState({ market_show: !market_show })}/>
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-body col-md-6" >
                                    <div className="row"> 
                                        <span style={{marginLeft: '20px'}}>Volume</span>
                                        <div className="col-md-offset-1">
                                            <label className="switch">
                                                <input type="checkbox" data-toggle="toggle" onClick={() => this.setState({ volume_show: !volume_show })}/>
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-body col-md-6" >
                                    <div className="row"> 
                                    <span style={{marginLeft: '20px'}}>Circulating</span>
                                        <div className="col-md-offset-1">   
                                            <label className="switch">
                                                <input type="checkbox" data-toggle="toggle" onClick={() => this.setState({ cicular_show: !cicular_show })}/>
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-body col-md-6" >
                                    <div class = "row">
                                        <span style={{marginLeft: '20px'}}>1 h </span> 
                                        <div className="col-md-offset-1">  
                                            <label className="switch">
                                                <input type="checkbox" data-toggle="toggle" onClick={() => this.setState({ one_h_show: !one_h_show })}/>
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-body col-md-6" >
                                    <div className="row"> 
                                        <span style={{marginLeft: '20px'}}>24 h </span> 
                                        <div className="col-md-offset-1"> 
                                            <label className="switch">
                                                <input type="checkbox" data-toggle="toggle" onClick={() => this.setState({ twenty_4_show: !twenty_4_show })}/>
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-body col-md-6" >
                                    <div className="row"> 
                                        <span style={{marginLeft: '20px'}}>Weekly</span> 
                                        <div className="col-md-offset-1"> 
                                            <label className="switch">
                                                <input type="checkbox" data-toggle="toggle" onClick={() => this.setState({ week_show: !week_show })}/>
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-success" data-dismiss="modal">Done</button>
                                </div>
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
        getdataa : () => {dispatch(MiddleWare.GetGlobal())},
        getList: () => {dispatch(MiddleWare.fetchCryptoData())},
        sendingData: cr_coin => {dispatch(MiddleWare.sendCryptoCurr(cr_coin))},
    })
}

const mapStateToProps = (state) => {
    return ({
        resdata : state.GlobalReducer.data,
        listState: state.CryptoReducer.crypto_data,
    })
}


export default connect(mapStateToProps,mapDispatchToProps)(Middle);
