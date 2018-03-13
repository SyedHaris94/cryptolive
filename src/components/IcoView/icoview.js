import React, {Component} from 'react'

import {Navbar, IcoBrief, SocailIcon, VideoTable, Suscribe, Description, Footer} from '../index'

class IcoView extends React.Component{
    render(){
        let nameParam = this.props.match.params.name;
        let liveParam = this.props.match.params.live;
        let webParam = this.props.match.params.website_link;


        return(
            <div>
                <Navbar/>
                <IcoBrief 
                    namePram = {nameParam}
                    livePram = {liveParam}
                />
                <SocailIcon/>
                <VideoTable
                weblink = {nameParam}/>
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