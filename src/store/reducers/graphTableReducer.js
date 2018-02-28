import { handleAction } from '../actions/handleaction';

const initialState = {
    data : [],
}


const GraphTableReducer =(state = initialState, actions) => {
    console.log('action payload', actions.payload)
    switch (actions.type) {
        case handleAction.GETDATA_1:
            return {...state, data: actions.payload}
            break;
        case handleAction.GETDATA_2:
            return {...state, data: actions.payload}
            break;
        case handleAction.GETDATA_3:
            return {...state, data: actions.payload}
            break;
        case handleAction.GETDATA_4:
            return {...state, data: actions.payload}
            break;
        case handleAction.GETDATA_5:
            return {...state, data: actions.payload}
            break;
        case handleAction.GETDATA_6:
            return {...state, data: actions.payload}
            break;
        case handleAction.GETDATA_7:
            return {...state, data: actions.payload}
            break;
        case handleAction.GETDATA_8:
            return {...state, data: actions.payload}
            break;
        case handleAction.GETDATA_9:
            return {...state, data: actions.payload}
            break;
        case handleAction.GETDATA_10:
            return {...state, data: actions.payload}
            break;
        
        default:
            return state
    }
}

export default GraphTableReducer;