import { handleAction } from '../actions/handleaction';

const initialState = {
    ico_data : [],
    up_ico_data: [],
    end_ico_data: [],
}

const ICOReducer = ( state = initialState, actions) => {
    console.log('action payload', actions.payload)
    switch (actions.type) {
        case handleAction.SEND_ICO:
            return {...state, ico_data: actions.payload}
            break;
        case handleAction.SEND_UC_ICO:
            return {...state, up_ico_data: actions.payload}
            break;
        case handleAction.SEND_END_ICO:
            return {...state, end_ico_data: actions.payload}
            break;
        default:
            return state
    }

}

export default ICOReducer;