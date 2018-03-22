import { handleAction } from '../actions/handleaction';

const initialState = {
    data : [],
}


const GlobalReducer = (state = initialState, actions) => {
    // console.log('action payload', actions.payload)
    switch (actions.type) {
        case handleAction.GETGLOBAL:
            return {...state, data: actions.payload}
            break;
        default:
      return state
    }
}

export default GlobalReducer;