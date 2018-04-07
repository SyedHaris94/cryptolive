import React, {Component} from 'react'
import {Navbar, Footer} from '../index'

import ImageUpload from './imageupload'
import $ from 'jquery';
import ProfilePage from './profile'

// import images
import needhelp from '../../icons/need-help-icon.png'
import ganja from '../../icons/ganja.png'

import * as DB from "../../firebase/firebase";
import { toast } from 'react-toastify';

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

class Publish extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            // ischeck: true,
            isArt: false,
            isArtificial: false,
            isBanking: false,
            isBig: false,
            isBusiness: false,
            isCasino: false,
            isCharity: false,
            isCommunication: false,
            isCryptocurrency: false,
            isEducation: false,
            isElectronics: false,
            isEnergy: false,
            isEntertainment: false,
            isHealth: false,
            isInfrastructure: false,
            isInternet: false,
            isInvestment: false,
            isManufacturing: false,
            isMedia: false,
            isPlatform: false,
            isReal: false,
            isTourism: false,
            isLegal: false,
            isSmart: false,
            isSport: false,
            isSoftware: false,
            isVirtual: false,

            name: '',        
            website_url: '',
            description: '',
            about: '',
            social: '',
            country: '',
            ico_start_date: '',
            ico_end_date: '',
            link_to_white: '',  
            link_to_bounty: '',
            token_ticker: '',
            paltform: '',
            white_kyc: '',
            restriction: '', 
            email: '',
        };
        this.webChange = this.webChange.bind(this);
        this.socialChange = this.socialChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.aboutChange = this.aboutChange.bind(this);
        this.countryChange = this.countryChange.bind(this);
        this.ico_startChange = this.ico_startChange.bind(this);
        this.ico_endChange = this.ico_endChange.bind(this);
        this.link_whiteChange = this.link_whiteChange.bind(this);
        this.link_bountyChange = this.link_bountyChange.bind(this);
        this.link_to_icoChange = this.link_to_icoChange.bind(this);
        this.token_tickerChange = this.token_tickerChange.bind(this);
        this.paltformChange = this.paltformChange.bind(this);
        this.white_kycChange = this.white_kycChange.bind(this);
        this.restrictionChange = this.restrictionChange.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.IcoNameChange = this.IcoNameChange.bind(this);
        this.sendPublish = this.sendPublish.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }

    webChange(e) {
        this.setState({ website_url : e.target.value });
        }

    aboutChange(e) {
        this.setState({ about : e.target.value });
    }

    socialChange(e) {
        this.setState({ social : e.target.value });
    }

    descriptionChange(e) {
        this.setState({ description : e.target.value });
    }

    countryChange(e) {
        this.setState({ country : e.target.value });
        }

    ico_startChange(e) {
        this.setState({ ico_start_date : e.target.value });
        }

    ico_endChange(e) {
        this.setState({ ico_end_date : e.target.value });
        }

    link_whiteChange(e) {
        this.setState({ link_to_white : e.target.value });
        }

    link_bountyChange(e) {
        this.setState({ link_to_bounty : e.target.value });
        }

        
    link_to_icoChange(e) {
        this.setState({ link_to_ico : e.target.value });
        }

    token_tickerChange(e) {
        this.setState({ token_ticker : e.target.value });
        }

    paltformChange(e) {
        this.setState({ paltform : e.target.value });
        }

    white_kycChange(e){
        this.setState({ white_kyc : e.target.value });
        }

    IcoNameChange(e) {
        this.setState({ name : e.target.value });
        }
        
    restrictionChange(e){
        this.setState({ restriction : e.target.value });
        }

    emailChange(e) {
        this.setState({ email : e.target.value });
        }

        handleInputChange(event) {
            const target = event.target;
            const value = target.type === 'checkbox' ? target.checked : target.value;
            const name = target.name;
        
            this.setState({
              [name]: value
            });
          }
        
    sendPublish = (e) => {
        e.preventDefault();

        let publishico = {
            email: this.state.email,
            name: this.state.name,     
            description: this.state.description,   
            website_url: this.state.website_url,
            social: this.state.social,
            about: this.state.about,
            country: this.state.country,
            ico_start_date: this.state.ico_start_date,
            ico_end_date: this.state.ico_end_date,
            link_to_white: this.state.link_to_white,  
            link_to_ico: this.link_to_ico,
            link_to_bounty: this.state.link_to_bounty,
            token_ticker: this.state.token_ticker,
            paltform: this.state.paltform,
            white_kyc: this.state.white_kyc,
            restriction: this.state.restriction, 
            
            isArt: this.state.isArt,
            isArtificial: this.state.isArtificial,
            isBanking: this.state.isBanking,
            isBig: this.state.isBig,
            isBusiness: this.state.isBusiness,
            isCasino: this.state.isCasino,
            isCharity: this.state.isCharity,
            isCommunication: this.state.isCommunication,
            isCryptocurrency: this.state.isCryptocurrency,
            isEducation: this.state.isEducation,
            isElectronics: this.state.isElectronics,
            isEnergy: this.state.isEnergy,
            isEntertainment: this.state.isEntertainment,
            isHealth: this.state.isHealth,
            isInfrastructure: this.state.isInfrastructure,
            isInternet: this.state.isInternet,
            isInvestment: this.state.isInvestment,
            isManufacturing: this.state.isManufacturing,
            isMedia: this.state.isMedia,
            isPlatform: this.state.isPlatform,
            isReal: this.state.isReal,
            isTourism: this.state.isTourism,
            isLegal: this.state.isLegal,
            isSmart: this.state.isSmart,
            isSport: this.state.isSport,
            isSoftware: this.state.isSoftware,
            isVirtual: this.state.isVirtual,
        };
        
        this.setState({email: ""});
        this.setState({name: ""});
        this.setState({about: ""});
        this.setState({description: ""});
        this.setState({website_url: ""});
        this.setState({social: ""});
        this.setState({country: ""});
        this.setState({ico_start_date: ""});
        this.setState({ico_end_date: ""});
        this.setState({link_to_white: ""});
        this.setState({link_to_ico: ""});
        this.setState({link_to_bounty: ""});
        this.setState({token_ticker: ""});
        this.setState({paltform: ""});
        this.setState({white_kyc: ""});
        this.setState({restriction: ""});


        this.setState({isArt: false});
        this.setState({isArtificial: false});
        this.setState({isBanking: false});
        this.setState({isBig: false});
        this.setState({isBusiness: false});
        this.setState({isCasino: false});
        this.setState({isCharity: false});
        this.setState({isCommunication: false});
        this.setState({isCryptocurrency: false});
        this.setState({isEducation: false});
        this.setState({isElectronics: false});
        this.setState({isEnergy: false});
        this.setState({isEntertainment: false});
        this.setState({isHealth: false});
        this.setState({isInfrastructure: false});
        this.setState({isInternet: false});
        this.setState({isInvestment: false});
        this.setState({isManufacturing: false});
        this.setState({isMedia: false});
        this.setState({isPlatform: false});
        this.setState({isReal: false});
        this.setState({isTourism: false});
        this.setState({isLegal: false});
        this.setState({isSmart: false});
        this.setState({isSport: false});
        this.setState({isSoftware: false});
        this.setState({isVirtual: false});
       
    
        console.log('published', publishico)
        this.props.publishData(publishico)
        
    }

    nextPanel(pageNumber){
        console.log(pageNumber);
        const  User = DB.auth.currentUser;
        if (User != null) {
            if(pageNumber == 1){
                $('#profileLink')[0].click();
                $("#progress-bar").css("width", "66.66%");
            }
            else if(pageNumber == 2){
                $('#messagesLink')[0].click();
                $("#progress-bar").css("width", "100%");
            }
        }
        else{
            var errorMessage = "You Are not Logged In";
              toast.error(errorMessage, {
                position: toast.POSITION.TOP_CENTER
              });
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
                                            value={this.state.name}
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
                                                    <a href="#home" aria-controls="home" role="tab" id="homeLink" data-toggle="tab">ICO APPLICATION DETAIL</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#profile" aria-controls="profile" id="profileLink" role="tab" data-toggle="tab">ICO DETAIL</a>
                                                </li>
                                                <li role="presentation">
                                                    <a href="#messages" aria-controls="messages" id="messagesLink" role="tab" data-toggle="tab">ICO CATEGORY</a>
                                                </li>
                                            </ul>
                                    
                                            {/* <!-- Tab panels --> */}
                                            <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane active" id="home">
                                                    <div className="form-data">
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="name">WEBSITE URL</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.website_url}
                                                                onChange={this.webChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="lastname">ABOUT</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.about}
                                                                onChange={this.aboutChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">SOCIAL MEDIA LINKS</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.social}
                                                                onChange={this.socialChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">COUNTRY OF OPERATION</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.country}
                                                                onChange={this.countryChange}
                                                                required
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">(pre)ICO START DATE</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.ico_start_date}
                                                                onChange={this.ico_startChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">ICO END DATE</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.ico_end_date}
                                                                onChange={this.ico_endChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">LINK TO WHITEPAPER</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.link_to_white}
                                                                onChange={this.link_whiteChange}
                                                            />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">LINK TO ICO WATCHLIST</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.link_to_ico}
                                                                onChange={this.link_to_icoChange}
                                                            />
                                                        </div>
                                                        {/* <div className="col-md-12 ">
                                                            <input type="checkbox"
                                                                    style={{width: '30px', height: '20px'}}/>
                                                            <label>I PREFER EMAIL OVER PHONE CALLS</label>

                                                        </div> */}
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
                                                            <label htmlFor="name">LINK TO BOUNTY</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.link_to_bounty}
                                                                onChange={this.link_bountyChange}
                                                                />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="lastname">TOKEN NAME/TICKER</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.token_ticker}
                                                                onChange={this.token_tickerChange}
                                                                />
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">PLATFORM AND TOKEN TYPE (e.g. Ethereum, ERC20)</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.paltform}
                                                                onChange={this.paltformChange}/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">Whitelist/KYC?</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.white_kyc}
                                                                onChange={this.white_kycChange}/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail"> ANY RESTRICTIONS IN WHO CAN PARTICIPATE?</label>
                                                            <input 
                                                                type="name" 
                                                                className="form-control"
                                                                value={this.state.restriction}
                                                                onChange={this.restrictionChange}/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">Contact e-mail</label>
                                                            <input 
                                                                type="email" 
                                                                className="form-control"
                                                                value={this.state.email}
                                                                onChange={this.emailChange}/>
                                                        </div>
                                                        <div className="col-md-6 form">
                                                            <label htmlFor="inputEmail">DESCRIPTION</label>
                                                            <input 
                                                                type="email" 
                                                                className="form-control"
                                                                value={this.state.description}
                                                                onChange={this.descriptionChange}/>
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
                                                        <form>
                                                            <div className="col-md-4 form">
                                                                    <div class="checkbox">
                                                                    <label><input 
                                                                            name="isArt"
                                                                            type="checkbox" 
                                                                            checked={this.state.isArt}
                                                                            onChange={this.handleInputChange}
                                                                            value={this.state.isArt}/>Art</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                    <label><input 
                                                                            type="checkbox" 
                                                                            name="isArtificial"
                                                                            type="checkbox" 
                                                                            checked={this.state.isArtificial}
                                                                            onChange={this.handleInputChange}
                                                                            />Artificial Intelligence
                                                                    </label>
                                                                    </div>
                                                                    <div class="checkbox ">
                                                                    <label><input 
                                                                            type="checkbox" 
                                                                            name="isBanking"
                                                                            type="checkbox" 
                                                                            checked={this.state.isBanking}
                                                                            onChange={this.handleInputChange}/>Banking</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                    <label><input 
                                                                            type="checkbox" 
                                                                            name="isBig"
                                                                            type="checkbox" 
                                                                            checked={this.state.isBig}
                                                                            onChange={this.handleInputChange}/>Big Data</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                    <label><input 
                                                                            type="checkbox" 
                                                                            name="isBusiness"
                                                                            type="checkbox" 
                                                                            checked={this.state.isBusiness}
                                                                            onChange={this.handleInputChange}/>Business services</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                    <label><input 
                                                                            type="checkbox" 
                                                                            name="isCasinog"
                                                                            type="checkbox" 
                                                                            checked={this.state.isCasino}
                                                                            onChange={this.handleInputChange}/>Casino & Gambling</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                        <label><input 
                                                                            type="checkbox" 
                                                                            name="isManufacturing"
                                                                            type="checkbox" 
                                                                            checked={this.state.isManufacturing}
                                                                            onChange={this.handleInputChange}/>Manufacturing</label>
                                                                        </div>
                                                                    <div class="checkbox">
                                                                        <label><input 
                                                                            type="checkbox" 
                                                                            name="isMedia"
                                                                            type="checkbox" 
                                                                            checked={this.state.isMedia}
                                                                            onChange={this.handleInputChange}/>Media</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                        <label><input 
                                                                            type="checkbox" 
                                                                            name="isSport"
                                                                            type="checkbox" 
                                                                            checked={this.state.isSport}
                                                                            onChange={this.handleInputChange}
                                                                        />Sports</label>
                                                                    </div>
                                                            </div>
                                                            <div className="col-md-4 form">
                                                                <div class="checkbox">
                                                                    <label><input 
                                                                            type="checkbox" 
                                                                            name="isCharity"
                                                                            type="checkbox" 
                                                                            checked={this.state.isCharity}
                                                                            onChange={this.handleInputChange}/>Charity</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                    <label><input 
                                                                            type="checkbox" 
                                                                            name="isCommunication"
                                                                            type="checkbox" 
                                                                            checked={this.state.isCommunication}
                                                                            onChange={this.handleInputChange}/>Communication</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                    <label><input type="checkbox" 
                                                                            name="isCryptocurrency"
                                                                            type="checkbox" 
                                                                            checked={this.state.isCryptocurrency}
                                                                            onChange={this.handleInputChange}/>Cryptocurrency</label>
                                                                </div>
                                                                <div class="checkbox">
                                                                    <label><input type="checkbox" 
                                                                            name="isEducation"
                                                                            type="checkbox" 
                                                                            checked={this.state.isEducation}
                                                                            onChange={this.handleInputChange}/>Education</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                    <label><input type="checkbox" 
                                                                            name="isElectronics"
                                                                            type="checkbox" 
                                                                            checked={this.state.isElectronics}
                                                                            onChange={this.handleInputChange}/>Electronics</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                    <label><input type="checkbox" 
                                                                            name="isEnergy"
                                                                            type="checkbox" 
                                                                            checked={this.state.isEnergy}
                                                                            onChange={this.handleInputChange}/>Energy</label>
                                                                    </div>
                                                                <div class="checkbox">
                                                                        <label><input type="checkbox" 
                                                                            name="isPlatform"
                                                                            type="checkbox" 
                                                                            checked={this.state.isPlatform}
                                                                            onChange={this.handleInputChange}/>Platform</label>
                                                                        </div>
                                                                        <div class="checkbox">
                                                                        <label><input type="checkbox" 
                                                                            name="isReal"
                                                                            type="checkbox" 
                                                                            checked={this.state.isReal}
                                                                            onChange={this.handleInputChange}/>Real estate</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                        <label><input type="checkbox" 
                                                                            name="isTourism"
                                                                            type="checkbox" 
                                                                            checked={this.state.isTourism}
                                                                            onChange={this.handleInputChange}/>Tourism</label>
                                                                    </div>
                                                            </div>
                                                            <div className="col-md-4 form">
                                                                <div class="checkbox">
                                                                        <label><input type="checkbox" 
                                                                            name="isEntertainment"
                                                                            type="checkbox" 
                                                                            checked={this.state.isEntertainment}
                                                                            onChange={this.handleInputChange}/>Entertainment</label>
                                                                        </div>
                                                                        <div class="checkbox">
                                                                        <label><input type="checkbox" 
                                                                            name="isHealth"
                                                                            type="checkbox" 
                                                                            checked={this.state.isHealth}
                                                                            onChange={this.handleInputChange}/>Health</label>
                                                                        </div>
                                                                        <div class="checkbox">
                                                                        <label><input type="checkbox" 
                                                                            name="isInfrastructure"
                                                                            type="checkbox" 
                                                                            checked={this.state.isInfrastructure}
                                                                            onChange={this.handleInputChange}/>Infrastructure</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                        <label><input type="checkbox" 
                                                                            name="isInternet"
                                                                            type="checkbox" 
                                                                            checked={this.state.isInternet}
                                                                            onChange={this.handleInputChange}/>Internet</label>
                                                                        </div>
                                                                        <div class="checkbox">
                                                                        <label><input type="checkbox" 
                                                                            name="isInvestment"
                                                                            type="checkbox" 
                                                                            checked={this.state.isInvestment}
                                                                            onChange={this.handleInputChange}/>Investment</label>
                                                                        </div>
                                                                        <div class="checkbox">
                                                                        <label><input type="checkbox" 
                                                                            name="isLegal"
                                                                            type="checkbox" 
                                                                            checked={this.state.isLegal}
                                                                            onChange={this.handleInputChange}/>Legal</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                        <label><input type="checkbox" 
                                                                            name="isSmart"
                                                                            type="checkbox" 
                                                                            checked={this.state.isSmart}
                                                                            onChange={this.handleInputChange}/>Smart Contract</label>
                                                                        </div>
                                                                        <div class="checkbox">
                                                                        <label><input type="checkbox" 
                                                                            name="isSoftware"
                                                                            type="checkbox" 
                                                                            checked={this.state.isSoftware}
                                                                            onChange={this.handleInputChange}/>Software</label>
                                                                    </div>
                                                                    <div class="checkbox">
                                                                        <label><input type="checkbox" 
                                                                            name="isVirtual"
                                                                            type="checkbox" 
                                                                            checked={this.state.isVirtual}
                                                                            onChange={this.handleInputChange}/>Virtual Reality</label>
                                                                    </div>
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
                                                                            <a style={{color: '#4db6ac', marginLeft: '1px'}}>cryptolive
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
                                                        </form>
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