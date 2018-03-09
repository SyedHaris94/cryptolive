import {handleAction} from '../actions/handleaction'

const initialState = {
    loggedIn: 'false',
}

export default function (state= initialState, action) {
    switch(action.type){
        case handleAction.LOGIN:
            return{... state, loggedIn: 'true', login: action.data}
        default: 
            return state
    }
}