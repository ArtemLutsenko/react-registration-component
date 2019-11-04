import { UserActionTypes } from "./userActionTypes";

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})

export const getCurrentUser = () => ({
  type: UserActionTypes.GET_CURRENT_USER,
})