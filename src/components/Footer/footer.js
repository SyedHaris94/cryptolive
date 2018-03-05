import React, {Component} from 'react'


class Footer extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- FOOTER STARTS --> */}
                <section id="footer">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-4 left-col">
                                <h3 className="footer-logo">Cryptolive</h3>
                                <p className="footer-copyright">Cryptolive 2018 All Rights Reserved.</p>
                            </div>

                            <div className="col-md-4 centre-col">
                                <h3>GOT QUESTIONS? ASK ON OUR CHANNELS</h3>
                                <ul className="list-inline">
                                    <li>
                                        <i className="fa fa-twitter fa-2x footer-color" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-facebook fa-2x footer-color" aria-hidden="true"></i>
                                    </li>
                                    <li>
                                        <i className="fa fa-snapchat-square fa-2x footer-color" aria-hidden="true"></i>
                                    </li>

                                    <li>
                                        <i className="fa fa-slack fa-2x footer-color" aria-hidden="true"></i>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-4 right-col">
                                <h3>Privacy Policy</h3>
                                <p className="footer-terms">Terms and Conditions.</p>
                            </div>

                        </div>
                    </div>
                </section>
                {/* <!-- FOOTER ENDS --> */}
            </div>
        );
    }
}


export default Footer;