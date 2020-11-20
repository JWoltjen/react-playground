import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import reportWebVitals from './reportWebVitals';
 
class App extends React Component {
  state = {
    color: "blue"
  }
  onChangeHandler = e => {
    this.setState({
      color: e.target.value
    })
  }
  render(){
    const styleObj = {
      background = this.state.color
    }
    return (
      <div style={styleObj} className="App">
        <input 
          onChange={this.onChangeHandler}
          value={this.state.color}
          type="text" /> 
      </div>
    )
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
