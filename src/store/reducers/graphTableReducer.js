import { handleAction } from '../actions/handleaction';

const initialState = {
    data : [],
}


const GraphTableReducer =(state = initialState, actions) => {
    // console.log('action payload', actions.payload)
    switch (actions.type) {
        case handleAction.GETDATA_1:
            return {...state, data: actions.payload}
            break;
        default:
            return state
    }
}

export default GraphTableReducer;