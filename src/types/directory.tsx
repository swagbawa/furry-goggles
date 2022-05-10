export interface Directory {
  name: string;
  path: string;
  fileType: 'directory' | 'file';
  icon?: JSX.Element;
  layer: number;
}

export interface DirectoryContent {
  directoryName: string;
  path: string;
  data: { [key: string]: Directory };
}

export interface OpenedFile {
  modified: boolean;
  text: string;
  moreInfo: Directory;
}
