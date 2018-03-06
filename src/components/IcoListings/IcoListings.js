import React, {Component} from 'react'

// react-router
import { Link } from "react-router-dom";

class IcoListingItem extends React.Component{
    
    constructor(props) {      
        super(props);
        
        this.state = {
            icoData: []
        };
    
      }

      rateData = () => {

        // const pageID = this.props.match.params.symbol;
        const url = 'https://api.icowatchlist.com/public/v1/';
      
        fetch(url).then( r => r.json())
          .then((marketData) => {
            const icodata = [];
            let count = 0;
      
            for (let index in marketData.ico.live){
                icodata.push({
                  name: marketData.ico.live[index].name,
                  image: marketData.ico.live[index].image,
                  description: marketData.ico.live[index].description,
                  count: count
                   });
                   count++
            }
            
            this.setState({
                icoData: icodata,
            })
          })
          .catch((e) => {
            console.log(e);
          });
      }
      
      
      componentDidMount() {
          console.log('did mount run')
        this.rateData();
      }
      


    render(){
        return(
            <div>
                {console.log('abcd',this.state.icoData)}
                {/* ICO LISTING ITEMS STARTS */}
                <section id="ico-listing-item">
                   
                <Link to="icoview">
                  {this.state.icoData.map(
                        (m, v) => {
                    {console.log('sds',this.state.icoData.length)}
                    const img = m.name.toLowerCase();
                    if (m.count <= 5){
                        return <div className="col-md-9 ico-card" key={m.count}>
                            <div className="row">
                                <div className="col-md-2 col-xs-3">
                                    <img src={m.image}
                                    //  imageParam= {pageSym} 
                                      style={{marginTop: '20px',width: '80%', height: '30%'}}/>
                                </div>
                                <div className="col-md-10 col-xs-9">
                                    <h3>
                                        {m.name}        
                                        {/* <span className="trending-icon">TRENDING</span> <span className="premium-icon">PRIMARY</span> */}
                                        </h3>
                                    <p className="rating-feedback">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        2.7 average based on 82 experts rating
                                    </p>
                                    <p className="last-cont">
                                        {m.description}
                                    </p>
                                </div>

                            </div>
                        </div>;
                         }                     
                        })
            
                    }
                    </Link>

                     {/*<a href="icoview.html">

                        <div className="col-md-9 ico-card">
                            <div className="row">

                                <div className="col-md-2 col-xs-3">
                                    <img src={gilgamesh} alt="ico-logo"/>
                                </div>

                                <div className="col-md-10 col-xs-9">
                                    <h3>Gilgamesh Platform</h3>
                                    <p className="rating-feedback">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        4.1 average based on 38 experts rating
                                    </p>
                                    <p className="last-cont">Knowledge-sharing social network platform based on Ethereum Blockchain.knowledge-sharing social network platform based on
                                        Ethereum Blockchain.</p>

                                </div>


                            </div>


                        </div>
                    </a>

                    <a href="icoview.html">

                        <div className="col-md-9 ico-card">
                            <div className="row">

                                <div className="col-md-2 col-xs-3">
                                    <img src={nper} className="img-responsive" alt="ico-logo"/>
                                </div>

                                <div className="col-md-10 col-xs-9">
                                    <h3 >NPER</h3>
                                    <p className="rating-feedback">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        2.1 average based on 102 expert ratings
                                    </p>
                                    <p className="last-cont">Knowledge-sharing social network platform based on Ethereum Blockchain.knowledge-sharing social network platform based on
                                        Ethereum Blockchain.</p>

                                </div>


                            </div>


                        </div>
                    </a>

                    <a href="icoview.html">

                        <div className="col-md-9 ico-card">
                            <div className="row">

                                <div className="col-md-2 col-xs-3">
                                    <img src={coinloan} className="img-responsive" alt="ico-logo"/>
                                </div>

                                <div className="col-md-10 col-xs-9">
                                    <h3>COINLOAN <span className="premium-icon">PREMIUM</span></h3>
                                    <p className="rating-feedback">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                        4.6 average based on 43 experts rating
                                    </p>
                                    <p className="last-cont">Blockchain and smart contracts powered green energy trading platforms where everyone can trade and a live happy live
                                        forever,this coin,will change the world.</p>

                                </div>


                            </div>


                        </div>
                    </a> */}

                    <div className="col-md-9" style={{marginTop: '10px', marginBottom:'10px'}}>
                        <Link to="icoview">
                            <div className="row">
                                <button type="button" className="btn btn-default btn-block"style={{borderRadius:'1px'}} >VIEW ALL</button>
                            </div>
                        </Link>

                    </div>

                </section>
                {/* ICO LISTING ITEMS ENDS */}
            </div>
        );
    }
}

export default IcoListingItem;