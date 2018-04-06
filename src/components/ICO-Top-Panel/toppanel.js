import React , {Component} from 'react'

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

import $ from 'jquery';

class IcoTopPanel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            icoData1: [],
            icoData2: [],
            icoData3: [],
            allico: [],
            upcomingico: [],
            endedico: [],
            

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
                    live: 1
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
                    live: 0
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

    componentDidMount(){
        // console.log('did mount run')
        // this.SendAllICo();
        // this.activeData();
        // this.upcomingData();
        // this.FinishedData();
        this.activeData();
        this.props.getList();
        this.props.getupcoming();
        this.props.getended();



    }

    /* Azeem Ullah */
    showHideContent(event){
        if(event.target.value.length == 0){
            $("#two-tables").fadeIn("slow");
            $("#planning-ico").fadeIn("slow");
        }
        else{
            $("#two-tables").fadeOut("slow");
            $("#planning-ico").fadeOut("slow");

        }

    }

    componentWillMount(){
        // this.props.getended(); 
    }

    SendAllICo(ev){
        ev.preventDefault();
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
        // console.log('rate', upcoming_ico)
        let UpcomingIco = {
            upcomingico : upcoming_ico
        }
        // console.log("upcoming ico info", UpcomingIco);
        this.props.sendingData2(UpcomingIco);

    }

    SendEndedICo(ev){
        ev.preventDefault();
        let ended_ico = this.state.icoData3;
        // console.log('rate', ended_ico)
        let Endedico = {
            endedico : ended_ico
        }
        // console.log("ended ico info", Endedico);
        this.props.sendingData3(Endedico);

    }
    render(){
        let allico = this.props.AllIcoState.length;
        let upcomingico = this.props.upcomingIcoState.length;
        let endedico = this.props.EndedIcoState.length;
            
        {console.log("list0", this.state.icoData1)}
        {console.log("list1", this.props.upcomingIcoState.length)}
        {console.log("list2", this.props.EndedIcoState.length)}
  
        return(

        // <!--ICO-GREY  -->
            <section id="ico-top-panel">
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-9 ico-stats-panel" align="center" >
                            <div className="row">        
                                <div className="col-md-2 ico-panel-card" >
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
                                    <input type="text"  onChange={this.showHideContent} className="form-control" placeholder="Search" name="srch-term" id="srch-term"/>
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit" onClick={this.SendAllICo}>
                                            <i style={{color: '#1DA0B4'}} className="glyphicon glyphicon-search" ></i>
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
        getList: () => {
            dispatch(MiddleWare.fetchIcoData());
            },
        getupcoming: () => {
            dispatch(MiddleWare.fetchUpcomingICO());
            },
        getended: () => {
            dispatch(MiddleWare.fetchEndedICO());
            },
    })
}


const mapStateToProps = (state) => {
    return ({
        AllIcoState: state.ICOReducer.ico_data,
        upcomingIcoState: state.UpcomingICOReducer.up_ico_data,
        EndedIcoState: state.EndedICOReducer.end_ico_data,
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(IcoTopPanel);
