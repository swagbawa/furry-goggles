import { IpcMain, dialog, BrowserWindow } from 'electron';
import fs from 'fs';
import Queue from '../../../util/queue';
import {
  DirectoryContent,
  Directory as DirectoryInterface,
} from '../../../../types/directory';

class Directory implements DirectoryInterface {
  constructor(
    name: string,
    path: string,
    fileType: 'directory' | 'file',
    layer: number
  ) {
    this.name = name;
    this.path = path;
    this.fileType = fileType;
    this.layer = layer;
  }

  name: string;

  path: string;

  fileType: 'directory' | 'file';

  icon?: JSX.Element;

  layer: number;
}

async function handleDirectoryFinder(
  window: BrowserWindow
): Promise<string | null> {
  const { canceled, filePaths } = await dialog.showOpenDialog(window, {
    properties: ['openDirectory'],
  });
  if (!canceled) {
    return filePaths[0];
  }
  return null;
}

function getDirectoryContent(path: string): object {
  try {
    const dirQueue = new Queue();
    const directoryContent: DirectoryContent = {
      directoryName: path.split('/').slice(-1)[0],
      path,
      data: {},
    };
    dirQueue.enqueue(
      new Directory(path.split('/').slice(-1)[0], path, 'directory', 0)
    );
    while (!dirQueue.isEmpty()) {
      const dir = dirQueue.front();
      dirQueue.dequeue();
      const dirTree = fs.readdirSync(dir.path, { withFileTypes: true });
      dirTree?.forEach((dirent: fs.Dirent) => {
        if (dirent.isDirectory()) {
          const temp = new Directory(
            dirent.name,
            `${dir.path}/${dirent.name}`,
            'directory',
            dir.layer + 1
          );
          directoryContent.data[
            `${dir.path}/${dirent.name}` as keyof Directory
          ] = temp;
          dirQueue.enqueue(temp);
        }
        if (dirent.isFile()) {
          const temp = new Directory(
            dirent.name,
            `${dir.path}/${dirent.name}`,
            'file',
            dir.layer + 1
          );
          directoryContent.data[
            `${dir.path}/${dirent.name}` as keyof Directory
          ] = temp;
        }
      });
    }
    return directoryContent;
  } catch (error) {
    return [];
  }
}
function getFileContent(path: string): string | object {
  try {
    return fs.readFileSync(path, 'utf-8');
  } catch (error) {
    return {};
  }
}
function init(ipcMain: IpcMain, window: BrowserWindow): void {
  ipcMain.handle('directory:openFinder', () => handleDirectoryFinder(window));
  ipcMain.handle('directory:content', (_, path) => getDirectoryContent(path));
  ipcMain.handle('directory:readFile', (_, path) => getFileContent(path));
}

export default init;
