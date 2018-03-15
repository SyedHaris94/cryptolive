import {handleAction} from '../actions/handleaction'

const initialState = {
    loggedIn: 'false',
    isregistered: "false",
    isprofile: 'false',
    isresset: 'false'

}

export default function (state= initialState, action) {
    switch(action.type){
        case handleAction.LOGIN:
            return {... state, loggedIn: 'true' , login: action.payload}
        case handleAction.SIGNUP:
            return {... state, isregistered: 'true', signup: action.payload}
        case handleAction.USERPROFILE:
            return {... state, isprofile: 'true', profile: action.payload}
        case handleAction.PASSWORD_RESET: 
            return {... state, isresset: 'true', reset: action.payload}

        default: 
            return state
    }
}