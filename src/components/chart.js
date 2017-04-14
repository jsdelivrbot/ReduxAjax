import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

function average(data){
    var sum = data.reduce(function(acc, val){
        return acc + val;
    }, 0)

    return (sum/data.length).toFixed(0) //return Average as a whole number
};

export default (props) => {
  return (
    <div>
      <Sparklines svgHeight={100} svgWidth={180} data={props.data}>
          <SparklinesLine color={props.color}/>
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{average(props.data)}{props.units}</div>
    </div>
  )
}