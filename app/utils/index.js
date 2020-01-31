import XMLParser from 'fast-xml-parser';
import path from 'path';
import FS from 'fs';
import titleList from '../constants/titlesWiiU.json';

export const getLibraryItems = () => {
  const SettingsXML = FS.readFileSync(path.resolve(__dirname, './mockdata/cemusettings.xml')).toString();
  const Settings = XMLParser.parse(SettingsXML);
  const { content: { GameCache: { Entry: gameList } = {} } = {} } = Settings

  return gameList;
}

export const getLibraryItem = item => {
  const { custom_name: customName, name, path, title_id: titleId } = item;
  const titleIdSelector = titleId.toString(16).toUpperCase();
  const { code: backgroundImage } = titleList[titleIdSelector];

  return {
    titleId, customName, name, backgroundImage, path
  };
}