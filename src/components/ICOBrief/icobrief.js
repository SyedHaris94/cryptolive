import React, {Component} from 'react'

// import image
// import medicalchain from '../../icons/medicalchain_logo_dark_cropped_og.png'
// import medicalwhite from '../../icons/ICO view page.png'
// import medicalblck from '../../icons/Screen Shot 2018-02-15 at 7.29.17 PM.png'

import MiddleWare from "../../store//middleware/middleware";
import { connect } from "react-redux";

import CircularProgressbar from 'react-circular-progressbar';


class IcoBrief extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            icoData: [],
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            deadline: '',
            fetchingData: true,
            data: [],
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


    componentWillMount() {
        this.getTimeUntil(this.state.deadline);
        this.props.getList();
    }
     
    componentDidMount() {
        this.rateData();
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
        // {console.log('deadline',this.state.deadline)}
        console.log("didmount running");       
}

    

    leading0(num) {
        return num < 10 ? '0' + num : num;
    }                                                                                                                                                                             
        
        getTimeUntil(deadline) {
            const time = Date.parse(deadline) - Date.parse(new Date());
    
            if(time < 0) {
                this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    
            } else {
                const seconds = Math.floor((time/1000)%60);
                const minutes = Math.floor((time/1000/60)%60);
                const hours = Math.floor((time/(1000*60*60))%24);
                const days = Math.floor(time/(1000*60*60*24));
    
                this.setState({ days, hours, minutes, seconds });
            }

            let m = this.state.icoData;
            const nameParam = this.props.namePram;
            const liveParam = this.props.livePram;      
            // {console.log('name icobrief', nameParam)}
            const gotoUrl = (api, url) => {
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
            this.setState({
                deadline: pageParam.end_time
            })
            
    }

    render(){
        let m = this.state.icoData;
        const nameParam = this.props.namePram;
        const liveParam = this.props.livePram;
        const rateParam = this.props.listState;
        console.log("ico_name", this.props.listState)


        function rateUrl(api, url) {
            let test = [];
            let count = 1

            api.map((m, v) => {    
                
                if (url == m.icoName) {
                    test.push({
                        icoName: m.icoName,
                        Concept: m.Concept,
                        Whitepaper: m.Whitepaper,
                        Team: m.Team ,
                        comment: m.comment,
                        uid: m.uid,
                        count: count++
                    })
                    // let Concept = test.Concept/ 5 * 100 
                    // let Team = test.Team / 5 * 100 
                    // let Whitepaper = test.Whitepaper / 5 * 100 
                    // let avrg = (Concept + Whitepaper + Team) / 100 * 15
                }
            });
            return test;
        }
        let pageParam = rateUrl(rateParam, nameParam);

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

        let icoParam = gotoUrl(m, nameParam);
        console.log('icoParam', icoParam)

        let date = pageParam.end_time

        let Count = pageParam.map(a => a.count);
        let count = Count.length;
        console.log('count',count);

        let Concept = pageParam.map(a => a.Concept);
        Concept = Concept.map(Number); 
        let sum_concept = Concept.reduce((a, b) => a + b, 0);
        let concept_rate = Math.round(sum_concept / (count * 5) * 100 )
        console.log('sum_concept', sum_concept)
        console.log('Concept', concept_rate)
       

        let Team = pageParam.map(a => a.Team);
        Team = Team.map(Number);
        let sum_team = Team.reduce((a, b) => a + b, 0);
        let team_rate = Math.round(sum_team / (count * 5) * 100 )
        console.log('sum_team', sum_team)
        console.log('team', team_rate)

        let White = pageParam.map(a => a.Whitepaper);
        White = White.map(Number);
        let white_sum = White.reduce((a, b) => a + b, 0);
        let white_rate = Math.round(white_sum / (count * 5) * 100 )
        console.log('sum_white', white_sum)
        console.log('white', white_rate)

        let total_rate = white_sum + sum_team + sum_concept
        let overall = Math.round(total_rate / (count * 15) * 100)
        
        console.log('overall', overall)

        
        return(
            <div>
                {/* <!-- MEDICAL STARTS --> */}
                <section id="ico-stats-brief">
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row" style={{marginBottom: '50px'}}>
                                    <div className="col-md-3 col-xs-3" style={{paddingTop: '25px'}}>
                                        <img src={icoParam.image}
                                        style={{width: '100%', height: '40%'}} className="pull-left"/>
                                    </div>
                                    <div className="col-md-9 col-xs-9 medicalchain">
                                        <h3>{icoParam.name} <span className="premium-icon" style={{letterSpacing: '3px'}}>PREMIUM</span></h3>
                                        <p>{icoParam.description}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 launch-card" ><h3>{this.leading0(this.state.days)} <br/><span>Days</span></h3></div>
                                    <div className="col-md-3 launch-card"><h3>{this.leading0(this.state.hours)} <br/><span>Hours</span></h3></div>
                                    <div className="col-md-3 launch-card"><h3>{this.leading0(this.state.minutes)} <br/><span>Minutes</span></h3></div>
                                    <div className="col-md-2 launch-card"><h3>{this.leading0(this.state.seconds)}  <br/><span>Seconds</span></h3></div>
                                </div>
                            </div>
                            {/* <div className="col-md-6 rate-section">                                   
                             <div className="row" >
                                    <div className= "col-md-4 col-xs-4 overall-rate" >                                       
                                    <h4 style={{marginTop: '-10px', fontSize: '1.4em'}}>Over All Rating</h4>
                                        <CircularProgressbar percentage={overall} />
                                    </div>
                                    <div className= "col-md-8 col-xs-8">
                                        <h4 style={{marginTop: '-10px', fontSize: '1.4em'}} >Ratings</h4> 
                                        <h5 style={{fontSize: '0.8em',color: '#90CFD8', paddingBottom: '10px'}}>See all ratings</h5>
                                        <div className="col-md-4 col-xs-4 team"><p>Team</p><CircularProgressbar percentage={team_rate} /></div>
                                        <div className="col-md-4 col-xs-4 concept"><p>Concept</p><CircularProgressbar percentage={concept_rate} /></div>
                                        <div className="col-md-4 col-xs-4 whitepaper"><p>WhitePaper</p><CircularProgressbar percentage={white_rate} /></div>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-6  shadow-ratedDiv">
                                <div className="row">
                                    <div className="col-md-6 col-xs-12">
                                        <h1 className="ratePoint">4.8</h1> <sub className="subscript">/5</sub>

                                        <p className="rating-icon">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </p>
                                        <p className="beforeIcon-ratingStar">
                                    Based on 247 reviews over the past year
                                    </p>
                                    </div>

                                    <div className="col-md-5 col-xs-12 progressBar">
                                        <div className="row rating-row-1">
                                            <div className="col-md-1 col-xs-1 num-rating">5</div>
                                            <div className="col-md-1 col-xs-1"><i className="fa fa-star star" aria-hidden="true"></i></div>
                                            <div className="col-md-7 col-xs-7 progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                                    aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                                    <span className="sr-only">70% Complete</span>
                                                </div>
                                            </div>
                                            <div className="col-md-1 col-xs-1 num-rating num-rat">245</div>
                                        </div>

                                        <div className="row rating-row-2">
                                            <div className="col-md-1 col-xs-1 num-rating">4</div>
                                            <div className="col-md-1 col-xs-1"><i className="fa fa-star star" aria-hidden="true"></i></div>
                                            <div className="col-md-7 col-xs-7 progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                                    aria-valuemin="0" aria-valuemax="100" style={{width:"20%"}}>
                                                    <span className="sr-only">70% Complete</span>
                                                </div>
                                            </div>
                                            <div className="col-md-1 col-xs-1 num-rating">17</div>
                                        </div>

                                        <div className="row rating-row-3">
                                            <div className="col-md-1 col-xs-1 col-xs-1 num-rating">3</div>
                                            <div className="col-md-1 col-xs-1 col-xs-1"><i className="fa fa-star star" aria-hidden="true"></i></div>
                                            <div className="col-md-7 col-xs-7 col-xs-7 progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                                    aria-valuemin="0" aria-valuemax="100" style={{width:"5%"}}>
                                                    <span className="sr-only">70% Complete</span>
                                                </div>
                                            </div>
                                            <div className="col-md-1 col-xs-1 num-rating">2</div>
                                        </div>
                                        <div className="row rating-row-4">
                                            <div className="col-md-1 col-xs-1 num-rating">2</div>
                                            <div className="col-md-1 col-xs-1"><i className="fa fa-star star" aria-hidden="true"></i></div>
                                            <div className="col-md-7 col-xs-7 progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                                    aria-valuemin="0" aria-valuemax="100" style={{width:"5%"}}>
                                                    <span className="sr-only">70% Complete</span>
                                                </div>
                                            </div>
                                            <div className="col-md-1 col-xs-1 num-rating">2</div>
                                        </div>

                                        <div className="row rating-row-5">
                                            <div className="col-md-1 col-xs-1 num-rating">1</div>
                                            <div className="col-md-1 col-xs-1"><i className="fa fa-star star" aria-hidden="true"></i></div>
                                            <div className="col-md-7 col-xs-7 progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                                    aria-valuemin="0" aria-valuemax="100" style={{width:"10%"}}>
                                                    <span className="sr-only">70% Complete</span>
                                                </div>
                                            </div>
                                            <div className="col-md-1 col-xs-1 num-rating">8</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- MEDICAL ENDS --> */}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        listState: state.RateReducer.getrate,
      };
    }
  
const  mapDispatchToProps = (dispatch) => {
    return {
            getList: () => {
            dispatch(MiddleWare.GetRating());
        },
    }
};
    

export default connect(mapStateToProps,mapDispatchToProps) (IcoBrief);