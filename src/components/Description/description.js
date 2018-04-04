import React, {Component} from 'react'

// import images
import star from '../../icons/star.png'
import ganja from '../../icons/ganja.png'
import jasmine from '../../icons//jasmine.png'
import arrowupblue from '../../icons/arrow-up-blue.png'


import MiddleWare from "../../store//middleware/middleware";
import { connect } from "react-redux";

import {Rating} from '../index'

import {Tabs, Tab} from 'material-ui/Tabs';

import {Auth} from '../index'

import { ToastContainer, toast } from 'react-toastify';
import { css } from 'glamor';

import * as DB from "../../firebase/firebase";



const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
  };


class Description extends React.Component{

    constructor(props){
        super(props);
        
        this.twitter = this.twitter.bind(this);
        this.facebook = this.facebook.bind(this);
        this.google = this.google.bind(this);
    }
      
    facebook(){
        this.props.facebook('adad')
    }

    twitter(){
        this.props.twitter('adad')
    }
    google(){
        this.props.google('adad')
    }
   
    componentDidMount() {
      this.props.getList();
        this.props.getUserList();
    }
     
    
    notify = () => toast.error("You are not Loggin !!", {
        position: toast.POSITION.TOP_CENTER
      });;

    render(){
        let icoparam = this.props.icoNameParam
        {console.log('asdasdger',icoparam)}        
       
        const list = this.props.listState
        {console.log("list", list)}

        const user = this.props.userState
        {console.log("user list", user)}
        
        function rateUrl(api, url) {
            let test = [];

            api.map((m, v) => {    
                
                if (url == m.icoName) {
                    test.icoName = m.icoName;
                    test.uid = m.uid;
                    test.Concept = m.Concept;
                    test.comment = m.comment;
                    test.Whitepaper = m.Whitepaper;
                    test.Team = m.Team;
                }
            });
            return test;
        }
        // console.log('test', test)

        let pageParam = rateUrl(list, icoparam);


        console.log('pagePram',pageParam)
        const concept = pageParam.Concept
        const team = pageParam.Team
        const white = pageParam.Whitepaper
        const rate_percent = (team + concept + white) / 100 * 15
        let out_of_five = rate_percent/100*5
        out_of_five = Math.round( out_of_five * 10 ) / 10
        {console.log("login", this.props.userLogin)}

       const  User = DB.auth.currentUser;
        
        console.log('sds', User)

          return(
            <div>
                <ToastContainer />
                {/* <!-- DESCRIPTION STARTS --> */}
                <section id="description" > 
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-8 desc-card" >
                                <div className="nav-border">
                                    {/* <!-- Nav tabs --> */}
                                    <ul className="nav nav-tabs" role="tablist" style={{textDecoration: 'none'}}>
                                        <li role="presentation" className="active">
                                            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">ABOUT</a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">TEAM</a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">MILESTONES</a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">FINANCIALS</a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">RATING</a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">WHITE PAPER</a>
                                        </li>
                                        <button type="button" className="btn btn-grey-white" >SHARE</button>
                                    </ul>
                                    {/* <!-- Tab panes --> */}
                                    <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane active" id="ABOUT"></div>
                                        <div role="tabpanel" className="tab-pane" id="TEAM"></div>
                                        <div role="tabpanel" className="tab-pane" id="MILESTONES"></div>
                                        <div role="tabpanel" className="tab-pane" id="FINANCIALS"></div>
                                        <div role="tabpanel" className="tab-pane" id="RATING"></div>
                                        <div role="tabpanel" className="tab-pane" id="WHITE PAPER"></div>
                                    </div>
                                </div>
                                <div className="desc-border col-md-12">
                                    <div className="row">
                                        <h3>About Medicalchain</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It
                                            has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
                                            was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                        </p>
                                        <h3>Project Description</h3>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="row col-md-12 steve" align="center" >
                                    <h5 style={{paddingTop: '5px'}}><img src={star} alt="logo"/>
                                    FAVOURITE</h5>
                                </div>
                                <div  className="col-md-12 content" align="center">
                                    <img src={ganja} alt="logo"/>
                                    <p className="john">John Smith</p>
                                    <p className="enterpreneur">Enterpreneur, Blockchain business expert</p>
                                    <div  className="col-md-12 card-social " style={{color: 'grey'}}>
                                        <i className="fa fa-facebook fa-1.5x" aria-hidden="true"></i>
                                        <i className="fa fa-twitter fa-1.5x" aria-hidden="true"></i>
                                        <i className="fa fa-medium fa-1.5x"></i>
                                    </div>
                                    <p> 
                                        We power provide acces to investments in the field of renewable energy. This project already has a working beta.
                                        WPR token is the  company utility token clarified with European regulator.
                                        It is structured as a reward based cowdfunding, where contributors can get gree energy as
                                        a reward and they can either use it or sell on exchange.
                                    </p>
                                    <p> Due to well done legal work, we evaluate risks for investors as low.</p>
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <button id="singlebutton" name="singlebutton" className="btn btn-order">ORDER FULL LEGAL REVIEW</button>
                                    </div>
                                </div>
                                {User != null ?  <div className="col-md-12 content" >
                                {/* <!-- Nav tabs --> */}
                                <NavTabs user ={user} list={list} icoparam={icoparam} /> 
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <button id="singlebutton" name="singlebutton" className="btn btn-order" data-toggle="modal" data-target="#rateModal">Rate Here..</button>  
                                </div> 
                                    <Modal modalParam = {icoparam}/>
                                </div> : 
                                <div className="col-md-12 content" >
                                    <div class="col-md-12 iconButtonDiv social-buttons">
                                        <h2 id="h3Text">Rate and Review</h2>
                                        <button type="button" class="btn btn-facebook" onClick={this.facebook}>
                                            <i class="fa fa-facebook-square  fa-1x"></i>
                                            CONTINUE WITH FACEBOOK</button>
                                        <button type="button" class="btn btn-google" onClick={this.google}>
                                            <i class="fa fa-google fa-1x"></i>
                                            CONTINUE WITH GOOGLE</button>
                                        <button type="button" class="btn btn-twitter" onClick={this.twitter}>
                                            <i class="fa fa-twitter fa-1x"></i>
                                            CONTINUE WITH EMIAL</button>
                                        <button type="button" class="btn btn-lightBlue" data-toggle="modal" data-target="#myModal">
                                            <i class="fa fa-envelope fa-1x"></i>
                                            CONTINUE WITH EMIAL</button>
                                    </div>
                                </div> }
                            </div>                     
                        </div>
                    </div>
                </section>
                {/* <!-- DESCRIPTION ENDS --> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    listState: state.RateReducer.getrate,
    userState: state.AuthReducer.profile,
    userLogin: state.AuthReducer.loggedIn


      };
    }
  
const  mapDispatchToProps = (dispatch) => {
    return {
        facebook: data => {dispatch(MiddleWare.LoginFacebook(data))},
        twitter: data => {dispatch(MiddleWare.LoginTwitter(data))},
        google: data => {dispatch(MiddleWare.LoginGoogle(data))},
        userData: (data) => dispatch(MiddleWare.LoginRequest(data)),
        getList: () => {
        dispatch(MiddleWare.GetRating());
        },
        getUserList: () => {
            dispatch(MiddleWare.UserProfile());
        }
    }
};
    

export default connect(mapStateToProps,mapDispatchToProps)( Description)

class NavTabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: 'a',
        };
      }
    
      handleChange = (value) => {
        this.setState({
          value: value,
        });
      };

    render(){
        let icoparam = this.props.icoparam;
        let user = this.props.user;
        let list = this.props.list
        return(
            <div>
                    <Tabs className="nav-tab"
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <Tab label="Positive" value="a" >
                               {list.map((x,y)=> {
                                    const concept = x.Concept
                                    const team = x.Team
                                    const white = x.Whitepaper
                                    const rate_percent = (team + concept + white) / 100 * 15
                                    let out_of_five = rate_percent/100*5
                                    out_of_five = Math.round( out_of_five * 10 ) / 10
                                
                                    return user.map((m,v) => {
                                        if (x.uid === m.uid && x.icoName === icoparam){                                              
                                            return(
                                                <div key={v} style={{marginTop: '20px'}}>
                                                    {out_of_five <= 5  && out_of_five  >= 4 ? 
                                                    <div>
                                                        <div className="col-md-7 col-sm-8 jasmine-color">
                                                        <div className="col-md-2 col-sm-2" >
                                                            <img src={jasmine} alt="logo" />
                                                            </div>
                                                            {/* POSITIVE */}
                                                            <p style={{marginTop: '20px',marginLeft: '80px'}} >{m.name}</p>
                                                            <p style={{marginLeft: '80px'}} >{x.comment}</p>
                                                        </div>
                                                        <div className="col-md-2 col-sm-2 right" >
                                                            <span className="label label-default" style={{marginLeft: '-14px', marginTop: '20px'}}>
                                                                {out_of_five}
                                                            </span> 
                                                            <i className="fa fa-caret-up" aria-hidden="true" style={{ marginTop: '-30px',paddingLeft: "15px", color:'#37A1B4'}} />                                                                  
                                                        </div>
                                                    </div> : null}
                                                </div>
                                            )   
                                    
                                        }})
                                })}
                            
                        </Tab>
                        <Tab label="Neutral" value="b">
                            <div>
                                {list.map((x,y)=> {
                                    const concept = x.Concept
                                    const team = x.Team
                                    const white = x.Whitepaper
                                    const rate_percent = (team + concept + white) / 100 * 15
                                    let out_of_five = rate_percent/100*5
                                    out_of_five = Math.round( out_of_five * 10 ) / 10
                                
                                    return user.map((m,v) => {
                                        if (x.uid === m.uid && x.icoName === icoparam){                                              
                                            return(
                                                <div key={v} style={{marginTop: '20px'}}>
                                                         {out_of_five < 4 && out_of_five >= 2 ?  <div >
                                                        <div className="col-md-2 col-sm-2" >
                                                            <img src={jasmine} alt="logo" />
                                                        </div>
                                                        <div className="col-md-8 col-sm-8 jasmine-color">
                                                            {/* NEUTRAL */}
                                                            <p style={{marginTop: '20px',marginLeft: '80px'}} >{m.name}</p>
                                                            <p style={{marginLeft: '80px'}} >{x.comment}</p>
                                                        </div>
                                                        <div className="col-md-2 col-sm-2 right" >
                                                        <span className="label label-default" style={{marginLeft: '-14px', marginTop: '20px'}}>
                                                                {out_of_five}
                                                            </span> 
                                                            <i className="fa fa-caret-up" aria-hidden="true" style={{ marginTop: '-30px',paddingLeft: "15px", color:'#37A1B4'}} />                                                                  
                                                        </div>
                                                    </div> : null}
                                                </div>
                                            )   
                                    
                                        }})
                                })}
                            </div>
                        </Tab>
                        <Tab label="Negative" value="c">
                            <div>
                                {list.map((x,y)=> {
                                    const concept = x.Concept
                                    const team = x.Team
                                    const white = x.Whitepaper
                                    const rate_percent = (team + concept + white) / 100 * 15
                                    let out_of_five = rate_percent/100*5
                                    out_of_five = Math.round( out_of_five * 10 ) / 10
                                
                                    return user.map((m,v) => {
                                        if (x.uid === m.uid && x.icoName === icoparam){                                              
                                            return(
                                                <div key={v} style={{marginTop: '20px'}}>
                                                         {out_of_five < 2 ?  <div>
                                                        <div className="col-md-2 col-sm-2" >
                                                            <img src={jasmine} alt="logo" />
                                                        </div>
                                                        <div className="col-md-8 col-sm-8 jasmine-color">
                                                            {/* NEGATIVE */}
                                                            <p style={{marginTop: '20px',marginLeft: '80px'}} >{m.name}</p>
                                                            <p style={{marginLeft: '80px'}} >{x.comment}</p>
                                                        </div>
                                                        <div className="col-md-2 col-sm-2 right" >
                                                            <span className="label label-default" style={{marginLeft: '-14px', marginTop: '20px'}}>
                                                                {out_of_five}
                                                            </span> 
                                                            <i className="fa fa-caret-up" aria-hidden="true" style={{ marginTop: '-30px',paddingLeft: "15px", color:'#37A1B4'}} />                                                                  
                                                        </div>
                                                    </div> : null}
                                                </div>
                                            )   
                                    
                                        }})
                                })}
                            </div>
                        </Tab>
                        </Tabs>
                   
            </div>

        );
    }
}


class Modal extends React.Component{
    
    render(){
        let modal = this.props.modalParam
        {console.log('modal',modal)}
      return(
        // <!-- Modal -->
  <div class="modal fade" id="rateModal" role="dialog">
    <div class="modal-dialog">
    
      {/* <!-- Modal content--> */}
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h3 class="modal-title">Rating & Feedback</h3>
        </div>
        <div class="modal-body">
            <Rating rateIcoName = {modal}/>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
      );
    }
  }
  

