import React, {Component} from 'react'

import {Navbar, IcoBrief, SocailIcon, VideoTable, Suscribe, Description, Footer} from '../index'

class IcoView extends React.Component{
    render(){
        const nameParam = this.props.match.params.name;
        const liveParam = this.props.match.params.live;

        return(
            <div>
                <Navbar/>
                <IcoBrief 
                    namePram = {nameParam}
                    livePram = {liveParam}
                />
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