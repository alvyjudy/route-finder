import {createStore} from "redux";

import {SET_LOCATIONS} from "./actions";

const initialState = {pickup: "", dest: ""}

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      return {
        ...state,
        pickup: action.pickup,
        dest: action.dest
      }

    default: 
      return state
  }
}

const store = createStore(reducer);

export default store;