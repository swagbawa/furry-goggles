/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import { Directory, OpenedFile } from 'types/directory';
import IconMenu from '../Menu/IconMenu';
import Editor from '../Editor/editor';
import TopMenu from '../Menu/TopMenu';
import SidePannel from '../SidePannel';
import OpenedEditiorsPanel from '../OpenedEditiorsPanel';

const Layout = () => {
  const [currentDirectory, setcurrentDirectory] = useState<string>();
  const [draggerActive, setDraggerActive] = useState(false);
  const [sidePannelWidth, setSidePannelWidth] = useState(311);
  const [openedFiles, setOpenedFiles] = useState<{ [key: string]: OpenedFile }>(
    {}
  );
  const [currentFile, setCurrentFile] = useState('');
  const [editiorText, setEditiorText] = useState('');

  const fileClickHandler = async (file: Directory) => {
    if (openedFiles[file.path]) {
      setEditiorText(openedFiles[file.path].text);
      setCurrentFile(file.path);
    } else {
      const newOpenedDir = { ...openedFiles };
      const fileData = await window.electron.directoryIpcRenderer.invoke(
        'directory:readFile',
        file.path
      );
      newOpenedDir[file.path] = {
        modified: false,
        moreInfo: file,
        text: fileData as string,
      };
      setOpenedFiles(newOpenedDir);
      setEditiorText(fileData as string);
      setCurrentFile(file.path);
    }
  };
  const fileCloseHandler = async (file: Directory) => {
    if (openedFiles[file.path]) {
      const newOpenedDir = { ...openedFiles };
      delete newOpenedDir[file.path];
      setOpenedFiles(newOpenedDir);
    }
  };
  return (
    <div
      className={`flex flex-col h-screen p-0 m-0 ${
        draggerActive && 'cursor-col-resize'
      }`}
      onMouseMove={(event) => {
        if (draggerActive) {
          setSidePannelWidth(event.clientX);
        }
      }}
      onMouseUp={() => {
        setDraggerActive(false);
      }}
    >
      <TopMenu setCurrentDirectory={setcurrentDirectory} />
      <div className="flex flex-1 overflow-hidden">
        <div style={{ width: '52px' }}>
          <IconMenu />
        </div>
        <div
          className="relative h-full overflow-auto"
          style={{ width: `${sidePannelWidth - 52}px` }}
        >
          <div
            className="absolute active:bg-blue-300 hover:bg-blue-300 active:cursor-col-resize cursor-col-resize w-1 h-full right-0"
            onMouseDown={() => {
              setDraggerActive(true);
            }}
          />
          <SidePannel
            currentDirectory={currentDirectory as string}
            fileClickHandler={fileClickHandler}
          />
        </div>
        <div
          style={{
            width: `calc(100% - ${sidePannelWidth}px)`,
          }}
        >
          <OpenedEditiorsPanel
            list={openedFiles}
            onClickHandler={fileClickHandler}
            onCloseHandler={fileCloseHandler}
            activeFile={currentFile}
          />
          <Editor text={editiorText} />
        </div>
      </div>
      <div className="h-4">Swag Baba</div>
    </div>
  );
};

export default Layout;
