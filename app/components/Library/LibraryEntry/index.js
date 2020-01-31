import { shell } from 'electron';
import { spawn } from 'child_process';
import React, { Component } from 'react';

window.spawn = spawn;

export default class LibraryEntry extends Component {
  constructor(props) {
    super(props);

    this.runApplication = this.runApplication.bind(this);
  }

  get imagePath() {
    return './resources/gamecovers/wiiu';
  }

  get backgroundImage() {
    const { backgroundImage } = this.props;   
    return [this.imagePath, `${backgroundImage}.jpg`].join("/");
  }

  get defaultBackgroundImage() {
    return [this.imagePath, "_default.jpg"].join("/");
  }
  
  runApplication() {
    const { path } = this.props;
    spawn('cmd.exe', ['/c', 'start', 'F:/Oyunlar/Cemu/Cemu.exe', '-f', '-g', path]);
  }

  render() {  
    const { name } = this.props;
    const backgroundImagePath = `url('${this.backgroundImage}'),url('${this.defaultBackgroundImage}')`;

    return (
      <div className="LibraryEntry" onClick={this.runApplication}>
        <div className="LibraryEntry-backdrop" style={{ backgroundImage: backgroundImagePath }}></div>
        <div className="LibraryEntry-item" style={{ backgroundImage: backgroundImagePath }}>
          <div className="LibraryEntry-gradient"></div>
          <div className="LibraryEntry-name">{name}</div>
        </div>
      </div>
    );
  }
}
