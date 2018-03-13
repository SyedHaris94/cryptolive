import {handleAction} from '../actions/handleaction'

const initialState = {
    sendrating : "false",
    getrating : "false"

}

export default function (state= initialState, action) {
    switch(action.type){
        case handleAction.SENDRATING:
            return{... state, sendrating: 'true', sendrate: action.payload}
        case handleAction.GETRATING:
            return{... state, getrating: 'true', getrate: action.payload}
        default: 
            return state
    }
}