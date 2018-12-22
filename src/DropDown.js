import React from 'react';
import { updateItemCount } from './actions/dropDownActions';



const DropDown = (props) => {


function onClickAdd (item) {
  const count = item.count+1;
  props.dispatch(updateItemCount(count, item.type));
}

function onClickRemove (item) {
  const count = item.count-1;
  props.dispatch(updateItemCount(count, item.type));
}
    
    return props.list.map(item => (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: 200}} key={item.type}>
          
          <div style={{width: 150}}><p style={{fontSize: 15}}>{item.type} ({item.yearRange})</p></div>
          <button style={{height: 20, width: 20}} onClick={(e) => onClickRemove(item)}>-</button>
          <p style={{fontSize: 15}}>{item.count}</p>
          <button style={{height: 20, width: 20}} onClick={(e) => onClickAdd(item)}>+</button>
        </div>))
}

export default DropDown;