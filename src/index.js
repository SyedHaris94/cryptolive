import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'font-awesome/css/font-awesome.min.css'

import Routes from './container/Routes'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store//store'

import Admin from '../src/components/Admin/admin'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    
    <Provider store = {store} >
        <MuiThemeProvider>
            <Routes />
        </MuiThemeProvider>        
     </Provider>

    
    ,document.getElementById('root'));
registerServiceWorker();

if (module.hot){
    module.hot.accept()
}
