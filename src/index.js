import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css'

import Routes from './container/Routes'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store//store'
// import App from './App'
// import TableData from './components/GraphTable/graphtable'


ReactDOM.render(

    <Provider store = {store} >
        <Routes />
        {/* <GraphTable/> */}
    </Provider>

    
    ,document.getElementById('root'));
registerServiceWorker();

if (module.hot){
    module.hot.accept()
}
