import React, { Component } from 'react';
import DropDown from './DropDown';
import { connect } from 'react-redux';

class App extends Component {

  toggleListDisplay = (e) => {
    const { listOpen } = this.props.dropDown;
    this.props.dispatch({type: 'UPDATE_DROPDOWN_STATE', payload: {listOpen: !listOpen}});
  }

  render() {
    const {adultCount, childCount, babyCount, listOpen} = this.props.dropDown;
    const displayText = `${adultCount} Adult ${childCount} Child ${babyCount} Baby`;
    const list = [
      {text: 'Adults(+12 years)', count: adultCount},
      {text: 'Children(2-11 years)', count: childCount}, 
      {text: 'Babies(-2 years)', count: babyCount}
    ]
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 20}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <button style={{width: 200}} onClick={this.toggleListDisplay}>{displayText}</button>
          {listOpen && 
            <DropDown list={list} />
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      dropDown: state
  }
}
export default connect(mapStateToProps)(App);

// export default App;
