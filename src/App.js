import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DropDown from './DropDown';

class App extends Component {
  constructor() {
    super();
    this.state = {
      adultCount: 1,
      childCount: 1,
      babyCount: 1,
      listOpen: false,
    };
  }

  toggleListDisplay = (e) => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  onClickAdd = (e) => {
    this.setState(prevState => ({
      adultCount: prevState.adultCount+1,
    }))
  }

  onClickRemove = (e) => {
    console.log(this.text);
    this.setState(prevState => ({
      adultCount: prevState.adultCount-1,
    }))
  }

  render() {
    const {adultCount, childCount, babyCount, listOpen} = this.state;
    const displayText = `${adultCount} Adult ${childCount} Child ${babyCount} Baby`;
    const list = [
      {text: 'Adults(+12 years)', count: adultCount, onClickAdd:this.onClickAdd, onClickRemove: this.onClickRemove },
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

export default App;
