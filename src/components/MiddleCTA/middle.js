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
    
    constructor(){
        super();
        this.state = {
            initialItems: [
                "Apples",
                "Broccoli",
                "Bitcoin",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns",
                

                ],
            items: [],
            tableData: [],
            isLoading: true

        }
        this.filterList = this.filterList.bind(this);
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

    }

    filterList(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }
   
      componentWillMount(){
          this.setState({items: this.state.initialItems})
      }

    render(){
        // for catching the API array
        let m = this.props.resdata;

        console.log('sds',this.state.items)
        console.log('table',this.state.tableData)

        return(
            <div>
                {/* <!-- MIDDLE CTA STARTS--> */}
                <section id="card" >
                    <div className="container">
                        <div className="row">
                            <div className="top-cards" align="center">
                                <div className="col-md-1 col-xs-2 refresh-rate-card">
                                    <h4>REFRESH</h4>
                                    <select class="selectpicker" >
                                        <option>2 Sec</option>
                                        <option>5 Sec</option>
                                        <option>10 Sec</option>
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
                                <img className="pull-left"  src={glass} alt="logo"/>
                                <p>LAYOUT</p>
                            </div>
                            <div className="col-md-2 col-xs-12 form-inpt">
                                <form className="form-horizontal" role="Search">
                                    <div className="input-group">
                                        <input type="text" className="form-control form-control-lg" placeholder="Search" onChange={this.filterList}/>
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                                        </div>
                                    </div>
                                </form>
                            </div>                        
                        </div>
                    </div>
                    {this.state.isLoading ? <h1 style={{textAlign: 'center', color: 'pink' }}>loading ...</h1> :  <TableData table={this.state.tableData}/>}
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
