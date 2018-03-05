import React, {Component} from 'react'

import {Navbar, Jumbo, FiveFeature, Middle,BottomCards, Footer } from '../index'



class Market extends React.Component{

  

    render(){
        return(
            <div>
                <Navbar/>   
                <Jumbo/>  
                <FiveFeature/>
                {/* <Middle/> */}
                <MarketTable/>
                <BottomCards/>
                <Footer/>
            </div>
        )
    }
}


class MarketTable extends React.Component{
    constructor(){
        super();
        this.state = {
            table : [],
        }
    }

    marketData = () => {

      // const pageID = this.props.match.params.symbol;
      const url = 'https://api.cryptowat.ch/markets';

      fetch(url).then( r => r.json())
        .then((marketData) => {
          const tabledata = [];

          marketData.result.map(index => {
            tabledata.push({
              id: index.id,
              exchangeName: index.exchange,
              pair: index.pair
            });
          })
          
          this.setState({
            table: tabledata,
          })
        })
        .catch((e) => {
          console.log(e);
        });
    }
    

    componentWillMount(){
      this.marketData();
      console.log('will mount running')
      console.log('market', this.state.table);

    
    }

    render(){
        return(
            <section id="graph-table">
            <div className="container">
              <div className="row">
                <table className="table">
                  <thead>
                    <tr>
                      <th>MARKET</th>
                      <th>EXCHANGE</th>
                      <th>RATE</th>
                      <th>VOLUME</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.table.map(item => 
                          <PriceVol
                            exId={item.id} 
                            exName={item.exchangeName}
                            exPair={item.pair}
                          />
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        );
    }
}


class PriceVol extends React.Component{
  
  constructor(props) {
            
    super(props);
    
    this.state = {
      rateVol: []
    };

  }

rateData = (exchange, pair) => {

  // const pageID = this.props.match.params.symbol;
  const url = 'https://api.cryptowat.ch/markets/'+exchange+'/'+pair+'/summary';

  fetch(url).then( r => r.json())
    .then((marketData) => {
      const tabledata = [];

      for (let index in marketData.result){
        tabledata.push({
            rate: marketData.result.price.last,
            volume: marketData.result.volume
          });
      }
      
      this.setState({
        rateVol: tabledata,
      })
    })
    .catch((e) => {
      console.log(e);
    });
}


componentWillMount(){
  this.rateData(this.props.exName, this.props.exPair);
}


  render(){
    const x = [];
    return(
      <tr key={this.props.exId}>
        {this.state.rateVol.map((item) => {
          x.push(
            item.rate,
            item.volume
          );

        })}
        <td>{this.props.exPair.toUpperCase()}</td>
        <td>{this.props.exName.toUpperCase()}</td>
        <td>{x[0]}</td>
        <td>${x[1]}</td>
      </tr>
    )
  }
}

export default Market;




