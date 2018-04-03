import React, { Component } from 'react';
import {Navbar, Jumbo,Auth, FiveFeature, Middle, TableData, HomePagination, BottomCards, Table2, Footer } from '../index'


class Home extends Component {
  render() {
    let currency = this.props.selectedOption1
    console.log('curr',currency)
    return (

      <div className="App">
            <Navbar/>   
            <Jumbo/>  
            {/* <Auth/> */}
            <FiveFeature/>
            <Middle currency = {currency}/>
            {/* <TableData/> */}
            {/* <HomePagination/> */}
            <BottomCards/>
            <Footer/>

      </div>
    );
  }
}

export default Home;


