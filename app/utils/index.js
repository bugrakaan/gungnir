import XMLParser from 'fast-xml-parser';
import path from 'path';
import FS from 'fs';

export const getLibraryItems = () => {
  const SettingsXML = FS.readFileSync(path.resolve(__dirname, './mockdata/cemusettings.xml')).toString();
  const Settings = XMLParser.parse(SettingsXML);
  const { content: { GameCache: { Entry: gameList } = {} } = {} } = Settings

  return gameList;
}