import React , {Component} from 'react'

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'


class IcoTopPanel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            icoData1: [],
            icoData2: [],
            icoData3: [],
            allico: '',
            upcomingico: '',
            endedico: ''

        };
        this.SendAllICo = this.SendAllICo.bind(this);
        this.SendUpcomingICo = this.SendUpcomingICo.bind(this);
        this.SendEndedICo = this.SendEndedICo.bind(this);


      }

    activeData = () => {
        const url = 'https://api.icowatchlist.com/public/v1/live';
        let count = 0;
        fetch(url).then( r => r.json())
          .then((marketData) => {
            const icodata1 = [];
            for (let index in marketData.ico.live){
                icodata1.push({
                    name: marketData.ico.live[index].name,
                    image: marketData.ico.live[index].image,
                    website_link: marketData.ico.live[index].website_link,
                    icowatchlist_url: marketData.ico.live[index].icowatchlist_url,
                    start_time: marketData.ico.live[index].start_time,
                    end_time: marketData.ico.live[index].end_time,
                    timezone: marketData.ico.live[index].timezone,
                    description: marketData.ico.live[index].description,
                    count: count,
                });
                count++
            }
            this.setState({
                icoData1: icodata1,
            })
          })
          .catch((e) => {
            console.log(e);
          });
      }

      upcomingData = () => {
        const url = 'https://api.icowatchlist.com/public/v1/upcoming';
        let count = 0;
        fetch(url).then( r => r.json())
          .then((marketData) => {
            const icodata2 = [];
            for (let index in marketData.ico.upcoming){
                icodata2.push({
                    name: marketData.ico.upcoming[index].name,
                    image: marketData.ico.upcoming[index].image,
                    website_link: marketData.ico.upcoming[index].website_link,
                    icowatchlist_url: marketData.ico.upcoming[index].icowatchlist_url,
                    start_time: marketData.ico.upcoming[index].start_time,
                    end_time: marketData.ico.upcoming[index].end_time,
                    timezone: marketData.ico.upcoming[index].timezone,
                    description: marketData.ico.upcoming[index].description,
                    count: count,
                });
                count++
            }
            this.setState({
                icoData2: icodata2,
            })
          })
          .catch((e) => {
            console.log(e);
          });
      }


      FinishedData = () => {
        const url = 'https://api.icowatchlist.com/public/v1/finished';
        let count = 0;
        fetch(url).then( r => r.json())
          .then((marketData) => {
            const icodata3 = [];
            for (let index in marketData.ico.finished){
                icodata3.push({
                    name: marketData.ico.finished[index].name,
                    image: marketData.ico.finished[index].image,
                    website_link: marketData.ico.finished[index].website_link,
                    icowatchlist_url: marketData.ico.finished[index].icowatchlist_url,
                    start_time: marketData.ico.finished[index].start_time,
                    end_time: marketData.ico.finished[index].end_time,
                    timezone: marketData.ico.finished[index].timezone,
                    description: marketData.ico.finished[index].description,
                    count: count,
                });
                count++
            }
            this.setState({
                icoData3: icodata3,
            })
          })
          .catch((e) => {
            console.log(e);
          });
      }

    componentDidMount() {
        this.activeData();
        this.upcomingData();
        this.FinishedData();
        // this.SendAllICo();
        // this.SendEndedICo();
        // this.SendUpcomingICo();
    }

    SendAllICo(ev){
        // ev.preventDefault();
        let all_ico = this.state.icoData1;
        console.log('rate', all_ico)
        let AllIco = {
            allico : all_ico
        }
        console.log("al ico info", AllIco);

        this.props.sendingData(AllIco);

    }


    SendUpcomingICo(ev){
        ev.preventDefault();
        let upcoming_ico = this.state.icoData2;
        console.log('rate', upcoming_ico)
        let UpcomingIco = {
            upcomingico : upcoming_ico

        }
        console.log("upcoming ico info", UpcomingIco);

        this.props.sendingData2(UpcomingIco);

    }

    SendEndedICo(ev){
        ev.preventDefault();
        let ended_ico = this.state.icoData3;
        console.log('rate', ended_ico)
        let Endedico = {
            endedico : ended_ico

        }
        console.log("ended ico info", Endedico);

        this.props.sendingData3(Endedico);

    }

    render(){
        let allico = this.state.icoData1.length;
        let upcomingico = this.state.icoData2.length;
        let endedico = this.state.icoData3.length;
            
        return(

        // <!--ICO-GREY  -->
            <section id="ico-top-panel">
                {/* {console.log('dsdsd',this.state.icoData1.length)} */}
                {console.log('asasc',this.state.icoData2)}

                <div className="container" >
                    <div className="row" >
                        <div className="col-md-9 ico-stats-panel" align="center" >
                            <div className="row">        
                                <div className="col-md-3 ico-panel-card" >
                                    <h4>UPCOMING ICO'S</h4>
                                    <p>{upcomingico}</p>
                                </div>        
                                <div className="col-md-2 ico-panel-card">
                                    <h4>ONGOING ICO'S</h4>
                                    <p>{allico}</p>
                                </div>        
                                <div className="col-md-2 ico-panel-card">
                                    <h4>ENDED ICO'S</h4>
                                    <p>{endedico}</p>
                                </div>       
                                <div className="col-md-2 ico-panel-card">
                                    <h4>ACTIVE ICO'S</h4>
                                    <p>{allico}</p>
                                </div>
                                {/* <div className="col-md-2 ico-panel-card" >
                                    <h4>ACTIVE ICO'S</h4>
                                    <p>125</p>
                                </div> */}
                            </div>      
                        </div>            
                        <div className="col-md-3 col-xs-12" style={{padding: '15px 0 10px 0'}}>
                            <form className="form-horizontal" role="Search">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search" name="srch-term" id="srch-term"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit" >
                                            <i style={{color: '#1DA0B4'}} className="glyphicon glyphicon-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        // {/* ICO GREY */}
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        sendingData: all_icodata => {
            dispatch(MiddleWare.sendAllICO(all_icodata))
            },
        sendingData2: upcom_icodata => {
            dispatch(MiddleWare.sendUpcomingICO(upcom_icodata))
            },
        sendingData3: end_icodata => {
            dispatch(MiddleWare.sendEndedICO(end_icodata))
            },
    })
}

export default connect(null, mapDispatchToProps)(IcoTopPanel);
