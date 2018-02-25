import React, { Component } from 'react';
import {Navbar, Jumbo, FiveFeature, Middle, GraphTable, HomePagination, BottomCards, Footer } from '../index'


class Home extends Component {
  render() {
    return (
      <div className="App">
            <Navbar/>   
            <Jumbo/>  
            <FiveFeature/>
            <Middle/>
            <GraphTable/>
            <HomePagination/>
            <BottomCards/>
            <Footer/>

      </div>
    );
  }
}

export default Home;
