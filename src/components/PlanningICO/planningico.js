import React, {Component} from 'react'

import {Link} from 'react-router-dom'

class PlanICO extends React.Component{

    render(){
        return(
            <div>
                  {/* <!-- planning ico starts --> */}
                <section id="planning-ico">
                    <div className="container">
                        <div className="row">

                            <div className="col-md12">
                                <h2>Planning an ICO?</h2>
                                <p>We can help With Wide Range of support of all ICO stages.</p>
                               <Link to = "/publish"> <button type="button" className="btn btn-green">LAUNCH ICO</button></Link>
                            </div>

                        </div>
                    </div>
                </section>
                {/* plan ico ends */}
            </div>
        );
    }

}


export default PlanICO;