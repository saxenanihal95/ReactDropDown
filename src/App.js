import React, { Component } from 'react';
import DropDown from './DropDown';
import { connect } from 'react-redux';
import { toggleList } from './actions/dropDownActions';

class App extends Component {

  toggleListDisplay = (e) => this.props.dispatch(toggleList());
  

  render() {
    const {itemList, listOpen} = this.props.dropDown;
    const displayText = itemList.map(item => item.displayText).join(', ');
    return (
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 20}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <button style={{width: 200}} onClick={this.toggleListDisplay}>{displayText}</button>
          {listOpen && 
            <DropDown list={itemList} dispatch={this.props.dispatch} />
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
