import React from 'react'
import bitcoin from '../../img/bitcoin-1.jpg'
import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'


class FeatureICO extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            feature:  [],
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            deadline: '',
        }
    }


    componentWillMount() {
        this.getTimeUntil(this.state.deadline);
        this.props.getList();
    }
     
    componentDidMount() {
        // this.rateData();
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

            // let m = this.state.icoData;

            let ico = this.props.AllIcoState


            const nameParam = this.props.namePram;
            const liveParam = this.props.livePram;      
            // {console.log('name icobrief', nameParam)}
            const gotoUrl = (api, url) => {
                let test = {};
              
                api.map((m) => {    
                    
                    // if (nameParam == m.name) {
                        test.name = m.name;
                        test.image = m.image;
                        test.description = m.description;
                        test.website_link = m.website_link;
                        test.icowatchlist_url = m.icowatchlist_url;
                        test.start_time = m.start_time;
                        test.end_time = m.end_time;
                        test.timezone = m.timezone;
                    // }
    
                });
    
                return test;
            }

            let pageParam = gotoUrl(ico);
            this.setState({
                deadline: pageParam.end_time
            })


            console.log('param', pageParam.end_time)
            console.log('ico_name', pageParam.name)
            
    }


    render(){
        const {feature} =  this.state;
        let allico = this.props.AllIcoState;
        console.log('features', feature)
        return(
            <div class="row">
                <h3 className= "feature">Feature ICOs</h3>
                {allico.map ((x,v) => {
                    if (x.featured == "1"){
                        console.log('features', x.featured)
                        console.log('all_ico', x)
                        console.log('end_time', x.end_time)
                        

                        let deadline = x.end_time


                        // function getTimeUntil  (deadline){
                        //     const time = Date.parse(deadline) - Date.parse(new Date());
                    
                        //     if(time < 0) {
                        //         this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                    
                        //     } else {
                        //         const seconds = Math.floor((time/1000)%60);
                        //         const minutes = Math.floor((time/1000/60)%60);
                        //         const hours = Math.floor((time/(1000*60*60))%24);
                        //         const days = Math.floor(time/(1000*60*60*24));
                    
                        //         this.setState({ days, hours, minutes, seconds });
                        //     }
                                
                        // }

                        return(
                            <div>
                                <div class="col-md-2 futureIcoDiv">
                                    <img class="imgdiv" src={x.image} alt=""/>
                                    <div class="list-inline rate-star">
                                        <li class="rating">4.4</li>
                                        <li class="icon-star"><i class="fa fa-star"></i></li>
                                    </div>
                                    <h4 class="h4Head">{x.name}</h4>
                                    <p class="divPara">{x.description}</p>
                                    <i class="fa fa-clock-o fa-1x clock"> {deadline}</i>
                                    {/* <i class="fa fa-clock-o fa-1x clock"> {this.leading0(this.state.days)} days {this.leading0(this.state.hours)} hour Left </i> */}
                                </div>

                                {/* <div class="col-md-2 futureIcoDiv">
                                    <img class="imgdiv" src={x.image} alt=""/>
                                    <div class="list-inline rate-star">
                                        <li class="rating">4.4</li>
                                        <li class="icon-star"><i class="fa fa-star"></i></li>
                                    </div>
                                    <h4 class="h4Head">{x.name}</h4>
                                    <p class="divPara">{x.description}</p>
                                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                                </div>

                                <div class="col-md-2 futureIcoDiv">
                                    <img class="imgdiv" src={x.image} alt=""/>
                                    <div class="list-inline rate-star">
                                        <li class="rating">4.4</li>
                                        <li class="icon-star"><i class="fa fa-star"></i></li>
                                    </div>
                                    <h4 class="h4Head">{x.name}</h4>
                                    <p class="divPara">{x.description}</p>
                                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                                </div>

                                <div class="col-md-2 futureIcoDiv">
                                    <img class="imgdiv" src={x.image} alt=""/>
                                    <div class="list-inline rate-star">
                                        <li class="rating">4.4</li>
                                        <li class="icon-star"><i class="fa fa-star"></i></li>
                                    </div>
                                    <h4 class="h4Head">{x.name}</h4>
                                    <p class="divPara">{x.description}</p>
                                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                                </div>

                                <div class="col-md-2 futureIcoDiv">
                                    <img class="imgdiv" src={x.image} alt=""/>
                                    <div class="list-inline rate-star">
                                        <li class="rating">4.4</li>
                                        <li class="icon-star"><i class="fa fa-star"></i></li>
                                    </div>
                                    <h4 class="h4Head">{x.name}</h4>
                                    <p class="divPara">{x.description}</p>
                                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                                </div> */}
                            </div>
                        )
                    }
                })
                }

                {/* <div class="col-md-2 futureIcoDiv">
                    <img class="imgdiv" src={bitcoin}/>
                    <div class="list-inline rate-star">
                        <li class="rating">4.4</li>
                        <li class="icon-star"><i class="fa fa-star"></i></li>
                    </div>
                    <h4 class="h4Head">StopTheFakes</h4>
                    <p class="divPara">To achieve the button styles above, Bootstrap has the following classes:</p>
                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                </div>

                <div class="col-md-2 futureIcoDiv">
                    <img class="imgdiv" src={bitcoin} alt=""/>
                    <div class="list-inline rate-star">
                        <li class="rating">4.4</li>
                        <li class="icon-star"><i class="fa fa-star"></i></li>
                    </div>
                    <h4 class="h4Head">StopTheFakes</h4>
                    <p class="divPara">To achieve the button styles above, Bootstrap has the following classes:</p>
                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                </div>

                <div class="col-md-2 futureIcoDiv">
                    <img class="imgdiv" src={bitcoin} alt=""/>
                    <div class="list-inline rate-star">
                        <li class="rating">4.4</li>
                        <li class="icon-star"><i class="fa fa-star"></i></li>
                    </div>
                    <h4 class="h4Head">StopTheFakes</h4>
                    <p class="divPara">To achieve the button styles above, Bootstrap has the following classes:</p>
                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                </div>

                <div class="col-md-2 futureIcoDiv">
                    <img class="imgdiv" src={bitcoin} alt=""/>
                    <div class="list-inline rate-star">
                        <li class="rating">4.4</li>
                        <li class="icon-star"><i class="fa fa-star"></i></li>
                    </div>
                    <h4 class="h4Head">StopTheFakes</h4>
                    <p class="divPara">To achieve the button styles above, Bootstrap has the following classes:</p>
                    <i class="fa fa-clock-o fa-1x clock"> 23 days 0 hour Left </i>
                </div> */}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return ({
        AllIcoState: state.ICOReducer.ico_data,
        
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        getList: () => {dispatch(MiddleWare.fetchIcoData());},
        
    })
}


export default connect(mapStateToProps,mapDispatchToProps)(FeatureICO);

