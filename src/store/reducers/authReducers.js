import {handleAction} from '../actions/handleaction'

const initialState = {
    loggedIn: 'false',
    isregistered: "false"

}

export default function (state= initialState, action) {
    switch(action.type){
        case handleAction.LOGIN:
            return{... state, loggedIn: 'true', login: action.data}
        case handleAction.SIGNUP:
            return{... state, isregistered: 'true', signup: action.data}
        default: 
            return state
    }
}