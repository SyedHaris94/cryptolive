import React, {Component} from 'react'


class BottomCards extends React.Component{
    render(){
        return(
            <div>
                {/* <!--BOTTOM CARDS STARTS--> */}
                <section id="table-bottom-stats-cards">

                    <div className="container">
                        <div className="row">

                            <div className="col-md-offset-3 col-md-2 card-item">
                                <h4>COINS</h4>
                                <p>727</p>
                            </div>

                            <div className="col-md-2 card-item">
                                <h4>MARKETS</h4>
                                <p>2924</p>
                            </div>

                            <div className="col-md-2 card-item">
                                <h4>EXCHANGES</h4>
                                <p>47</p>
                            </div>

                        </div>
                    </div>

                </section>
                {/* <!--BOTTOM CARDS END--> */}

            </div>
        );
    }
}


export default BottomCards;