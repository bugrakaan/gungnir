import React, { Component } from 'react';

export default class LibraryEntry extends Component {

  render() {
    const { backgroundImage, name } = this.props;

    return (
      <div className="LibraryEntry-wrapper">
        <a href="javascript:;">
          <div class="LibraryEntry-backdrop" style={{ backgroundImage: `url('${backgroundImage}')` }}></div>
          <div class="LibraryEntry" style={{ backgroundImage: `url('${backgroundImage}')` }}>
            <div class="LibraryEntry-gradient"></div>
            <div class="LibraryEntry-name">{name}</div>
          </div>
        </a>
      </div>
    );
  }
}
