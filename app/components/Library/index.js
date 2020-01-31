import React, { Component } from 'react';
import LibraryEntry from './LibraryEntry';

import { getLibraryItem } from '../../utils/';

export default class Library extends Component {

  get renderLibraryItems() {
    const { items } = this.props;
    
    return items.map(item => {
      const { titleId, customName, name, backgroundImage, path } = getLibraryItem(item);

      return (
        <LibraryEntry key={titleId} name={customName || name} backgroundImage={backgroundImage} path={path} />
      );
    });
  }

  render() {
    return (
      <div className="Library">
        {this.renderLibraryItems}
      </div>
    );
  }
}
