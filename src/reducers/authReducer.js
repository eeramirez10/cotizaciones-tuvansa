import { types } from "../types/types";

const initialSatete = {

    checking: true
}


export const authReducer = ( state = initialSatete , action ) =>{

    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                checking:false,
                ...action.payload,
                
            }
        case types.authCheckingFinish:
            return {
                ...state,
                checking: false
            }
            
        default:
            return state
    }

}