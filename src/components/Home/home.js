import React, { Component } from 'react';
import {Navbar, Jumbo,Auth, FiveFeature, Middle, TableData, HomePagination, BottomCards, Table2, Footer } from '../index'


class Home extends Component {
  render() {
    return (
      <div className="App">
            <Navbar/>   
            <Jumbo/>  
            <Auth/>
            <FiveFeature/>
            <Middle/>
            {/* <TableData/> */}
            <HomePagination/>
            <BottomCards/>
            <Footer/>

      </div>
    );
  }
}

export default Home;


