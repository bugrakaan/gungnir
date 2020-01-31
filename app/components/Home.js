import React, { Component } from 'react';
import XMLParser from 'fast-xml-parser';
import FS from 'fs';
import Library from './Library';

export default class Home extends Component {

  get libraryItems() {
    const SettingsXML = FS.readFileSync("F:\\Oyunlar\\Cemu\\settings.xml").toString();
    const Settings = XMLParser.parse(SettingsXML);

    const { content: { GameCache: { Entry: gameList } = {} } = {} } = Settings
    return gameList;
  }

  render() {
    return (
      <div className="App">
        <div className="Header" />
        <Library items={this.libraryItems} />
        <div className="Footer" />
      </div>
    );
  }
}
