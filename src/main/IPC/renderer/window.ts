import { ipcRenderer } from 'electron';

const windowIpcRenderer = {
  send(channel: string, ...args: unknown[]): void {
    const validChannels = ['window:minimize', 'window:min-max', 'window:close'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, ...args);
    }
  },
};

export default windowIpcRenderer;
