import React, {Component} from 'react'

import {Navbar , Jumbo, IcoTopPanel,PlanICO, TwoTable,Footer, RightIcoPanel} from '../index'

class IcoPage extends React.Component{

    render(){
        return(
            <div>
                <Navbar/>
                <Jumbo/>
                <IcoTopPanel/>
                <TwoTable/>
                <PlanICO/>
                <RightIcoPanel/>
                <Footer/>
            </div>
        );
    }
}


export default IcoPage;