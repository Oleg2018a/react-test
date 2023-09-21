import React, { Component } from 'react'
 
export class Counter extends Component {
  state = {
    counter: 0,
  };

  handlerClickEncrement = () => {
    this.setState((prev) => {
      return { counter: prev.counter + 1 }
    })
  }

  hendleClickDecrement = () => {
    this.setState((prev) => {
     return { counter: prev.counter - 1 } 
    })
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p>{this.state.counter}</p>
        <div>
          <button onClick={this.handlerClickEncrement}>+</button>
          <button onClick={this.hendleClickDecrement}>-</button>
        </div>
      </div>
    );
  }  
}

export default Counter