import React, {Component} from 'react'

class SocailIcon extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- ICO Social Starts --> */}
                <section id="ico-social">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 social">
                                <p><i className="fa fa-twitter fa-1.5x"></i> /Medicalchain</p>
                            </div>
                            <div className="col-md-2 social">
                                    <p><i className="fa fa-facebook"></i> /Medicalchain</p>
                                </div>
                            {/* <!-- <div className="col-md-2 social">
                                <p ><i className="fa fa-facebook fa-1.5x"></i> /Medicalchain</p>
                            </div> --> */}
                            <div className="col-md-2 social">
                                <p><i className="fa fa-github-alt fa-1.5x" ></i> /Medicalchain</p>
                            </div>
                            <div className="col-md-2 social">
                                <p><i className="fa fa-reddit-alien fa-1.5x"></i> /Medicalchain</p>
                            </div>
                            <div className="col-md-2 social">
                                <p><i className="fa fa-medium fa-1.5x"></i> /Medicalchain</p>
                            </div>
                            <div className="col-md-2 social">
                                <p><i className="fa fa-paper-plane fa-1.5x"></i> /Medicalchain</p>
                            </div>

                        </div>
                    </div>
                </section>
            {/* <!--ICO Social Ends  --> */}

            </div>
        );
    }
}

export default SocailIcon;