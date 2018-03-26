import React, {Component} from 'react'

class VideoTable extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            icoData: [],
        };
    }

      rateData = () => {

        // const pageID = this.props.match.params.name;
        const url = 'https://api.icowatchlist.com/public/v1/';
        let count = 0;

        fetch(url).then( r => r.json())
          .then((marketData) => {
            const icodata = [];
            let marketData2 = this.props.livePram == 1 ? marketData.ico.live : marketData.ico.upcoming;
      
            for (let index in marketData2){
                icodata.push({
                  name: marketData2[index].name,
                  image: marketData2[index].image,
                  description: marketData2[index].description,
                  website_link: marketData2[index].website_link,
                  icowatchlist_url: marketData2[index].icowatchlist_url,
                  start_time: marketData2[index].start_time,
                  end_time: marketData2[index].end_time,

                  count: count
                });
                count++
            }
            
            this.setState({
                icoData: icodata,
            })
          })
          .catch((e) => {
            console.log(e);
          });
      }

    componentDidMount() {
        this.rateData();
        // {console.log('deadline',this.state.deadline)}

    }

    render(){
        let m = this.state.icoData;
        const nameParam = this.props.namePram;
        // const liveParam = this.props.livePram;

        function gotoUrl(api, url) {
            let test = {};
            m.map((m, v) => {                  
                if (nameParam == m.name) {
                    test.name = m.name;
                    test.image = m.image;
                    test.description = m.description;
                    test.website_link = m.website_link;
                    test.icowatchlist_url = m.icowatchlist_url;
                    test.start_time = m.start_time;
                    test.end_time = m.end_time;
                    test.timezone = m.timezone;
                }
            });
            return test;
        }

        let pageParam = gotoUrl(m, nameParam);
        // let date = pageParam.end_time
        return(
            <div>
               <section id="video">
               {console.log('web link', pageParam.website_link)}
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

                                    <button type="button" class="btn btn-green"><a href={pageParam.website_link} target="_blank">MORE ON ICO</a> </button>
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