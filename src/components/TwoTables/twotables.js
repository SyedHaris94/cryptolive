import React, {Component} from 'react'

// react-router
import { Link } from "react-router-dom";

import { connect } from 'react-redux';
import MiddleWare from '../../store//middleware/middleware'

class TwoTable extends React.Component{
    componentDidMount(){
        this.props.getList();
        this.props.getupcoming();
    }

    render(){
        {console.log("list0", this.props.AllIcoState)}
        {console.log("list1", this.props.upcomingIcoState)}
        
        return(
            <div>
                 {/* <!-- two-table section start --> */}
                <section id="two-tables">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 left-table table-responsive">
                                <h4>TRENDING</h4>
                                {/* <Link to="/icoview"style={{ textDecoration: "none" }} > */}
                                    <table className="table" >
                                        <thead className="table-head">
                                            <tr >
                                                <th> Name</th>
                                                <th>ETA</th>
                                                 <th>TEAM</th>
                                                <th>CONCEPT</th>
                                                <th>WHITE</th>
                                                {/* <th>COMM</th>
                                                <th>HYPE</th>
                                                <th>POSITIVE</th>
                                                <th>NEUTRAL</th>
                                                <th>NEGATIVE</th>
                                                <th>OVERALL</th> */}
                                                <th>SOCIAL</th>
                                            </tr>
                                        </thead>
                                        <RowData1/>
                                    </table>
                                {/* </Link> */}
                                <div className="row">
                                        <div className="col-md-12">
                                            <Link to="/browseico"style={{ textDecoration: "none" }} >
                                                <button type="button" className="btn btn-default btn-block table-button">VIEW ALL</button>
                                            </Link>
                                        </div>
                                </div>

                               
                            </div>
                
                            <div className="col-md-5 right-table">
                                    <h4 className="grey-color">LAST MINUTE</h4>
                                    {/* <Link to="/icoview"style={{ textDecoration: "none" }} > */}
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th className="col-md-3">Name</th>
                                                    <th className="col-md-3">ETA</th>
                                                    <th className="col-md-3">OVERALL</th>
                                                    <th className="col-md-3">SOCIAL</th>
                                                </tr>
                                            </thead>
                                            <RowData2/>
                                        </table>
                                    {/* </Link> */}
                                <div className="row">
                                    <div className="col-md-12">
                                        <Link to="/browseico"style={{ textDecoration: "none" }} >
                                            <button type="button" className="btn btn-default btn-block table-button">VIEW ALL</button>
                                        </Link>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                
                    </div>
                </section>
                {/* <!--two- table section ends --> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        AllIcoState: state.ICOReducer.ico_data,
        upcomingIcoState: state.UpcomingICOReducer.up_ico_data,
        // EndedIcoState: state.EndedICOReducer.end_ico_data,
    })
}


const mapDispatchToProps = (dispatch) => {
    return ({
        getList: () => {
            dispatch(MiddleWare.fetchIcoData());
            },
        getupcoming: () => {
            dispatch(MiddleWare.fetchUpcomingICO());
            },
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(TwoTable);


class RowData1 extends React.Component{
    constructor(props) {
            
        super(props);
        
        this.state = {
          tableData1: []
        };
    
      }

      rateData = () => {

        // const pageID = this.props.match.params.symbol;
        const url = 'https://api.icowatchlist.com/public/v1/live';
        let count = 0;

        fetch(url).then( r => r.json())
          .then((marketData) => {
            const tabledata1 = [];
      
            for (let index in marketData.ico.live){
              tabledata1.push({
                  name: marketData.ico.live[index].name,
                  image: marketData.ico.live[index].image,
                  count: count,
                  live: 1
                });
                count++
            }
            
            this.setState({
              tableData1: tabledata1,
            })
          })
          .catch((e) => {
            console.log(e);
          });
      }
      
      
      componentDidMount() {
          console.log('did mount run')
        this.rateData();
      }
      
    
    render(){
        function gotoUrl(sym,live) {
            return {
              pathname: `/icoview/${sym}/${live}`
            }
          }
        return(
            <tbody>
            {/* {console.log('dsdsd',this.state.tableData1)} */}
            {this.state.tableData1.map ? this.state.tableData1.map(
                            (m, v) => {
                          const pageSym = m.name
                          const live = m.live
                          const img = m.name.toLowerCase();
                          let name = m.name;
                        //   console.log('strlength',name.length)
                          if (name.length > 6){
                            var ico_name = name.substr(0, 5);
                            var ico_name = ico_name+'...' ;
                          }
                          else{
                            var ico_name = name;
                          }
                          if (m.count <= 6){
                              return <tr key={m.count}>
                                <Link to={gotoUrl(pageSym, live)} style={{ textDecoration: "none" }}>
                                    <td style={{width: '10%' , textAlign: 'left'}} >
                                        <img src={m.image}
                                            imageParam= {pageSym} 
                                            style={{marginLeft: '15px', width: '45%', height: '30%'}} className="pull-left"/>
                                        <div style={{textAlign: 'left', marginLeft: '15px'}} class="pull-left ico_name_1"> {ico_name}</div>
                                    </td>
                                </Link>
                                    <td style={{width: '15%' , }} >
                                        3.5
                                    </td>
                                    <td style={{width: '15%' , }} >
                                        23
                                    </td>
                                    <td style={{width: '15%' , }}>
                                        3.5
                                    </td>
                                    <td style={{width: '15%' , }}>
                                        23
                                    </td>
                                    <td>
                                    <i className="fa fa-facebook favicon-icons" aria-hidden="true">
                                    </i>
                                    <i className="fa fa-twitter favicon-icons" aria-hidden="true">
                                    </i> 
                                    </td>
                                  
                                </tr>;
                          }
                            }
                          ) : <div />}
            </tbody>
        );
    }

}


