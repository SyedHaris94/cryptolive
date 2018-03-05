import React , {Component} from 'react'

class IcoTopPanel extends React.Component{
    render(){
        return(
            // <!--ICO-GREY  -->
            <section id="ico-top-panel">
        
                <div className="container" >
                    <div className="row" >
                        <div className="col-md-9 ico-stats-panel" align="center" >
        
                            <div className="row">
        
                                <div className="col-md-3 ico-panel-card" >
                                    <h4>UPCOMING ICO'S</h4>
                                    <p>261</p>
                                </div>
        
                                <div className="col-md-2 ico-panel-card">
                                    <h4>ONGOING ICO'S</h4>
                                    <p>527</p>
                                </div>
        
                                <div className="col-md-2 ico-panel-card">
                                    <h4>ENDED ICO'S</h4>
                                    <p>792</p>
                                </div>
        
                                <div className="col-md-2 ico-panel-card">
                                    <h4>ACTIVE ICO'S</h4>
                                    <p>125</p>
                                </div>
                                <div className="col-md-2 ico-panel-card" >
                                    <h4>ACTIVE ICO'S</h4>
                                    <p>125</p>
                                </div>
        
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
                        {/* <!-- <div className="col-md-3" style="padding-top: 30px">
                            <img src="./img/search.png" alt="">
                            <input type="text" id="b" placeholder="Search ICO'S.." style="border-color: #4db6ac">
                        
                        </div> --> */}
                    </div>
                </div>
            </section>
        // {/* ICO GREY */}
        );
    }
}


export default IcoTopPanel;