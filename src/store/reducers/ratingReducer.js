import {handleAction} from '../actions/handleaction'

const initialState = {
    sendrating : "false",
    getrating : "false"

}

export default function (state= initialState, action) {
    switch(action.type){
        case handleAction.SENDRATING:
            return{... state, sendrating: 'true', sendrate: action.data}
        case handleAction.GETRATING:
            return{... state, getrating: 'true', getrate: action.data}
        default: 
            return state
    }
}