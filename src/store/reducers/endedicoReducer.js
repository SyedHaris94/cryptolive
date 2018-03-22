import { handleAction } from '../actions/handleaction';

const initialState = {
    end_ico_data: [],
}

const EndedICOReducer = ( state = initialState, actions) => {
    // console.log('action payload', actions.payload)
    switch (actions.type) {
        case handleAction.SEND_END_ICO:
            return { ...state }
            break;
        case handleAction.GET_END_ICO:
            return {...state, end_ico_data: actions.payload}
            break;
        default:
            return state
    }

}

export default EndedICOReducer;