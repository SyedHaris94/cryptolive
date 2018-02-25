import { handleAction } from '../actions/handleaction';

const initialState = {
    data : [],
}


const BitcoinReducer =(state = initialState, actions) => {
    console.log('action payload', actions.payload)
    switch (actions.type) {
        case handleAction.GETCRYPTODETAIL:
            return {...state, data: actions.payload}
            break;
        default:
            return state
    }
}

export default BitcoinReducer;