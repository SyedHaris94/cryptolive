import { handleAction } from '../actions/handleaction';

const initialState = {
    up_ico_data: [],
}

const UpcomingICOReducer = ( state = initialState, actions) => {
    // console.log('action payload', actions.payload)
    switch (actions.type) {
        case handleAction.SEND_UC_ICO:
            return { ...state }
            break;
        case handleAction.GET_UC_ICO:
            return {...state, up_ico_data: actions.payload}
            break;
        default:
            return state
    }

}

export default UpcomingICOReducer;