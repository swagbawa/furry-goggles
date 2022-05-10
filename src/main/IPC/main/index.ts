import { IpcMain, BrowserWindow } from 'electron';
import windowInit from './window/index';
import directoryInit from './directory/index';

function init(ipcMain: IpcMain, window: BrowserWindow) {
  windowInit(ipcMain, window);
  directoryInit(ipcMain, window);
}

export default init;