class RowData2 extends React.Component{
    constructor(props) {
            
        super(props);
        
        this.state = {
          tableData2: []
        };
    
      }

      rateData = () => {

        // const pageID = this.props.match.params.symbol;
        const url = 'https://api.icowatchlist.com/public/v1/upcoming';
        let count = 0;

        fetch(url).then( r => r.json())
          .then((marketData) => {
            const tabledata2 = [];
      
            for (let index in marketData.ico.upcoming){
              tabledata2.push({
                  name: marketData.ico.upcoming[index].name,
                  image: marketData.ico.upcoming[index].image,
                  count: count,
                  live: 0
                   });
                   count++
            }
            
            this.setState({
              tableData2: tabledata2,
            })
          })
          .catch((e) => {
            console.log(e);
          });
      }
      
      
      componentDidMount() {
        //   console.log('did mount run')
        this.rateData();
      }
      
    
    render(){ 
        function gotoUrl(sym, live) {
            return {
              pathname: `/icoview/${sym}/${live}`
            }
          }
        return(
            <tbody>
            {/* {console.log('dsdsd',this.state.tableData2)} */}
            {this.state.tableData2.map ? this.state.tableData2.map(
                        (m, v) => {
                        const pageSym = m.name
                        const live = m.live
                        const img = m.name.toLowerCase();
                        
                        let name = m.name;
                        // console.log('strlength',name.length)
                        if (name.length > 6){
                        var ico_name = name.substr(0, 5);
                        var ico_name = ico_name+'...' ;
                        
                        }
                        else{
                        var ico_name = name;
                        }
                        if (m.count <= 6){
                            return <tr key={v}>
                            <Link to={gotoUrl(pageSym, live)} style={{ textDecoration: "none" }}>
                            <td style={{width: '25%' , textAlign: 'left'}} >
                                    <img src={m.image}
                                        imageParam= {pageSym} 
                                        style={{marginLeft: '15px', width: '30%', height: '30%'}} className="pull-left"/>
                                    <div class="pull-right ico_name_2"> {ico_name}</div>
                                </td>
                            </Link>
                                <td style={{width: '10%' , }}  >
                                3.5
                                </td>
                                <td style={{width: '10%' , }} >
                                23
                                </td>
                                <td style={{width: '10%' , }} >
                                <i className="fa fa-facebook favicon-icons" aria-hidden="true">
                                </i>
                                <i className="fa fa-twitter favicon-icons" aria-hidden="true"></i> 
                                </td>
                                
                            </tr>;
                        }
                        }
                        ) : <div />}
            </tbody>
        );
    }

}