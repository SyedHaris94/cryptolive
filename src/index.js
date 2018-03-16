import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'font-awesome/css/font-awesome.min.css'

import Routes from './container/Routes'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store//store'

// import FilteredList from './components/search/search'


ReactDOM.render(

    <Provider store = {store} >
            <Routes />
            {/* // <FilteredList/> */}
     </Provider>

    
    ,document.getElementById('root'));
registerServiceWorker();

if (module.hot){
    module.hot.accept()
}
