import React, {Component} from 'react'

// import image
import medicalchain from '../../icons/medicalchain_logo_dark_cropped_og.png'
import medicalwhite from '../../icons/ICO view page.png'
import medicalblck from '../../icons/Screen Shot 2018-02-15 at 7.29.17 PM.png'

class IcoBrief extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- MEDICAL STARTS --> */}
                <section id="ico-stats-brief">
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row" style={{marginBottom: '50px'}}>
                                    <div className="col-md-3 col-xs-3" style={{paddingTop: '25px'}}>
                                        <img src={medicalchain} className="img-responsive" alt="ico-logo"/>
                                    </div>
                                    <div className="col-md-9 col-xs-9 medicalchain">
                                        <h3>Medicalchain <span className="premium-icon" style={{letterSpacing: '3px'}}>PREMIUM</span></h3>
                                        <p>Blockchain and smart contracts powered green energy trading platforms where everyone can trade and a live happy.</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-3 launch-card"><h3>15 <br /><span>Days</span></h3></div>
                                    <div className="col-md-3 launch-card"><h3>12 <br /><span>Hours</span></h3></div>
                                    <div className="col-md-3 launch-card"><h3>45 <br /><span>Minutes</span></h3></div>
                                    <div className="col-md-2 launch-card"><h3>02 <br /><span>Seconds</span></h3></div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <img className="img-responsive medical-img-wh" src={medicalwhite} alt="logo"/>
                                <img className="img-responsive medical-img-blck" src={medicalblck} alt="logo"/>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- MEDICAL ENDS --> */}
            </div>
        );
    }

}

export default IcoBrief;