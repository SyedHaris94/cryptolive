import React, { Component } from 'react';
import {Navbar, Jumbo,Auth, FiveFeature, Middle, TableData, HomePagination, BottomCards, Table2, Footer } from '../index'


class Home extends Component {
  render() {
    return (
      <div className="App">
            <Navbar/>   
            <Jumbo/>  
            <Modal/>
            <FiveFeature/>
            <Middle/>
            <TableData/>
            <HomePagination/>
            <BottomCards/>
            <Footer/>

      </div>
    );
  }
}

export default Home;


class Modal extends React.Component{
  render(){
    return(
      <div>
        {/* <!-- Modal --> */}
        <div class="modal fade" id="myModal" role="dialog">
          
            {/* <!-- Modal content--> */}
              <div class="modal-body">
                <Auth/>
              </div>
            </div>
        </div>
    );
  }
}
