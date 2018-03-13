import React from 'react'
import {Navbar, Footer} from '../index.js'

// import images

import group7white from '../../icons/about-page/Group-7.png' 
import group7blck from '../../icons/Group-7.png' 
import group20white from '../../icons/about-page/Group 20.png' 
import group20blck from '../../icons/Group-20.png' 
import group16white from '../../icons/about-page/Group 16.png' 
import group16blck from '../../icons/Group 16.png' 


class About extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>

                    {/* <!-- CONTAINER STARTS --> */}
                    <section id="jumbo">
                        <div className="jumbotron">
                            <div className="container">
                            <h3> Invest Smarter With CoinMarketcap.</h3>

                            <h3> ICOs Ratings From Top Investors and Experts.
                            </h3>

                                <a className="btn btn-default" href="#" role="button">JOIN</a>

                                <a className="btn btn-default " href="#" role="button">EXPLORE </a>
                            </div>
                        </div>
                    </section>
                    {/* <!-- CONTAINER ENDS --> */}


                     {/* <!-- About starts--> */}
                    <section id="about">
                        <div className="container ">
                           
                            <div className="col-md-6 col-sm-12 col-xs-12 talk-about">
                                <h4>
                                    Talk About ICOs with like-minded people</h4>
                                <p className="main-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad, numquam, magnam nihil, necessitatibus
                                    minima fuga ab veniam harum animi doloribus sapiente recusandae illo eveniet in voluptatibus voluptate
                                    voluptatum deserunt?
                                </p>
                            </div>

                             <div className="col-md-6 col-sm-12 col-xs-12 talk-img" id="group-7" align="center">
                                <img src={group7white} className="white-img" alt="logo"/>
                                <img src={group7blck} className="black-img" alt="logo" style={{marginTop:'2rem'}} />
                            </div>

                        </div>

                    </section>
                    {/* <!--About ends --> */}

                    {/* <!-- Learn starts --> */}
                    <section id="learn-start">
                        <div className="container ">
                            <div className="col-md-6 col-sm-12 col-xs-12 ins-outs-img">
                                <img src={group20white} alt="logo" className="white-img"/>
                                <img src={group20blck} className="black-img" alt="logo"/>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12 pull-right ins-outs">
                                <h4>
                                    Learn the Ins and Outs of each ICO</h4>
                                <p className="main-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad, numquam, magnam nihil, necessitatibus
                                    minima fuga ab veniam harum animi doloribus sapiente recusandae illo eveniet in voluptatibus voluptate
                                    voluptatum deserunt?.
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Learn ends --> */}

                    {/* <!-- Ask Questions starts--> */}
                    <section id="ask">
                        <div className="container ">
                            <div className="col-md-6  col-sm-12 col-xs-12 pull-right">
                                <img src={group16white} alt="logo" className="white-img" />
                                <img src={group16blck} className="black-img" alt="logo" />
                                {/* <!-- <img src="icons/about-page/Group 16.png" alt="logo" style="width: 100%; height: 100%" className=""> --> */}
                            </div>
                            <div className="col-md-6  col-sm-12 col-xs-12 questions">
                                <h4>
                                    Ask your Questions to the community</h4>
                                <p className="main-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ad, numquam, magnam nihil, necessitatibus minima fuga ab
                                    veniam harum animi doloribus sapiente recusandae illo eveniet in voluptatibus voluptate voluptatum deserunt?.
                                </p>
                            </div>

                        </div>
                    </section>
                    {/* <!-- Ask Questions Ends --> */}

                    {/* <!-- Convinced Starts --> */}
                    <section id="convinced">
                        <div className="container ">
                            <div className="col-md-10">
                                <h4 style={{fontSize: '1.2em'}}>
                                    Are You convinced?</h4>
                                <p className="main-paragraph">Thousands of members are waiting for you!</p>
                            </div>
                            <div className="col-md-2">
                                <a className="btn btn-default" id="btn-convinced" href="#" role="button">SIGN UP</a>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Convinced Ends --> */}


                <Footer/>
            </div>
        );
    }
}

export default About;