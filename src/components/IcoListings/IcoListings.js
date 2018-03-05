import React, {Component} from 'react'

// import icons
import Bitmap from '../../icons/Bitmap.png'
import medicalchain from '../../icons/medicalchain_logo_dark_cropped_og.png'
import gilgamesh from '../../icons/1_UoqEfkuFu5JbiHTxwNhqVw.png'
import nper from '../../icons/nper_token.png'
import coinloan from '../../icons/favicon.png'


class IcoListingItem extends React.Component{
    render(){
        return(
            <div>
                {/* ICO LISTING ITEMS STARTS */}
                <section id="ico-listing-item">

                    <a href="icoview.html">

                        <div className="col-md-9 ico-card">
                            <div className="row">

                                <div className="col-md-2 col-xs-3">
                                    <img src={Bitmap} alt="ico-icon"/>
                                </div>

                                <div className="col-md-10 col-xs-9">
                                    <h3>WePower <span className="trending-icon">TRENDING</span> <span className="premium-icon">PRIMARY</span></h3>
                                    <p className="rating-feedback">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-half-empty" aria-hidden="true"></i>
                                        4.5 average based on 67 experts rating
                                    </p>
                                    <p className="last-cont">Blockchain and smart contracts powered green energy trading platforms where everyone can trade and a live happy
                                        live forever,this coin,will change the world.</p>

                                </div>


                            </div>


                        </div>
                    </a>

                    <a href="icoview.html">

                        <div className="col-md-9 ico-card">
                            <div className="row">

                                <div className="col-md-2 col-xs-3">
                                    <img src={medicalchain} alt="ico-logo"/>
                                </div>

                                <div className="col-md-10 col-xs-9">
                                    <h3>Medicalchain <span className="trending-icon">TRENDING</span> <span className="premium-icon">PRIMARY</span></h3>
                                    <p className="rating-feedback">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                        2.7 average based on 82 experts rating
                                    </p>
                                    <p className="last-cont">Medicalchain is a decentralized platform that enables secure, fast and transparent exchange.Medicalchain is a decentralized
                                        platform that enables secure, fast and transparent exchange.</p>

                                </div>


                            </div>


                        </div>
                    </a>

                    <a href="icoview.html">

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
                    </a>

                    <div className="col-md-9">
                        <a href="browseICO.html">
                            <div className="row">
                                <button id="btn-block" type="button" className="btn btn-default btn-block">VIEW ALL</button>
                            </div>
                        </a>

                    </div>

                </section>
                {/* ICO LISTING ITEMS ENDS */}
            </div>
        );
    }
}

export default IcoListingItem;