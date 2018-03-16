import React, {Component} from 'react'

// import images
import star from '../../icons/star.png'
import ganja from '../../icons/ganja.png'
import jasmine from '../../icons//jasmine.png'
import arrowupblue from '../../icons/arrow-up-blue.png'


import MiddleWare from "../../store//middleware/middleware";
import { connect } from "react-redux";

import {Rating} from '../index'



class Description extends React.Component{
  
    componentWillMount() {
        console.log("wilmount running");
        this.props.getList();
        this.props.getUserList();
    }
         
    render(){
        let icoparam = this.props.icoNameParam
        {console.log('asdasdger',icoparam)}        
        return(
            <div>
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
                                    <div className="col-md-12 content" >
                                        {/* <!-- Nav tabs --> */}
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li role="presentation" className="active">
                                                <a href="#home" aria-controls="home" role="tab" data-toggle="tab">POSITIVE <span className="label label-default" style={{backgroundColor: '#35A0B3'}}>4</span></a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">NEUTRAL <span className="label label-default" style={{backgroundColor: '#FAC728'}}>2</span></a>
                                            </li>
                                            <li role="presentation">
                                                <a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">NEGATIVE <span className="label label-default" style={{backgroundColor: '#d50026'}}>6</span></a>
                                            </li>
                                        </ul>
                                        
                                        {console.log("list", this.props.listState)}
                                        {console.log("user list", this.props.userState)}
                                        {/* {this.props.listState.map ? this.props.listState.map((m, v) => {
                                                    return <div className="col-lg-12 jasmine-content" key={v}>
                                                    {console.log('name', m.icoName)}
                                                      <div style={{paddingTop: '10px'}} className="col-md-2 col-sm-2" >
                                                          <img src={jasmine} alt="logo" />
                                                      </div>
                                                      <div className="col-md-8 col-sm-8 jasmine-color">
                                                          <p>Jasmine Jones</p>
                                                          <p> WePower provides access to  investments in the field of renewable energy.This project already
                                                              has a working beta.
                                                          </p>
                                                      </div>
                                                      <div  className="col-md-2 col-sm-2 right"><span className="label label-default" style={{marginLeft: '-14px'}}>4</span> <img src={arrowupblue} alt="logo"/></div>
                                                  </div>;
                                                }): 
                                                <div className="alert alert-danger searchNoResult">
                                                            Type the text and press <b>"Enter"</b> to add item.
                                                </div>
                                        } */}
                                         <div className="col-lg-12 jasmine-content">
                                            <div style={{paddingTop: '10px'}} className="col-md-2 col-sm-2" >
                                                <img src={jasmine} alt="logo" />
                                            </div>
                                            <div className="col-md-8 col-sm-8 jasmine-color">
                                                <p>Jasmine Jones</p>
                                                <p> WePower provides access to  investments in the field of renewable energy.This project already
                                                    has a working beta.
                                                </p>
                                            </div>
                                            <div  className="col-md-2 col-sm-2 right"><span className="label label-default" style={{marginLeft: '-14px'}}>4</span> <img src={arrowupblue} alt="logo"/></div>
                                        </div>
                                        {/*<div className="col-lg-12 jasmine-content">
                                            <div style={{paddingTop: '10px'}} className="col-md-2 col-sm-2" >
                                                <img src={jasmine} alt="logo" />
                                            </div>
                                            <div className="col-md-8 col-sm-8 jasmine-color">
                                                <p>Jasmine Jones</p>
                                                <p> WePower provides access to  investments in the field of renewable energy.This project already
                                                    has a working beta.
                                                </p>
                                            </div>
                                            <div  className="col-md-2 col-sm-2 right"><span className="label label-default" style={{marginLeft: '-14px'}}>4</span> <img src={arrowupblue} alt="logo"/></div>
                                        </div> */}
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                                <button id="singlebutton" name="singlebutton" className="btn btn-order" data-toggle="modal" data-target="#myModal">Rate Here..</button>
                                        </div>
                                          <Modal modalParam = {icoparam}/>
                                    </div>
                                </div>                     
                            </div>
                        </div>
                    </section>
                {/* <!-- DESCRIPTION ENDS --> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    listState: state.RateReducer.getrate,
    userState: state.AuthReducer.profile,

      };
    }
  
    
function mapDispatchToProps(dispatch) {
    return {
        getList: () => {
        dispatch(MiddleWare.GetRating());
        },
        getUserList: () => {
            dispatch(MiddleWare.UserProfile());
        }
    }
};
    

export default connect(mapStateToProps,mapDispatchToProps)( Description)


class Modal extends React.Component{
    
    render(){
        let modal = this.props.modalParam
        {console.log('modal',modal)}
      return(
        // <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
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
  