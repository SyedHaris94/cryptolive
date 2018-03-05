import React, {Component} from 'react'


import {IcoListingItem} from '../index'

// import images
import crypto from '../../img/cryto.png'
import business from '../../img/business.png'
import invest from '../../img/dolar.png'
import software from '../../img/software.png'
import entertainment from '../../img/enter.png'
import internet from '../../img/Internet-icon.png'
import bank from '../../img/bank.png'
import infra from '../../img/infra.png'
import comm from '../../img/comm.png'
import retail from '../../img/retail.png'
import media from '../../img/Media-wmp-icon.png'
import casino from '../../img/casino.png'
import realstate from '../../img/tv.png'
import health from '../../img/heart-with-pulse.png'
import manufac from '../../img/manufac.png'
import tour from '../../img/111348-tourism-in-the-city.png'
import sports from '../../img/Sports-Tennis-icon.png'
import education from '../../img/educ.png'
import energy from '../../img/energy.png'



class RightIcoPanel extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- RIGHT ICO PANELS START --> */}
                <section id="ico-listing">

                    <div className="container">
                        <div className="row">

                            <div className="col-md-3" >

                                <h4>BROWSE ICOs</h4>
                                <table className="table table-responsive">

                                    <tbody>
                                        <tr>
                                            <td className="browse-td-bold">
                                                <i style={{paddingRight: '15px',marginLeft: '-20px',color: '#1DA0B4'}} className="fa fa-ellipsis-v" aria-hidden="true"></i> <i style={{paddingRight: '15px'}} className="fa fa-desktop" aria-hidden="true"></i> Platform(814)
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <img src={crypto} alt="" /> Cryptocurrency(544)
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={business} alt="" /> Business Services(370)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={invest} alt="" /> Invesment(261)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={software} alt="" /> Software(202)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={entertainment} alt="" /> Enternainment(117)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={internet}alt="" /> Internet(137)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={bank} alt="" /> Banking(132)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={infra} alt="" /> Infrastructure(104)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={comm} alt="" /> Communication(88)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={retail} alt="" /> Retail(88)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={media} alt="" /> Media(63)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={casino} alt="" /> Casino & Gambling(63)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={realstate} alt="" /> Real EState(57)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={health} alt="" /> Health(54)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={manufac} alt="" /> Manufacturing(40)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={tour} alt="" /> Tourism(37)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={sports} alt="" /> Sport(35)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={education} alt="" /> Education(29)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={energy} alt="" /> Energy(24)</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={comm} alt="" /> Other</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>

                            <IcoListingItem/>

                        </div>
                    </div>

                </section>
                {/* <!-- RIGHT ICO PANELS END --> */}

            </div>
        )
    }
}


export default RightIcoPanel;