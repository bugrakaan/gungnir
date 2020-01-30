import React, { Component } from 'react';
import LibraryEntry from './LibraryEntry';

export default class Library extends Component {
  render() {
    return (
      <div className="Library">
        <LibraryEntry name="Ori and the Blind Forest" backgroundImage="https://steamcdn-a.akamaihd.net/steam/apps/387290/library_600x900_2x.jpg" />
        <LibraryEntry name="Hades" backgroundImage="https://steamcdn-a.akamaihd.net/steam/apps/1145360/library_600x900_2x.jpg" />
        <LibraryEntry name="Grand theft Auto V" backgroundImage="https://steamcdn-a.akamaihd.net/steam/apps/271590/library_600x900_2x.jpg" />
        <LibraryEntry name="Disco Elysium" backgroundImage="https://steamcdn-a.akamaihd.net/steam/apps/632470/library_600x900_2x.jpg" />
        <LibraryEntry name="SUPERHOT" backgroundImage="https://steamcdn-a.akamaihd.net/steam/apps/322500/library_600x900_2x.jpg" />
        <LibraryEntry name="Blasphemous" backgroundImage="https://steamcdn-a.akamaihd.net/steam/apps/774361/library_600x900_2x.jpg" />
        <LibraryEntry name="Cuphead" backgroundImage="https://steamcdn-a.akamaihd.net/steam/apps/268910/library_600x900_2x.jpg" />
        <LibraryEntry name="No Man's Sky" backgroundImage="https://steamcdn-a.akamaihd.net/steam/apps/275850/library_600x900_2x.jpg" />
        <LibraryEntry name="Among the Sleep" backgroundImage="https://steamcdn-a.akamaihd.net/steam/apps/250620/library_600x900_2x.jpg" />
        <LibraryEntry name="DOOM" backgroundImage="https://steamcdn-a.akamaihd.net/steam/apps/379720/library_600x900_2x.jpg" />
        <LibraryEntry name="Pinstripe" backgroundImage="https://steamcdn-a.akamaihd.net/steam/apps/331480/library_600x900_2x.jpg" />
      </div>
    );
  }
}
