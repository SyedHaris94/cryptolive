import React, {Component} from 'react'

import {Navbar, Jumbo, FiveFeature, Middle,BottomCards, Footer } from '../index'



class Exchange extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>   
                <Jumbo/>  
                <FiveFeature/>
                <Middle/>
                <ExchangeTable/>
                <BottomCards/>
                <Footer/>
            </div>
        )
    }
}


class ExchangeTable extends React.Component{
    constructor(){
        super();
        this.state = {
            table : [],
        }
    }


    exchangeData = () => {

        // const pageID = this.props.match.params.symbol;
        const url = 'https://min-api.cryptocompare.com/data/all/exchanges';
  
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

    componentDidMount(){
        this.exchangeData();
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
                      <th>Exchange</th>
                      <th>MARKET</th>
                      <th>Volume</th>
                      <th>Volume %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {this.state.table.map(item => 
                          <PriceVol
                            exId={item.id} 
                            exName={item.exchangeName}
                            exPair={item.pair}
                          />
                    )} */}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        );
    }
}


export default Exchange;


