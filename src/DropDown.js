import React from 'react';

const DropDown = (props) => {
    return props.list.map(item => (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', width: 200}}>
          
          <div style={{width: 150}}><p style={{fontSize: 15}}>{item.text}</p></div>
          <button style={{height: 20, width: 20}} onClick={item.onClickRemove}>-</button>
          <p style={{fontSize: 15}}>{item.count}</p>
          <button style={{height: 20, width: 20}} onClick={item.onClickAdd}>+</button>
        </div>))
}

export default DropDown;