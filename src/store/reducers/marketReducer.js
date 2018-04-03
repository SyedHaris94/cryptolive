import { handleAction } from '../actions/handleaction';

const initialState = {
    market_data : [],
}

const MarketReducer = ( state = initialState, actions) => {
    // console.log('action payload', actions.payload)
    switch (actions.type) {
        case handleAction.SEND_MARKET:
            return { ...state }
            break;
        case handleAction.GET_MARKET:
            return {...state, market_data: actions.payload}
            break;
        default:
            return state
    }

}

export default MarketReducer;