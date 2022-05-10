import { IpcMain, BrowserWindow, IpcMainEvent } from 'electron';

async function example(event: IpcMainEvent, arg: string) {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
}

function init(ipcMain: IpcMain, window: BrowserWindow): void {
  ipcMain.on('window:minimize', () => window?.minimize());
  ipcMain.on('window:min-max', () =>
    window?.isMaximized() ? window?.restore() : window?.maximize()
  );
  ipcMain.on('ipc-example', example);
}

export default init;
