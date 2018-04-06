import React, {Component} from 'react'

// react-router
import { Link } from "react-router-dom";

import {Tabs, Tab} from 'material-ui/Tabs';

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'
import {RatePanel} from '../index'


const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
  };

class IcoListingItem extends React.Component{
    constructor(props) {      
        super(props);   
        this.state = {
            icoData: [],
            upcData: [],
            value: 'a',
        };
    
      }
      
      handleChange = (value) => {
        this.setState({
          value: value,
        });
      };

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
        //   console.log('did mount run')
        this.liveData();
        this.upcomingData();
        this.props.getList();
        this.props.getupcoming();
        this.props.getended(); 
    }
      


    render(){

        let allico = this.props.AllIcoState;
        let upcoming = this.props.upcomingIcoState;
        let ended = this.props.EndedIcoState;

        function gotoUrl(sym,live) {
            return {
              pathname: `/icoview/${sym}/${live}`
            }
          }
          console.log('allico',allico);
          console.log('upcoming',upcoming);
          console.log('ended',ended);
        let combine = this.state.icoData.concat(this.state.upcData);
        // let combine = allico.concat(upcoming);
        // console.log('combining data',allico.concat(upcoming));
        
        return(
        <div>
            {/* ICO LISTING ITEMS STARTS */}
               
            <section id="ico-listing-item">
                <div class="container col-md-9">
                    <Tabs value={this.state.value}
                        onChange={this.handleChange}
                        className="navi-tab"
                        >
                        <Tab label="LIVE ICOs" value="a">
                            <div>
                                {allico.map(
                                    (m, v) => {
                                    let pageSym = m.name
                                    let live = m.live
                                // {console.log('sds',combine[0].name)}
                                const img = m.name.toLowerCase();
                                if (m.count <= 5){
                                    return(
                                    <div className="col-md-9 ico-card" key={m.count}>
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
                                                    <RatePanel/>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>);
                                    }                     
                                })
                                }
                                <div className="col-md-12" style={{marginTop: '10px', marginBottom:'10px', textAlign: 'center'}}>
                                    <Link to="browseico" style={{textDecoration: 'none'}}> 
                                        <div className="row">
                                            <button type="button" className="btn btn-block"style={{borderRadius:'1px', display: "inline-block",marginLeft: '0px'}} >VIEW ALL</button>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </Tab>
                        <Tab label="UPCOMING ICOs" value="b">
                            <div>
                                {upcoming.map(
                                    (m, v) => {
                                    let pageSym = m.name
                                    let live = m.live
                                const img = m.name.toLowerCase();
                                if (m.count <= 5){
                                    return(
                                    <div className="col-md-9 ico-card " style={{marginRight: '0px !important', marginLeft:'0px !important'}} key={m.count}>
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
                                    </div>);
                                    }                     
                                })
                                }
                                <div className="col-md-12" style={{marginTop: '10px', marginBottom:'10px', textAlign: 'center'}}>
                                    <Link to="browseico" style={{textDecoration: 'none'}}> 
                                        <div className="row">
                                            <button type="button" className="btn btn-block "style={{borderRadius:'1px', display: "inline-block",marginLeft: '0px'}} >VIEW ALL</button>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </Tab>
                        <Tab label="FINISHED ICOs" value="c">
                            <div>
                                {ended.map(
                                    (m, v) => {
                                    let pageSym = m.name
                                    let live = m.live
                                // {console.log('sds',combine[0].name)}
                                const img = m.name.toLowerCase();
                                if (m.count <= 5){
                                    return(
                                    <div className="col-md-9 ico-card" style={{marginRight: '0px !important', marginLeft:'0px !important'}} key={m.count}>
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
                                    </div>);
                                    }                     
                                })
                                }
                                <div className="col-md-12" style={{marginTop: '10px', marginBottom:'10px', textAlign: 'center'}}>
                                    <Link to="browseico" style={{textDecoration: 'none'}}> 
                                        <div className="row">
                                            <button type="button" className="btn btn-block"style={{borderRadius:'1px',display: "inline-block", marginLeft: '0px'}} >VIEW ALL</button>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </section>
                {/* ICO LISTING ITEMS ENDS */}
        </div>
        );
    }
}


const mapDispatchToProps = (dispatch) => {
    return ({
        getList: () => {
            dispatch(MiddleWare.fetchIcoData());
            },
        getupcoming: () => {
            dispatch(MiddleWare.fetchUpcomingICO());
            },
        getended: () => {
            dispatch(MiddleWare.fetchEndedICO());
            },
    })
}


const mapStateToProps = (state) => {
    return ({
        AllIcoState: state.ICOReducer.ico_data,
        upcomingIcoState: state.UpcomingICOReducer.up_ico_data,
        EndedIcoState: state.EndedICOReducer.end_ico_data,
    })
}

export default connect(mapStateToProps, mapDispatchToProps) (IcoListingItem);
