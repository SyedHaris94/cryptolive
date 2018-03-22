import { handleAction } from '../actions/handleaction';

const initialState = {
    crypto_data : [],
}

const CryptoReducer = ( state = initialState, actions) => {
    // console.log('action payload', actions.payload)
    switch (actions.type) {
        case handleAction.SENDCRYPTO:
            return {...state, }
            break;
        case handleAction.GETCRYPTO:
            return { ...state, crypto_data: actions.payload}
        default:
            return state
    }

}

export default CryptoReducer;