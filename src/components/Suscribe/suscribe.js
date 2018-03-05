import React, {Component} from 'react'


class Suscribe extends React.Component{
    render(){
        return(
            <div>
                 {/* <!--SUSCRIBE STARTS  --> */}

                <section id="subscribe">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-12" align="center">
                                <h4>Be the first to receive latest Medicalchain news, events and release updates.</h4>
                                <form className="form-inline">
                                    <div className="form-group">
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="example@gmail.com" />
                                        </div>
                                        <button type="submit" className="btn btn-green">SIGN UP</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--SUSCRIBE ENDS  --> */}
            </div>
        );
    }
}

export default Suscribe;