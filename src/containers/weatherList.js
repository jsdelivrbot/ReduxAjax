import React, { Component } from 'react';
import { connect } from 'react-reduc';

class WeatherList extends Component {
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr> 
            <th>City</th>
            <th>Humidity</th>
            <th>Pressure</th>
            <th>Temperature</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  retrun { weather }//es6 ==={ weather: weather }
}

export default connect(mapStateToProps)(WeatherList)