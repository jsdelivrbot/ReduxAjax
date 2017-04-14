import { combineReducers } from 'redux';
import WeatherRecuder from './reducerWeather'

const rootReducer = combineReducers({
  weather: WeatherRecuder
});

export default rootReducer;
