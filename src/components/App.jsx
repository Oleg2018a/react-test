import React, { Component } from 'react'
import Counter from './Counter/Counter'
import Modal from './Modal/Modal';
import Header from './Header/Header';

export class App extends Component {
  state = {
    isShowModale: true
  }
  toggleModale = () => {
    this.setState((prev)=>({isShowModale: !prev.isShowModale}))
  }
  render() {
    return (
      <>
        <Header toggleModale={this.toggleModale}></Header>
        {this.state.isShowModale && (
          <Modal toggleModale={this.toggleModale}>Нарешті!!!!</Modal>
        )}
        <Counter></Counter>
      </>
    );

  }
}

export default App
