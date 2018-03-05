import React, {Component} from 'react'

class VideoTable extends React.Component{
    render(){
        return(
            <div>
               <section id="video">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="col-md-8">
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <table class="table table-responsive">
                                        <thead>
                                        <tr>
                                            <th>Token</th>
                                            <th class="table-color">WPR</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Price</td>
                                            <td class="table-color">1 ETH-4000-4600 WPR</td>
                                        </tr>
                                        <tr>
                                            <td>Bounty</td>
                                            <td class="table-color">Available</td>
                                        </tr>
                                        <tr>
                                            <td>Platform</td>
                                            <td class="table-color">Ethereum</td>
                                        </tr>

                                        <tr>
                                            <td>Accepting</td>
                                            <td class="table-color">ETH</td>
                                        </tr>
                                        <tr>
                                            <td>Soft Cap</td>
                                            <td class="table-color">5,000,000 USD</td>
                                        </tr>
                                        <tr>
                                            <td>Raised</td>
                                            <td class="table-color">$3,000,000</td>
                                        </tr>
                                        <tr>
                                            <td>Country</td>
                                            <td class="table-color">Gibraltar</td>
                                        </tr>
                                        <tr>
                                            <td>Whitelist/KYC</td>
                                            <td class="table-color">KYC & Whitelist</td>
                                        </tr>
                                        <tr>
                                            <td>Restriced Area</td>
                                            <td class="table-color">USA</td>
                                        </tr>
                                        </tbody>
                                    </table>

                                    <button type="button" class="btn btn-green">MORE ON ICO</button>
                                    <button type="button" class="btn btn-default">Report</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        );
    }
}


export default VideoTable;