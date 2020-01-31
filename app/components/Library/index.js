import React, { Component } from 'react';
import LibraryEntry from './LibraryEntry';

import titleList from '../../constants/titlesWiiU.json';

export default class Library extends Component {

  get renderLibraryItems() {
    const { items } = this.props;

    return items.map(item => {
      const { custom_name: customName, name, path, title_id: titleId } = item;
      const titleIdSelector = titleId.toString(16).toUpperCase();
      const { code: backgroundImage } = titleList[titleIdSelector];

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
