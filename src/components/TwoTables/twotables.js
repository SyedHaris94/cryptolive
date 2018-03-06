import React, {Component} from 'react'

// react-router
import { Link } from "react-router-dom";

class TwoTable extends React.Component{
    render(){
        return(
            <div>
                 {/* <!-- two-table section start --> */}
                <section id="two-tables">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-9 left-table table-responsive">
                                <h4>TRENDING</h4>

                                <Link to="/icoview"style={{ textDecoration: "none" }} >
                                    <table className="table" >
                                        <thead className="table-head">
                                            <tr >
                                                <th> Name</th>
                                                <th>ETA</th>
                                                 <th>TEAM</th>
                                                <th>TECH</th>
                                                <th>STRUCT</th>
                                                <th>COMM</th>
                                                <th>HYPE</th>
                                                <th>POSITIVE</th>
                                                <th>NEUTRAL</th>
                                                <th>NEGATIVE</th>
                                                <th>OVERALL</th>
                                                <th>SOCIAL</th>
                                            </tr>
                                        </thead>
                                        <RowData1/>
                                    </table>
                                </Link>
                                <div className="row">
                                        <div className="col-md-12">
                                            <Link to="/browseico"style={{ textDecoration: "none" }} >
                                                <button type="button" className="btn btn-default btn-block table-button">VIEW ALL</button>
                                            </Link>
                                        </div>
                                </div>

                               
                            </div>
                
                            <div className="col-md-3 right-table">
                                    <h4 className="grey-color">LAST MINUTE</h4>
                                    <Link to="/icoview"style={{ textDecoration: "none" }} >
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
                                    </Link>
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


export default TwoTable;


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
                  count: count
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
        const x = [];
        let count = 0;
        return(
            <tbody>
            {console.log('dsdsd',this.state.tableData1)}
            {this.state.tableData1.map ? this.state.tableData1.map(
                            (m, v) => {
                          const pageSym = m.symbol
                          const img = m.name.toLowerCase();
                          if (m.count <= 51){
                              return <tr key={m.count}>
                                  <td style={{width: '20%' , textAlign: 'left'}} >
                                           <img src={m.image}
                                             imageParam= {pageSym} 
                                              style={{width: '50%', height: '30%'}} className="pull-left"/>
                                          <div style={{textAlign: 'left', marginLeft: '2px'}} class="pull-left"> {m.name}</div>
                                  </td>
                                  <td >
                                      3.5
                                  </td>
                                  <td>
                                      23
                                  </td>
                                  <td >
                                      3.5
                                  </td>
                                  <td>
                                      23
                                  </td>
                                  <td >
                                      3.5
                                  </td>
                                  <td>
                                      23
                                  </td>
                                  <td >
                                      3.5
                                  </td>
                                  <td>
                                      23
                                  </td>
                                  <td >
                                      3.5
                                  </td>
                                  <td>
                                      23
                                  </td>
                                  <td>
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


class RowData2 extends React.Component{
    constructor(props) {
            
        super(props);
        
        this.state = {
          tableData1: []
        };
    
      }

      rateData = () => {

        // const pageID = this.props.match.params.symbol;
        const url = 'https://api.icowatchlist.com/public/v1/upcoming';
      
        fetch(url).then( r => r.json())
          .then((marketData) => {
            const tabledata1 = [];
      
            for (let index in marketData.ico.upcoming){
              tabledata1.push({
                  name: marketData.ico.upcoming[index].name,
                  image: marketData.ico.upcoming[index].image
                   });
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
        const x = [];
        let count = 0;
        return(
            <tbody>
            {console.log('dsdsd',this.state.tableData1)}
            {this.state.tableData1.map ? this.state.tableData1.map(
                            (m, v) => {
                          const pageSym = m.symbol
                          const img = m.name.toLowerCase();
                              return <tr key={v}>
                                    {/* <Link to={gotoUrl(pageSym)} style={{ textDecoration: "none" }}> */}
                                    <td style={{width: '10%'}} >
                                           <img src={m.image}
                                             imageParam= {pageSym} 
                                              style={{width: '50%', height: '30%'}}/>
                                          <div class="pull-right"> {m.name}</div>
                                    </td>
                                    {/* </Link> */}
                                  <td >
                                      3.5
                                  </td>
                                  <td>
                                      23
                                  </td>
                                  <td>
                                  <i className="fa fa-facebook favicon-icons" aria-hidden="true">
                                  </i>
                                  <i className="fa fa-twitter favicon-icons" aria-hidden="true"></i> 
                                  </td>
                                  
                                </tr>;
                            }
                          ) : <div />}
            </tbody>
        );
    }

}