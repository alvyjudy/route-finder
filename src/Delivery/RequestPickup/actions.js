export const SET_LOCATIONS = "SET_LOCATIONS";
export const SET_DISTANCE = "SET_DISTANCE";

export const setLocations = (pickup, dest) => {
  return {type: SET_LOCATIONS,
    pickup, 
    dest
  }
}

export const setDistance = (distance) => {
  return {type: SET_DISTANCE, distance}
}