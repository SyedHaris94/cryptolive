import React, {Component} from 'react'

import { Link } from "react-router-dom";

import {Navbar, Footer, }  from '../index'

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

class BrowseICO extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            term : '',
          
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.searchFor = this.searchFor.bind(this);

        
    }

    searchHandler (event) {
        this.setState({ term : event.target.value})
        // console.log(event.target.value)
    }

    searchFor(term) {
        return function(x){
            return x.first || !term;
        }
    }

    componentWillMount(){
        this.props.getList();
        this.props.getupcoming();
        this.props.getended(); 
    }

    // componentDidMount(){
    //     this.props.getList();
    //     this.props.getupcoming();
    //     this.props.getended(); 
    // }

    render(){
        const {term} = this.state;
       
        let allico = this.props.AllIcoState;
        let upcoming = this.props.upcomingIcoState;
        let ended = this.props.EndedIcoState;

        let filterData = allico.filter(
            (allico) => {
                return allico.name.toLowerCase().indexOf(this.state.term) !== -1;
            }
        );

        console.log('filterDataa',filterData)

        function gotoUrl(sym,live) {
            return {
              pathname: `/icoview/${sym}/${live}`
            }
          }
          console.log('allico',allico);
          console.log('upcoming',upcoming);
          console.log('ended',ended);
        // let combine = upcoming.concat(this.state.upcData);
        return(
            
            <div>
                    <Navbar/>
                    <section id="browse-ico">
                        <div className="container">
                            <div className="row">
                                <p class= "browse-head">BROWSE ICOs</p>
                                    <div className="col-md-3 left-col">
                                        <div className="row">
                                           {/* <LeftColBrowse/> */}
                                            <div className="col-md-12 search-form">
                                                <div className="col-md-6 pull-left"><p>CLEAR FILTER x</p>
                                                </div>

                                                <div className="col-md-4">
                                                    <button type="button" className="btn btn-hide">HIDE</button>
                                                </div>

                                                <div className="col-md-12">
                                                    <p className="grey-text">SEARCH</p>
                                                </div>

                                                <div className="col-md-12">
                                                    <input type="text" onChange={this.searchHandler} value = {term}/>
                                                </div>

                                                <div className="col-md-12">
                                                <p className="grey-text"> CATEGORY</p>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="dropdown">
                                                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Platforms
                                                            <span className="caret"></span>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="#">HTML</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">CSS</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">JavaScript</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">About Us</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <p className="grey-text">FEATURES</p>
                                                </div>
                                                <div className="col-md-12">
                                                
                                                    <div className="col-md-2">
                                                        <input type="checkbox" name="vehicle" value="Bike"/>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <p className="grey-text">BONUS AVALIBLE</p>
                                                    </div>

                                                </div>

                                                <div className="col-md-12">
                                                    <div className="col-md-2">
                                                        <input type="checkbox" name="vehicle" value="Bike"/>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <p className="grey-text">BOUNTY AVALIBLE</p>
                                                    </div>

                                                </div>

                                                <div className="col-md-12">
                                                    <div className="col-md-2">
                                                        <input type="checkbox" name="vehicle" value="Bike"/>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <p className="grey-text">PUBLIC TEAM</p>
                                                    </div>

                                                </div>

                                                <div className="col-md-12">
                                                    <div className="col-md-2">
                                                        <input type="checkbox" name="vehicle" value="Bike"/>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <p className="grey-text">EXPERT RATING</p>
                                                    </div>

                                                </div>


                                                <div className="col-md-12">
                                                    <p className="grey-text">RATING</p>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="dropdown">
                                                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"  >1+
                                                            <span className="caret"></span>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="#">HTML</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">CSS</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">JavaScript</a>
                                                            </li>
                                                            <li className="divider"></li>
                                                            <li>
                                                                <a href="#">About Us</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                <p className="grey-text">STATUS</p>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="dropdown">
                                                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">
                                                            Active
                                                            <span className="caret"></span>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="#">HTML</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">CSS</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">JavaScript</a>
                                                            </li>
                                                            <li className="divider"></li>
                                                            <li>
                                                                <a href="#">About Us</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <p className="grey-text">START AFTER</p>
                                                </div>
                                                <div className="col-md-6">
                                                    <p className="grey-text">END BEFORE</p>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="dropdown">
                                                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" >
                                                            <span className="glyphicon glyphicon-calendar">11Aug2016</span>
                                                            <span className="glyphicon glyphicon-calendar" >14Aug2016</span>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="#">HTML</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">CSS</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">JavaScript</a>
                                                            </li>
                                                            <li className="divider"></li>
                                                            <li>
                                                                <a href="#">About Us</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <p className="grey-text">COUNTRY</p>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="dropdown">
                                                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"  >any
                                                            <span className="caret"></span>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="#">HTML</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">CSS</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">JavaScript</a>
                                                            </li>
                                                            <li className="divider"></li>
                                                            <li>
                                                                <a href="#">About Us</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <p className="grey-text">REGISTRATION</p>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="dropdown">
                                                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"  >any
                                                            <span className="caret"></span>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="#">HTML</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">CSS</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">JavaScript</a>
                                                            </li>
                                                            <li className="divider"></li>
                                                            <li>
                                                                <a href="#">About Us</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <p className="grey-text">EXCLUDED RESTRICTED AREA</p>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="dropdown">
                                                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"  >none
                                                            <span className="caret"></span>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="#">HTML</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">CSS</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">JavaScript</a>
                                                            </li>
                                                            <li className="divider"></li>
                                                            <li>
                                                                <a href="#">About Us</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>


                                                <div className="col-md-12">
                                                    <p className="grey-text">PLATFORM</p>
                                                </div>
                                                <div className="col-md-12">

                                                    <div className="dropdown">
                                                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"  >any
                                                            <span className="caret"></span>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="#">HTML</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">CSS</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">JavaScript</a>
                                                            </li>
                                                            <li className="divider"></li>
                                                            <li>
                                                                <a href="#">About Us</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <p className="grey-text">ACCEPTED CURRENICES</p>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="dropdown">
                                                        <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown"  >any
                                                            <span className="caret"></span>
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li>
                                                                <a href="#">HTML</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">CSS</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">JavaScript</a>
                                                            </li>
                                                            <li className="divider"></li>
                                                            <li>
                                                                <a href="#">About Us</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-9 right-col">
                                        <section id="ico-listing-item"  style={{marginTop: '-40px'}}>
                                            <ul className="list-inline ico-list" style={{marginBottom: '-10px'}}>
                                                <li>
                                                    <p style={{textAlign: 'left'}}>85 ICO's FOUND</p>
                                                </li>
                                                <li>
                                                    <span className="badge">PLATFORM</span>
                                                </li>
                                                <li>
                                                    <span className="badge">ACTIVE</span>
                                                </li>
                                            </ul>
                                            {/* <IcoListingItem/> */}
                                        </section> 
                                        <section id="ico-listing-item">
                                            <div class="container col-md-9">
                                                {filterData.map(
                                                    (m, v) => {
                                                    let pageSym = m.name
                                                    let live = m.live
                                                // {console.log('sds',combine[0].name)}
                                                const img = m.name.toLowerCase();
                                                // if (m.count <= 5){
                                                    return(
                                                    <div className="col-md-9 ico-card-1" key={m.count}>
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
                                                                    {/* <RatePanel/> */}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>);
                                                    }                     
                                                // }
                                            )
                                                }
                                            {/* <div className="col-md-12" style={{marginTop: '10px', marginBottom:'10px', textAlign: 'center'}}>
                                                <Link to="browseico" style={{textDecoration: 'none'}}> 
                                                    <div className="row">
                                                        <button type="button" className="btn btn-block-1"style={{borderRadius:'1px', display: "inline-block",marginLeft: '0px'}} >VIEW ALL</button>
                                                    </div>
                                                </Link>

                                            </div> */}
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </section>
                        
                    <Footer/>

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

export default connect(mapStateToProps, mapDispatchToProps)(BrowseICO);