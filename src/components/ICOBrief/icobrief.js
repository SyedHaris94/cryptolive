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
            deadline: ''
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
    }
     
    componentDidMount() {
        this.rateData();
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
        // {console.log('deadline',this.state.deadline)}
        console.log("didmount running");
        this.props.getList();
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

        {console.log("ico_name", this.props.listState)}
       

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
        let date = pageParam.end_time
        
        return(
            <div>
                {/* <!-- MEDICAL STARTS --> */}
                <section id="ico-stats-brief">
                    <div className="container" >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row" style={{marginBottom: '50px'}}>
                                    <div className="col-md-3 col-xs-3" style={{paddingTop: '25px'}}>
                                        <img src={pageParam.image}
                                        style={{width: '100%', height: '40%'}} className="pull-left"/>
                                    </div>
                                    <div className="col-md-9 col-xs-9 medicalchain">
                                        <h3>{pageParam.name} <span className="premium-icon" style={{letterSpacing: '3px'}}>PREMIUM</span></h3>
                                        <p>{pageParam.description}</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 launch-card" ><h3>{this.leading0(this.state.days)} <br/><span>Days</span></h3></div>
                                    <div className="col-md-3 launch-card"><h3>{this.leading0(this.state.hours)} <br/><span>Hours</span></h3></div>
                                    <div className="col-md-3 launch-card"><h3>{this.leading0(this.state.minutes)} <br/><span>Minutes</span></h3></div>
                                    <div className="col-md-2 launch-card"><h3>{this.leading0(this.state.seconds)}  <br/><span>Seconds</span></h3></div>
                                </div>
                            </div>
                            <div className="col-md-6 rate-section">
                                {this.props.listState.map((m,v) => {
                                    
                                    let icoName = m.icoName
                                    console.log('ico-name',icoName)
                                    let Concept = m.Concept/ 5 * 100 
                                    let Team = m.Team / 5 * 100 
                                    let Whitepaper = m.Whitepaper / 5 * 100 
                                    let avrg = (Concept + Whitepaper + Team) / 100 * 15
                                    return  (
                                        icoName === nameParam ? 
                                        <div className="row" key={v}>
                                            <div className= "col-md-4 overall-rate" >
                                              
                                            <h4 style={{marginTop: '-10px', fontSize: '1.4em'}}>Over All Rating</h4>
                                                <CircularProgressbar percentage={avrg} />
                                            </div>
                                            <div className= "col-md-8">
                                                <h4 style={{marginTop: '-10px', fontSize: '1.4em'}} >Ratings</h4> 
                                                <h5 style={{fontSize: '0.8em',color: '#90CFD8', paddingBottom: '10px'}}>See all ratings</h5>
                                                <div className="col-md-4 team"><p>Team</p><CircularProgressbar percentage={Team} /></div>
                                                <div className="col-md-4 concept"><p>Concept</p><CircularProgressbar percentage={Concept} /></div>
                                                <div className="col-md-4 whitepaper"><p>WhitePaper</p><CircularProgressbar percentage={Whitepaper} /></div>
                                            </div>
                                        </div>
                                        : null);
                                      })}
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
        // userState: state.AuthReducer.profile,
      };
    }
  
const  mapDispatchToProps = (dispatch) => {
    return {
            getList: () => {
            dispatch(MiddleWare.GetRating());
        },
            // getUserList: () => {
            // dispatch(MiddleWare.UserProfile());
        // }
    }
};
    

export default connect(mapStateToProps,mapDispatchToProps) (IcoBrief);