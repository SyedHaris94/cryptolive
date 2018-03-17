import React , {Component} from 'react'

class IcoTopPanel extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            icoData1: [],
            icoData2: [],
            icoData3: [],
            icoData4: [],
        };
      }

    activeData = () => {
        const url = 'https://api.icowatchlist.com/public/v1/live';
        let count = 0;
        fetch(url).then( r => r.json())
          .then((marketData) => {
            const icodata1 = [];
            for (let index in marketData.ico.live){
                icodata1.push({
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

      AllData = () => {
        const url = 'https://api.icowatchlist.com/public/v1/';
        let count = 0;
        fetch(url).then( r => r.json())
          .then((marketData) => {
            const icodata4 = [];
            for (let index in marketData.ico.finished){
                icodata4.push({
                 count: count,
                });
                count++
            }
            this.setState({
                icoData4: icodata4,
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
        this.AllData();
    }

    render(){
        let activeico = this.state.icoData1.length;
        let upcomingico = this.state.icoData2.length;
        let endedico = this.state.icoData3.length;
        let allico = this.state.icoData4.length;
            
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
                                    <p>{activeico}</p>
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
                                        <button className="btn btn-default" type="submit">
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


export default IcoTopPanel;