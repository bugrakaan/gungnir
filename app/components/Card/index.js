import React, { Component } from 'react';

export default class Card extends Component {

  render() {
    const { backgroundImage, name } = this.props;

    return (
      <div className="Card-wrapper">
        <a href="javascript:;">
          <div class="Card-backdrop" style={{ backgroundImage: `url('${backgroundImage}')` }}></div>
          <div class="Card" style={{ backgroundImage: `url('${backgroundImage}')` }}>
            <div class="Card-gradient"></div>
            <div class="Card-name">{name}</div>
          </div>
        </a>
      </div>
    );
  }
}
