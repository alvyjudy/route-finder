export const SET_LOCATIONS = "SET_LOCATIONS";

export const setLocations = (pickup, dest) => {
  return {type: SET_LOCATIONS,
    pickup, 
    dest
  }
}