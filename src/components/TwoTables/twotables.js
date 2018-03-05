import React, {Component} from 'react'

// react-router
import { Link } from "react-router-dom";

// Import images & Icons
import Bitmap from '../../icons/Bitmap.png'
import medicalchain from '../../icons/medicalchain_logo_dark_cropped_og.png'

class TwoTable extends React.Component{
    render(){
        return(
            <div>
                 {/* <!-- two-table section start --> */}
                <section id="two-tables">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-9 left-table table-responsive">
                                <h4>TRENDING</h4>

                                <Link to="/icoview"style={{ textDecoration: "none" }} >
                                    <table className="table" >
                                        <thead className="table-head">
                                            <tr >
                                                <th>Name</th>
                                                <th>ETA</th>
                                                <th>TEAM</th>
                                                <th>TECH</th>
                                                <th>STRUCT</th>
                                                <th>COMM</th>
                                                <th>HYPE</th>
                                                <th>POSITIVE</th>
                                                <th>NEUTRAL</th>
                                                <th>NEGATIVE</th>
                                                <th>OVERALL</th>
                                                <th>SOCIAL</th>
                                            </tr>
                                        </thead>
                                        <tbody align="center">
                                            <tr className="table-row">
                                                <td>
                                                        <div className="pull-left" style={{paddingTop: '2px'}}>
                                                            <img src={Bitmap} style={{width: '25px'}} alt="logo"/>
                                                        </div>
                                                        
                                                        <div className="pull-left" style={{width: '2%',paddingTop: '5px',paddingLeft: '10px'}}>
                                                            <p>WEPOWER</p>
                                                            </div>

                                                    {/* <!-- <img src="icons/Bitmap.png" alt="logo" className=" image-responsive table-img" >
                                                    <p className="col-md-offset-3 " style="padding-left: 10px;">WEPOWER</p> --> */}
                                                </td>
                                                <td className="red">8h</td>
                                                <td>8</td>
                                                <td>6</td>
                                                <td>8</td>
                                                <td>7</td>
                                                <td>6</td>
                                                <td>54</td>
                                                <td>32</td>
                                                <td>62</td>
                                                <td className="green">4.3</td>
                                                <td>
                                                    <i className="fa fa-facebook favicon-icons" aria-hidden="true"></i>
                                                    <i className="fa fa-twitter favicon-icons" aria-hidden="true"></i>
                                                    
                                                </td>
                                            </tr>
                    
                                            <tr className="table-row">
                                                <td style={{width: '15%'}}>
                                                        <div className="pull-left" style={{paddingTop: '2px'}}>
                                                            <img src={medicalchain} style={{width: '25px'}} alt="logo"/>
                                                        </div>
                                                        
                                                        <div className="pull-left" style={{width: '2%',paddingTop: '5px',paddingLeft: '5px'}}>
                                                            <p>MEDICALCHA</p>
                                                        </div>
                                                    
                                                    {/* <!-- <img src="icons/medicalchain_logo_dark_cropped_og.png" className="pull-left image-responsive table-img" alt="logo">
                                                    <p className="col-md-offset-3" style="padding-left: 5px">Medicalchain</p> --> */}
                                                </td>
                                                <td className="yellow">12d</td>
                                                <td>8</td>
                                                <td>6</td>
                                                <td>8</td>
                                                <td>7</td>
                                                <td>6</td>
                                                <td>54</td>
                                                <td>32</td>
                                                <td>62</td>
                                                <td className="green">4.4</td>
                                                <td>
                                                    <i className="fa fa-facebook favicon-icons" aria-hidden="true"></i>
                                                    <i className="fa fa-twitter favicon-icons" aria-hidden="true"></i>
                                                    
                                                </td>
                                            </tr>
                    
                                            <tr className="table-row">
                                                <td>
                                                    <div className="pull-left " style={{paddingTop: '2px'}}>
                                                        <img src={Bitmap} style={{width: '25px'}} alt="logo"/>
                                                    </div>
                                                    
                                                    <div className="pull-left" style={{width: '2%',paddingTop: '5px',paddingLeft: '10px'}}>
                                                        <p>POCKETINN</p>
                                                    </div>
                                                    {/* <!-- <img src="icons/Bitmap.png" className="pull-left image-responsive table-img" alt="logo"> -->
                                                    <!-- <p className="col-md-offset-3" style="padding-left: 5px">POCKETINN</p> --> */}
                                                </td>
                                                <td className="green">8h</td>
                                                <td>8</td>
                                                <td>6</td>
                                                <td>8</td>
                                                <td>7</td>
                                                <td>6</td>
                                                <td>54</td>
                                                <td>32</td>
                                                <td>62</td>
                                                <td className="yellow">4.0</td>
                                                <td>
                                                    <i className="fa fa-facebook favicon-icons" aria-hidden="true">
                                                    </i>
                                                    <i className="fa fa-twitter favicon-icons" aria-hidden="true"></i>
                                                </td>
                                            </tr>
                    
                                             <tr className="table-row">
                                                <td>
                                                    <div className="pull-left" style={{paddingTop: '2px'}}>
                                                        <img src={medicalchain} style={{width: '25px'}} alt="logo"/>
                                                    </div>
                                                    
                                                    <div className="pull-left" style={{width: '2%', paddingTop: '5px',paddingLeft: '10px'}}>
                                                        <p>GENIELICO</p>
                                                    </div>
                                                    {/* <!-- <img src="icons/medicalchain_logo_dark_cropped_og.png" className="pull-left image-responsive table-img" alt="logo">
                                                    <p className="col-md-offset-3" style="padding-left: 5px">GENIELICO</p> --> */}
                                                </td>
                                                <td className="green">8h</td>
                                                <td>8</td>
                                                <td>6</td>
                                                <td>8</td>
                                                <td>7</td>
                                                <td>6</td>
                                                <td>54</td>
                                                <td>32</td>
                                                <td>62</td>
                                                <td className="yellow">4.0</td>
                                                <td>
                                                    <i className="fa fa-facebook favicon-icons" aria-hidden="true">
                                                    </i>
                                                    <i className="fa fa-twitter favicon-icons" aria-hidden="true"></i>
                    
                                                </td>
                                            </tr>
                    
                                            <tr className="table-row">
                                                <td>
                                                    <div className="pull-left " style={{paddingTop: '2px'}}>
                                                        <img src={Bitmap} style={{width: '25px'}} alt="logo"/>
                                                    </div>
                                                    
                                                    <div className="pull-left" style={{width: '2%',paddingTop: '5px',paddingLeft: '10px'}}>
                                                        <p>BUBBLE</p>
                                                    </div>
                                                    {/* <!-- <img src="icons/Bitmap.png" className="pull-left image-responsive table-img" alt="logo">
                                                    <p className="col-md-offset-3" style="padding-left: 5px">BUBBLE</p> --> */}
                                                </td>
                                                <td className="green">8h</td>
                                                <td>8</td>
                                                <td>6</td>
                                                <td>8</td>
                                                <td>7</td>
                                                <td>6</td>
                                                <td>54</td>
                                                <td>32</td>
                                                <td>62</td>
                                                <td className="red">2.3</td>
                                                <td>
                                                    <i className="fa fa-facebook favicon-icons" aria-hidden="true">
                                                    </i>
                                                    <i className="fa fa-twitter favicon-icons" aria-hidden="true"></i>
                                                </td>
                                            </tr>
                    
                    
                                        </tbody>
                                    </table>
                                </Link>
                                <div className="row">
                                        <div className="col-md-12">
                                            <Link to="/browseico"style={{ textDecoration: "none" }} >
                                                <button type="button" className="btn btn-default btn-block table-button">VIEW ALL</button>
                                            </Link>
                                        </div>
                                    </div>

                               
                            </div>
                
                            <div className="col-md-3 right-table">
                                    <h4 className="grey-color">LAST MINUTE</h4>
                                    <Link to="/icoview"style={{ textDecoration: "none" }} >
                                        <table className="table">
                                            <thead align="center">
                                                <tr>
                                                    <th className="col-md-3">Name</th>
                                                    <th className="col-md-3">ETA</th>
                                                    <th className="col-md-3">OVERALL</th>
                                                    <th className="col-md-3">SOCIAL</th>
                                                </tr>
                                            </thead>
                                            <tbody align="center">
                                                <tr className="table-row">
                                                    <td>
                                                        <div className="pull-left " style={{paddingTop: '2px'}}>
                                                            <img src={Bitmap} style={{width: '25px'}} alt="logo"/>
                                                        </div>
                                                        
                                                        <div className="pull-left" style={{width: '2%', paddingTop: '5px', paddingLeft: '5px'}}>
                                                            <p>REMME</p>
                                                        </div>
                                                        {/* <!-- <img src="icons/Bitmap.png" className="pull-left image-responsive table-img" alt="logo">
                                                        <p className="col-md-offset-3" style="padding-left: 5px">REMME</p> --> */}
                                                    </td>
                                                    <td className="table-red">10m</td>
                                                    <td className="table-yellow">3.4</td>
                                                    <td>

                                                        <i className="fa fa-facebook favicon-icons" aria-hidden="true">
                                                        </i>
                                                        <i className="fa fa-twitter favicon-icons" aria-hidden="true"></i>                                
                                                    </td>
                                                </tr>
                                                <tr className="table-row">
                                                    <td>
                                                        <div className="pull-left " style={{paddingTop: '2px'}}>
                                                            <img src={medicalchain} style={{width: '25px'}} alt="logo"/>
                                                        </div>
                                                        
                                                        <div className="pull-left" style={{width: '2%',paddingTop: '5px',paddingLeft: '5px'}}>
                                                            <p>NPER</p>
                                                        </div>
                                                        {/* <!-- <img src="icons/Bitmap.png" className="pull-left image-responsive table-img" alt="logo">
                                                        <p className="col-md-offset-3" style="padding-left: 5px">NPER</p> --> */}
                                                    </td>
                                                    <td className="table-red">25m</td>
                                                    <td className="table-blue">4.6</td>
                                                    <td>
                                                        <i className="fa fa-facebook favicon-icons" aria-hidden="true">
                                                        </i>
                                                        <i className="fa fa-twitter favicon-icons" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr className="table-row">
                                                    <td>
                                                        <div className="pull-left " style={{paddingTop: '2px'}}>
                                                            <img src={medicalchain} style={{width: '25px'}} alt="logo"/>
                                                        </div>
                                                        
                                                        <div className="pull-left" style={{width: '2%',paddingTop:' 5px',paddingLeft: '5px'}}>
                                                            <p>GIZER</p>
                                                        </div>
                                                        {/* <!-- <img src="icons/medicalchain_logo_dark_cropped_og.png" className="pull-left image-responsive table-img" alt="logo">
                                                        <p className="col-md-offset-3" style="padding-left: 5px">GIZER</p> --> */}
                                                    </td>
                                                    <td className="table-red">1h</td>
                                                    <td className="table-blue">4.9</td>
                                                    <td>
                                                        <i className="fa fa-facebook favicon-icons" aria-hidden="true">
                                                        </i>
                                                        <i className="fa fa-twitter favicon-icons" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr className="table-row">
                                                    <td>
                                                        <div className="pull-left " style={{paddingTop: '2px'}}>
                                                            <img src={Bitmap} style={{width: '25px'}} alt="logo"/>
                                                        </div>
                                                        
                                                        <div className="pull-left" style={{width: '2%',paddingTop: '5px',paddingLeft: '2px'}}>
                                                            <p>SCORUM</p>
                                                        </div>
                                                        {/* <!-- <img src="icons/Bitmap.png" className="pull-left image-responsive table-img" alt="logo">
                                                        <p className="col-md-offset-3" style="padding-left: 5px">SCORUM</p> --> */}
                                                    </td>
                                                    <td className="table-red">2h</td>
                                                    <td className="table-red">2.8</td>
                                                    <td>
                                                        <i className="fa fa-facebook favicon-icons" aria-hidden="true">
                                                        </i>
                                                        <i className="fa fa-twitter favicon-icons" aria-hidden="true"></i>
                                                    </td>
                                                </tr>
                                                <tr className="table-row">
                                                    <td>
                                                        <div className="pull-left " style={{paddingTop: '2px'}}>
                                                            <img src={medicalchain} style={{width: '25px'}} alt="logo"/>
                                                        </div>
                                                        
                                                        <div className="pull-left" style={{width: '2%',paddingTop: '5px',paddingLeft: '5px'}}>
                                                            <p>SAPIEN</p>
                                                        </div>
                                                        {/* <!-- <img src="icons/medicalchain_logo_dark_cropped_og.png" className="pull-left image-responsive table-img" alt="logo">
                                                        <p className="col-md-offset-3" style="padding-left: 5px">SAPIEN</p> --> */}
                                                    </td>
                                                    <td className="table-red">4h</td>
                                                    <td className="table-red">2.1</td>
                                                    <td>
                                                        <i className="fa fa-facebook favicon-icons" aria-hidden="true">
                                                        </i>
                                                        <i className="fa fa-twitter favicon-icons" aria-hidden="true"></i>
                                                    </td>
                                                </tr> 
                                            </tbody>
                                        </table>
                                    </Link>
                                <div className="row">
                                    <div className="col-md-12">
                                    <Link to="/browseico"style={{ textDecoration: "none" }} >
                                                <button type="button" className="btn btn-default btn-block table-button">VIEW ALL</button>
                                    </Link>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                
                    </div>
                </section>
                {/* <!--two- table section ends --> */}
            </div>
        );
    }
}


export default TwoTable;
