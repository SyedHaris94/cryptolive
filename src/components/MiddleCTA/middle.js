import React, {Component} from 'react'
// import axios from 'axios';

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

// importing images & icons
import setting from '../../icons/sun.png'
import glass from '../../icons/glass-martini.png'


// import number format
import NumberFormat from 'react-number-format';

import TableData from '../GraphTable/graphtable'

class Middle extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            term : '',
            tableData: [],
            isLoading: true,
            timerInterval: 1000,
            // showResults : false
            market_show: true,
            volume_show : true,
            cicular_show: true,
            one_h_show : true,
            twenty_4_show: true,
            week_show : true,



        }

        // this.filterList = this.filterList.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
        this.searchFor = this.searchFor.bind(this);
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


    componentDidMount(){
        this.props.getdataa();
        this.rateData(0, 150);
        setTimeout(this.getNames, this.state.timerInterval);

    }

    handleTimer = (e) => {
        const val = e.target.value;  
        console.log('interval', val*1000);
        this.setState({timerInterval: val*1000})
     }

    render(){
        const { name_show, market_show, volume_show, cicular_show, one_h_show, twenty_4_show, week_show } = this.state;

        const {term} = this.state;
        let filterData = this.state.tableData.filter(
            (tableData) => {
                return tableData.name.toLowerCase().indexOf(this.state.term) !== -1;
            }
        );
        // for catching the API array
        let m = this.props.resdata;

        return(
            <div>
                {/* <!-- MIDDLE CTA STARTS--> */}
                <section id="card" >
                    <div className="container">
                        <div className="row">
                        {this.state.data}
                            <div className="top-cards" align="center">
                                <div className="col-md-1 col-xs-2 refresh-rate-card">
                                    <h4>REFRESH</h4>
                                    <select id="timerInterval" class="selectpicker" onChange={this.handleTimer}>
                                        <option value= "2">2 Sec</option>
                                        <option value = "5">5 Sec</option>
                                        <option value = "10">10 Sec</option>
                                    </select>        
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
                                <a href="#" style={{textDecoration: 'none'}} data-toggle="modal" data-target="#layoutModal"><img className="pull-left" src={glass} alt="logo"/><p>LAYOUT</p></a>
                            </div>
                            <div className="col-md-2 col-xs-12 form-inpt">
                                <form className="form-horizontal" role="Search">
                                    <div className="input-group">
                                        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.searchHandler} value = {term}/>
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>                        
                        </div>
                    </div>
                    {this.state.isLoading ? <h1 style={{textAlign: 'center', color: 'pink' }}>loading ...</h1> : 
                                     <TableData 
                                        table={filterData} 
                                        // name= {this.state.name_show }
                                        market = {this.state.market_show}
                                        volume = {this.state.volume_show}
                                        circul = {this.state.cicular_show}
                                        one_h = {this.state.one_h_show}
                                        twenty_4 = {this.state.twenty_4_show}
                                        week = {this.state.week_show}
                                    /> 
                                   
                    }


                    {/* Layout Modal */}
                    <div id="layoutModal" class="modal fade" role="dialog">
                    <div class="modal-dialog">

                        {/* <!-- Modal content--> */}
                        <div class="modal-content" align="center">
                            <div class="modal-header" align= "center">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h3 class="modal-title">Column Visibility</h3>
                                <h4>Select values you wish to see</h4>
                            </div>
                            <div class="modal-body col-md-6" >
                                <div class="row"> 
                                    <span style={{marginLeft: '20px'}}>Market Cap</span>
                                    <div class="col-md-offset-1">
                                        <label class="switch">
                                            <input type="checkbox" data-toggle="toggle"  onClick={() => this.setState({ market_show: !market_show })}/>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-body col-md-6" >
                                <div class="row"> 
                                    <span style={{marginLeft: '20px'}}>Volume</span>
                                    <div class="col-md-offset-1">
                                        <label class="switch">
                                            <input type="checkbox" data-toggle="toggle" onClick={() => this.setState({ volume_show: !volume_show })}/>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-body col-md-6" >
                                <div class="row"> 
                                <span style={{marginLeft: '20px'}}>Circulating</span>
                                    <div class="col-md-offset-1">   
                                        <label class="switch">
                                            <input type="checkbox" data-toggle="toggle" onClick={() => this.setState({ cicular_show: !cicular_show })}/>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-body col-md-6" >
                                <div class = "row">
                                    <span style={{marginLeft: '20px'}}>1 h </span> 
                                    <div class="col-md-offset-1">  
                                        <label class="switch">
                                            <input type="checkbox" data-toggle="toggle" onClick={() => this.setState({ one_h_show: !one_h_show })}/>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-body col-md-6" >
                                <div class="row"> 
                                    <span style={{marginLeft: '20px'}}>24 h </span> 
                                    <div class="col-md-offset-1"> 
                                        <label class="switch">
                                            <input type="checkbox" data-toggle="toggle" onClick={() => this.setState({ twenty_4_show: !twenty_4_show })}/>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-body col-md-6" >
                                <div class="row"> 
                                    <span style={{marginLeft: '20px'}}>Weekly</span> 
                                    <div class="col-md-offset-1"> 
                                        <label class="switch">
                                            <input type="checkbox" data-toggle="toggle" onClick={() => this.setState({ week_show: !week_show })}/>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success" data-dismiss="modal">Done</button>
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
        getdataa : () => {dispatch(MiddleWare.GetGlobal()); }
    })
}

const mapStateToProps = (state) => {
    return ({
        resdata : state.GlobalReducer.data
        
    })

}

export default connect(mapStateToProps, mapDispatchToProps)(Middle);
