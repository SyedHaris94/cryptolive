import React, { Component } from 'react';
import {Navbar, Jumbo, FiveFeature, Middle, TableData, HomePagination, BottomCards, Table2, Footer } from '../index'


class Home extends Component {
  render() {
    return (
      <div className="App">
            <Navbar/>   
            <Jumbo/>  
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
