import React, { Component} from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import "./App.css";
import AddFixture from './components/AddFixture.jsx'
import CheckPrice from './components/CheckPrice.jsx'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      fixture: '',
      price: ''
    }
  }


  // componentDidMount() {
  //   var easyWay = this;
  //   $.get('/root', function(data) {
  //     console.log(data)
  //   })
  // }

  changeFixture(input) {
    this.setState({
      fixture: input.target.value
    })
  }

  changePrice(input) {
    this.setState({
      price: input.target.value
    })
  }

  create() {
    console.log(this.state)
    $.post('/fixtures', {fixtureName: this.state.fixture, fixturePrice: this.state.price}, function(data) {
      console.log(data, 'this is from app.jsx create')
    })
  }

  check() {
    $.get('/fixtures', {fixtureName: this.state.fixture},function(data, status) {
      if (status) {
        console.log(status)
      }
      console.log('$' + data[0].price)
      alert('$' + data[0].price)
    })
  }

  render(){
    return(
      <div className="App">

        part# <input type='text' value={this.state.fixture} onChange={this.changeFixture.bind(this)}></input><br></br>
        $ <input type='text' value={this.state.price} onChange={this.changePrice.bind(this)}></input><br></br>
        <button onClick={this.create.bind(this)}>Create New Fixture</button>
        <button onClick={this.check.bind(this)}>Lookup Price</button>
      </div>
    );
  }
}

export default App;