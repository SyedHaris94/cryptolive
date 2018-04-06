import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import {Home, IcoPage,GraphTable, Bitcoin, BrowseICO, Exchange, Market, IcoView, About, Publish,Auth} from '../components';

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null;
  };

class Routes extends React.Component{

    
    render(){
        return(
            <Router >
        <div>
            <Route component={ScrollToTop} />
            <Route exact path="/" component={Home} />
            <Route path="/icopage" component={IcoPage} />
            <Route path="/bitcoin/:symbol" component={Bitcoin} />
            <Route path="/browseico" component={BrowseICO} />
            <Route path="/about" component={About} />
            <Route path="/publish" component={Publish} />
            <Route path="/icoview/:name/:live" onUpdate={() => window.scrollTo(0, 0)} component={IcoView} />
            <Route path="/market" component={Market} />
            <Route path="/exchanges" component={Exchange}/>
            <Route path="/auth" component={Auth}/>
        </div>
      </Router>
        );
    }
}

export default Routes;


