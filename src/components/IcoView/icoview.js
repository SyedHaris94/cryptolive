import React, {Component} from 'react'

import {Navbar, IcoBrief, SocailIcon, VideoTable, Suscribe, Description, Footer} from '../index'

class IcoView extends React.Component{
    render(){
        let nameParam = this.props.match.params.name;
        let liveParam = this.props.match.params.live;


        return(
            <div>
                <Navbar/>
                <IcoBrief 
                    namePram = {nameParam}
                    livePram = {liveParam}
                />
                <SocailIcon
                    namePram = {nameParam}
                />
                <VideoTable
                    namePram = {nameParam}
                    livePram = {liveParam}
                />
                <Suscribe/>
                <Description 
                    icoNameParam = {nameParam}
                    // livePram = {liveParam}
                />            
                <Footer/>
            </div>
        );
    }
}

export default IcoView;