import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch(action.type){
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; //ES6 magic. creates new array. "..." arrayA ...arrayB === arrayA.flatten(arrayB). Always create and return new arrays, never mutate state in place
  }

  return state
}