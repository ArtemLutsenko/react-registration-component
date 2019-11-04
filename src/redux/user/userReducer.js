import { UserActionTypes } from "./userActionTypes";


const initialState = {
    currentUser: null
}

const userReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.GET_CURRENT_USER:
            return{
                ...state
            }

        default:
            return state;
    }
}

export default userReducer