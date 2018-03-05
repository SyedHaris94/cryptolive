import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'font-awesome/css/font-awesome.min.css'

import Routes from './container/Routes'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store//store'
// import App from './App'
// import TableData from './components/GraphTable/graphtable'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>

    <Provider store = {store} >
        <Routes />
        {/* <GraphTable/> */}
    </Provider>
    </MuiThemeProvider>

    
    ,document.getElementById('root'));
registerServiceWorker();

if (module.hot){
    module.hot.accept()
}
