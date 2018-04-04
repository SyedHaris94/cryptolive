import { handleAction } from '../actions/handleaction';

const initialState = {
    ico_publish : [],
}

const PublishReducer = ( state = initialState, actions) => {
    // console.log('action payload', actions.payload)
    switch (actions.type) {
        case handleAction.SEND_PUBLISH:
            return { ...state }
            break;
        case handleAction.GET_PUBLISH:
            return {...state, ico_publish: actions.payload}
            break;
        default:
            return state
    }

}

export default PublishReducer;