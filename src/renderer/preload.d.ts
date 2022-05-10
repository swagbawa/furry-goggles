import { DirectoryContent } from '../types/directory';

declare global {
  interface Window {
    electron: {
      directoryIpcRenderer: {
        invoke(
          channel: string,
          ...args: unknown[]
        ): Promise<DirectoryContent | object | string>;
      };
      windowIpcRenderer: {
        send(channel: string, ...args: unknown[]): void;
      };
      ipcRenderer: {
        myPing(): void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        on(channel: string, func: (...args: any[]) => void): void;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        once(channel: string, func: (...args: any[]) => void): void;
      };
    };
  }
}

export {};
