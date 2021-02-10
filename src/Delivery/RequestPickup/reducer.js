import {createStore} from "redux";

import {SET_LOCATIONS, SET_DISTANCE} from "./actions";

const initialState = {pickup: "", dest: "", distance:""}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      return {
        ...state,
        pickup: action.pickup,
        dest: action.dest
      }

    case SET_DISTANCE:
      return {
        ...state,
        distance: action.distance
      }

    default: 
      return state
  }
}

const store = createStore(reducer);

export default store;