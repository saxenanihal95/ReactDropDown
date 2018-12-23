import React from "react";
import { increaseCount, decreaseCount } from "./actions/dropDownActions";

const DropDown = props => {
  function onClickAdd(type) {
    props.dispatch(increaseCount(type));
  }

  function onClickRemove(type) {
    props.dispatch(decreaseCount(type));
  }
  return Object.keys(props.list).map(type => {
    const { count, yearRange, addDisabled, removeDisabled } = props.list[type];
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: 200
        }}
        key={type}>
        <div style={{ width: 150 }}>
          <p style={{ fontSize: 15 }}>
            {type} ({yearRange})
          </p>
        </div>
        <button
          style={{ height: 20, width: 20 }}
          disabled={removeDisabled}
          onClick={e => onClickRemove(type)}>
          -
        </button>
        <p style={{ fontSize: 15 }}>{count}</p>
        <button
          style={{ height: 20, width: 20 }}
          disabled={addDisabled}
          onClick={e => onClickAdd(type)}>
          +
        </button>
      </div>
    );
  });
};

export default DropDown;
