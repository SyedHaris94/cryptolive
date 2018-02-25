import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import {Home, IcoPage, Bitcoin, BrowseICO, IcoView, About, Publish,} from '../components';

class Routes extends React.Component{
    render(){
        return(
            <Router onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/icopage" component={IcoPage} />
          <Route path="/bitcoin/:id" component={Bitcoin} />
          <Route path="/browseico" component={BrowseICO} />
          <Route path="/about" component={About} />
          <Route path="/publish" component={Publish} />
          <Route path="/icoview" component={IcoView} />
        </div>
      </Router>
        );
    }
}

export default Routes;


