import React, {Component} from 'react'
import {Navbar, Footer} from '../index'

import ImageUpload from './imageupload'
import $ from 'jquery';
import ProfilePage from './profile'

// import images
import needhelp from '../../icons/need-help-icon.png'
import ganja from '../../icons/ganja.png'

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

class Publish extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            email: '',
            confirm_email: '',
            firstName: '',
            lastName: '',
            contact_num: 0,
            ph_num: 0,   
            ico_name: '',        
        };
        this.FirstNameChange = this.FirstNameChange.bind(this);
        this.LastNameChange = this.LastNameChange.bind(this);
        this.EmailChange = this.EmailChange.bind(this);
        this.ConfirmEmailChange = this.ConfirmEmailChange.bind(this);
        this.ContactChange = this.ContactChange.bind(this);
        this.PhoneChange = this.PhoneChange.bind(this);
        this.IcoNameChange = this.IcoNameChange.bind(this);
        this.sendPublish = this.sendPublish.bind(this);
    }

    FirstNameChange(e) {
        this.setState({ firstName : e.target.value });
        }

    LastNameChange(e) {
        this.setState({ lastName : e.target.value });
        }

    EmailChange(e) {
        this.setState({ email : e.target.value });
        }

    ConfirmEmailChange(e) {
        this.setState({ confirm_email : e.target.value });
        }

    ContactChange(e) {
        this.setState({ contact_num : e.target.value });
        }

    PhoneChange(e) {
        this.setState({ ph_num : e.target.value });
        }

    IcoNameChange(e) {
        this.setState({ ico_name : e.target.value });
        }
        
    sendPublish = (e) => {
        e.preventDefault();

        let publishico = {
            email: this.state.email,
            confirm_email: this.state.confirm_email,
            name: this.state.firstName + this.state.lastName,
            contact_num: this.state.contact_num,
            ph_num: this.state.ph_num,
            ico_name: this.state.ico_name

        };
        
        this.setState({email: ""});
        this.setState({confirm_email: ""});
        this.setState({firstName: ""});
        this.setState({lastName: ""});
        this.setState({contact_num: ""});
        this.setState({ph_num: ""});
        this.setState({ico_name: ""});
    
        console.log('published', publishico)
        this.props.publishData(publishico)
        
    }

    nextPanel(pageNumber){
        console.log(pageNumber);
        if(pageNumber == 1){
            $('#profileLink')[0].click();
            $("#progress-bar").css("width", "66.66%");
        }
        else if(pageNumber == 2){
            $('#messagesLink')[0].click();
            $("#progress-bar").css("width", "100%");
        }
    }

    previousPanel(pageNumber){
        if(pageNumber == 3){
            $('#profileLink')[0].click();
            $("#progress-bar").css("width", "66.66%");
        }
        else if(pageNumber == 2){
            $('#homeLink')[0].click();
            $("#progress-bar").css("width", "33.33%");
        }
    }


    render(){
        return(
            <div>
                <Navbar/>
                {/* <!-- PUBLISH STARTS --> */}
                <section id="publish">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="row">
                                    <div className="col-md-12 left-sidebar-logo">
                                        <h5>LOGO FOR ICO</h5>
                                        <ImageUpload/>
                                        {/* <img src={ganja} style={{width: '80px'}} className="img-responsive img-circle center-block" alt="" /> */}
                                        <label>ICO Name</label>
                                        <input 
                                            type="name" 
                                            className="form-control input"
                                            value={this.state.ico_name}
                                            onChange={this.IcoNameChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-12 left-sidebar-need-help" align="center" >
                                        <div className="col-md-12">
                                            <img src={needhelp} style={{width: '30%', height:'100%'}} alt="" />
                                        </div>                                  
                                        <div className="col-md-12" align="center">
                                            <h4>NEED HELP?</h4>
                                            <p align="center">Have question or concerns regrading your ICO application? Our expert are here to help</p>
                                            <button type="button" className="btn1">CHAT WITH US</button>
                                        </div>
                                    </div>
                                </div>
                            </div>                           
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-12 right-content">                   
                                        <div className="col-md-12">
                                            <div className="row">
                                                <h4>VERIFY YOUR PERSONAL DETAILS</h4>
                                                <div className="col-md-7">
                                                    <p>Lorem ipsum dolor sit amet, consertetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore et
                                                        dolore magna aliqua.
                                                    </p>
                                                </div>                                               
                                                <div className="col-md-5">
                                                    <p>
                                                        <span className="bold">Estimated approval:</span> January 27(3 day left)
                                                    </p>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="progress">
                                                        <div className="progress-bar" id="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:'33.33%'}}>
                                                            <span className="sr-only">70% Complete</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 right-form">
                                        <div className="col-md-12">
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li role="presentation" className="active">
                                                    <a href="#home" aria-controls="home" role="tab" id="homeLink" data-toggle="tab">PERSONAL DETAIL</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#profile" aria-controls="profile" id="profileLink" role="tab" data-toggle="tab">ICO APPLICATIO DETAIL</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#messages" aria-controls="messages" id="messagesLink" role="tab" data-toggle="tab">ICO DETAIL</a>
                                                </li>
                                            </ul>
                                    
                                            {/* <!-- Tab panels --> */}
                                            <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane active" id="home">
                                                    <div className="form-data">
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="name">FIRST NAME</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.firstName}
                                                                onChange={this.FirstNameChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="lastname">LAST NAME</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.lastName}
                                                                onChange={this.LastNameChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">EMAIL</label>
                                                            <input 
                                                                type="email" 
                                                                className="form-control"
                                                                value={this.state.email}
                                                                onChange={this.EmailChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">CONFIRM
                                                                EMAIL</label>
                                                            <input 
                                                                type="email" 
                                                                className="form-control"
                                                                value={this.state.confirm_email}
                                                                onChange={this.ConfirmEmailChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail"> PHONE
                                                                NUMBER</label>
                                                            <input 
                                                                type="number" 
                                                                className="form-control"
                                                                value={this.state.ph_num}
                                                                onChange={this.PhoneChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">MOBILE
                                                                NUMBER</label>
                                                            <input 
                                                                type="number" 
                                                                className="form-control"
                                                                value={this.state.contact_num}
                                                                onChange={this.ContactChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-12 ">
                                                            <input type="checkbox"
                                                                    style={{width: '30px', height: '20px'}}/>
                                                            <label>I PREFER EMAIL OVER PHONE CALLS</label>

                                                        </div>
                                                        <div className="col-md-12">
                                                            <p>By clicking "Next" I agree to be contaicted
                                                                at the number provided with more information
                                                                or offers about cryptolive.
                                                                I understand these calls or texts may use
                                                                computer-assisted dailing or
                                                                pre-recorded</p>

                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="row">

                                                                <div className="col-md-2 col-xs-6">

                                                                </div>
                                                                <div className="col-md-7 disclaimer-form"
                                                                        align="right">
                                                                    <p>By Submitting this application you
                                                                        agree to
                                                                        <a style={{color: '#4db6ac'}}>cryptolive
                                                                            T&C</a>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-2 col-xs-6"
                                                                        align="right">
                                                                    <button type="button"
                                                                            className="btn btn-primary" onClick={ ()=>this.nextPanel(1)}>NEXT
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="profile">
                                                    <div className="form-data">
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="name">FIRST NAME</label>
                                                            <input type="name" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="lastname">LAST NAME</label>
                                                            <input type="name" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">EMAIL</label>
                                                            <input type="email" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">CONFIRM
                                                                EMAIL</label>
                                                            <input type="email" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail"> PHONE
                                                                NUMBER</label>
                                                            <input type="number" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">MOBILE
                                                                NUMBER</label>
                                                            <input type="number" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-12 ">
                                                            <input type="checkbox"
                                                                    style={{width: '30px', height: '20px'}}/>
                                                            <label>I PREFER EMAIL OVER PHONE CALLS</label>

                                                        </div>
                                                        <div className="col-md-12">
                                                            <p>By clicking "Next" I agree to be contaicted
                                                                at the number provided with more information
                                                                or offers about cryptolive.
                                                                I understand these calls or texts may use
                                                                computer-assisted dailing or
                                                                pre-recorded</p>

                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="row">

                                                                <div className="col-md-2 col-xs-6">
                                                                    <button type="button"
                                                                            className="btn btn-default" onClick={()=>this.previousPanel(2)}>PREVIOUS
                                                                    </button>
                                                                </div>
                                                                <div className="col-md-7 disclaimer-form"
                                                                        align="right">
                                                                    <p>By Submitting this application you
                                                                        agree to
                                                                        <a style={{color: '#4db6ac'}}>cryptolive
                                                                            T&C</a>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-2 col-xs-6"
                                                                        align="right">
                                                                    <button type="button"
                                                                            className="btn btn-primary" onClick={()=>this.nextPanel(2)}>NEXT
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="messages">

                                                    <div className="form-data">
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="name">FIRST NAME</label>
                                                            <input type="name" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="lastname">LAST NAME</label>
                                                            <input type="name" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">EMAIL</label>
                                                            <input type="email" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">CONFIRM
                                                                EMAIL</label>
                                                            <input type="email" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail"> PHONE
                                                                NUMBER</label>
                                                            <input type="number" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">MOBILE
                                                                NUMBER</label>
                                                            <input type="number" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-12 ">
                                                            <input type="checkbox"
                                                                    style={{width: '30px', height: '20px'}}/>
                                                            <label>I PREFER EMAIL OVER PHONE CALLS</label>

                                                        </div>
                                                        <div className="col-md-12">
                                                            <p>By clicking "Next" I agree to be contaicted
                                                                at the number provided with more information
                                                                or offers about cryptolive.
                                                                I understand these calls or texts may use
                                                                computer-assisted dailing or
                                                                pre-recorded</p>

                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="row">

                                                                <div className="col-md-2 col-xs-6">
                                                                    <button type="button"
                                                                            className="btn btn-default" onClick={()=>this.previousPanel(3)}>PREVIOUS
                                                                    </button>
                                                                </div>
                                                                <div className="col-md-7 disclaimer-form"
                                                                        align="right">
                                                                    <p>By Submitting this application you
                                                                        agree to
                                                                        <a style={{color: '#4db6ac'}}>cryptolive
                                                                            T&C</a>
                                                                    </p>
                                                                </div>
                                                                <div className="col-md-2 col-xs-6"
                                                                        align="right">
                                                                    <button type="button"
                                                                            className="btn btn-primary" onClick={this.sendPublish}>FINISH
                                                                    </button>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>                                   
                                            </div>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </section>
                {/* <!-- PUBLISH ENDS --> */}
                <Footer/>
            </div>
             );
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        publishData: publish_ico => {dispatch(MiddleWare.sendPublishICO(publish_ico))},
    })
}

const mapStateToProps = (state) => {
    return ({
         publish: state.PublishReducer.ico_publish
    })
}


export default connect(mapStateToProps,mapDispatchToProps)(Publish);