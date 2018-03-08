import React, {Component} from 'react'

// react-router
import { Link } from "react-router-dom";

class IcoListingItem extends React.Component{
    
    constructor(props) {      
        super(props);
        
        this.state = {
            icoData: [],
            upcData: []
        };
    
      }

      liveData = () => {

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
                  count: count,
                  live: 1

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
      


      upcomingData = () => {

        // const pageID = this.props.match.params.symbol;
        const url = 'https://api.icowatchlist.com/public/v1/upcoming';
      
        fetch(url).then( r => r.json())
          .then((marketData) => {
            const upcdata = [];
            let count = 0;
      
            for (let index in marketData.ico.upcoming){
                upcdata.push({
                  name: marketData.ico.upcoming[index].name,
                  image: marketData.ico.upcoming[index].image,
                  description: marketData.ico.upcoming[index].description,
                  count: count,
                  live: 0

                   });
                   count++
            }
            
            this.setState({
                upcData: upcdata,
            })
          })
          .catch((e) => {
            console.log(e);
          });
      }
      
      
      componentDidMount() {
          console.log('did mount run')
        this.liveData();
        this.upcomingData();
      }
      


    render(){
        function gotoUrl(sym,live) {
            return {
              pathname: `/icoview/${sym}/${live}`
            }
          }
        //   const comData =
        let combine = this.state.icoData.concat(this.state.upcData);
        console.log('combining data',combine);
        
        return(
            <div>
                {console.log('abcd',this.state.icoData)}
                {console.log('xyz',this.state.upcData)}
                

                {/* ICO LISTING ITEMS STARTS */}
                <section id="ico-listing-item">
                   {combine.map(
                            (m, v) => {
                            let pageSym = m.name
                            let live = m.live
                        {console.log('sds',combine[0].name)}
                        const img = m.name.toLowerCase();
                        if (m.count <= 2){
                            return <div className="col-md-9 ico-card" key={m.count}>
                            <Link to={gotoUrl(pageSym, live)} style={{ textDecoration: "none" }}>
                
                                <div className="row">
                                    <div className="col-md-2 col-xs-3">
                                        <img src={m.image}
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
                            </Link>

                            </div>;
                            }                     
                            })
                        }
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