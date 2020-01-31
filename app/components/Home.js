import React, { Component } from 'react';
import Library from './Library';

import { getLibraryItems } from '../utils';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <div className="Header" />
        <Library items={getLibraryItems()} />
        <div className="Footer" />
      </div>
    );
  }
}
