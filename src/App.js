import React, { Component } from "react";
import DropDownList from "./components/DropDownList";
import DropDownButton from './components/DropDownButton';
import { connect } from "react-redux";
import { toggleList } from "./actions/dropDownActions";

class App extends Component {
  toggleListDisplay = e => this.props.dispatch(toggleList());

  render() {
    const { itemList, listOpen, displayText } = this.props.dropDown;
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 20
        }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <DropDownButton onClick={this.toggleListDisplay} text={displayText} />
          {listOpen && (
            <DropDownList list={itemList} dispatch={this.props.dispatch} />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    dropDown: state
  };
};
export default connect(mapStateToProps)(App);
