import React, { Component } from 'react';

export default class LibraryEntry extends Component {

  render() {
    const { backgroundImage, name } = this.props;

    return (
      <div className="LibraryEntry">
        <div className="LibraryEntry-backdrop" style={{ backgroundImage: `url('${backgroundImage}')` }}></div>
        <div className="LibraryEntry-item" style={{ backgroundImage: `url('${backgroundImage}')` }}>
          <div className="LibraryEntry-gradient"></div>
          <div className="LibraryEntry-name">{name}</div>
        </div>
      </div>
    );
  }
}
