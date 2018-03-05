import React, {Component} from 'react'

import {Navbar, Footer, LeftColBrowse,IcoListingItem}  from '../index'

class BrowseICO extends React.Component{
    render(){
        return(
            <div>
                    <Navbar/>
                    <section id="browse-ico">
                        <div className="container">
                            <div className="row">
                                <p>BROWSE ICOs</p>
                                    <div className="col-md-3 left-col">
                                        <div className="row">
                                           <LeftColBrowse/>
                                        </div>
                                    </div>
                                    <div className="col-md-9 right-col">
                                        <section id="ico-listing-item"  style={{marginTop: '-40px'}}>
                                            <ul className="list-inline" style={{marginBottom: '-10px'}}>
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
                                                <IcoListingItem/>
                                           
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

export default BrowseICO;