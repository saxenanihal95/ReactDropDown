import React from "react";
import { increaseCount, decreaseCount } from "./actions/dropDownActions";
import Button from "./Button";

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
      <div style={{ width: 250 }} key={type}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderStyle: "solid",
            padding: 5
          }}>
          <div style={{ width: 200 }}>
            <p style={{ fontSize: 15 }}>
              {type} ({yearRange})
            </p>
          </div>
          <Button
            onClick={e => onClickRemove(type)}
            text="-"
            disabled={removeDisabled}
          />
          <p style={{ fontSize: 15 }}>{count}</p>
          <Button
            onClick={e => onClickAdd(type)}
            text="+"
            disabled={addDisabled}
          />
        </div>
      </div>
    );
  });
};

export default DropDown;
