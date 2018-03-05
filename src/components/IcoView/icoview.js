import React, {Component} from 'react'

import {Navbar, IcoBrief, SocailIcon, VideoTable, Suscribe, Description, Footer} from '../index'

class IcoView extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <IcoBrief/>
                <SocailIcon/>
                <VideoTable/>
                <Suscribe/>
                <Description/>            
                <Footer/>
            </div>
        );
    }
}

export default IcoView;