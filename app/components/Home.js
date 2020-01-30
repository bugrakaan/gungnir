import React, { Component } from 'react';
import Library from './Library';

export default class Home extends Component {

  render() {
    return (
      <div className="App">
        <div className="Header" />
        <Library />
        <div className="Footer" />
      </div>
    );
  }
}
