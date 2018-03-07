import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import {Home, IcoPage, Bitcoin, BrowseICO, Exchange, Market, IcoView, About, Publish,} from '../components';

// for tables temporary
import {GraphTable, Table2, Table3, Table4, Table5, Table6, Table7,Table8, Table9, Table10} from '../components';

// import injectTapEventPlugin from "react-tap-event-plugin";

// injectTapEventPlugin();

class Routes extends React.Component{

    
    render(){
        return(
            <Router >
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/icopage" component={IcoPage} />
          <Route path="/bitcoin/:symbol" component={Bitcoin} />
          <Route path="/browseico" component={BrowseICO} />
          <Route path="/about" component={About} />
          <Route path="/publish" component={Publish} />
          <Route path="/icoview/:name/:live" component={IcoView} />
          <Route path="/market" component={Market} />
          <Route path="/exchanges" component={Exchange}/>


          {/* tables routes */}

          <Route path="/table2" component={Table2} />
          <Route path="/table3" component={Table3} />
          <Route path="/table4" component={Table4} />
          <Route path="/table5" component={Table5} />
          <Route path="/table6" component={Table6} />
          <Route path="/table7" component={Table7} />
          <Route path="/table8" component={Table8} />
          <Route path="/table9" component={Table9} />
          <Route path="/table10" component={Table10} />
          
        </div>
      </Router>
        );
    }
}

export default Routes;


