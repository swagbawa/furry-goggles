import { ipcRenderer } from 'electron';

const directoryIpcRenderer = {
  invoke(channel: string, ...args: unknown[]) {
    const validChannels = [
      'directory:openFinder',
      'directory:content',
      'directory:readFile',
    ];
    if (validChannels.includes(channel)) {
      return ipcRenderer.invoke(channel, ...args);
    }
    return null;
  },
};

export default directoryIpcRenderer;
