import { useState, useEffect, useCallback, useMemo } from 'react';
import { useWindowSize } from 'react-use';
import { BsThreeDots } from 'react-icons/bs';
import { VscChevronRight } from 'react-icons/vsc';
import RecursiveTree from '../UI/Tree/index';
import { DirectoryContent, Directory } from '../../../types/directory';
import IconWrapper from './iconWrapper';

interface Props {
  currentDirectory: string;
  fileClickHandler: (value: Directory) => void;
}
const iconParserHandler = (content: DirectoryContent) => {
  Object.keys(content.data).forEach((key) => {
    content.data[key].icon = (
      <IconWrapper
        name={content.data[key].name}
        type={content.data[key].fileType}
      />
    );
  });
};
const Explorer = ({ currentDirectory, fileClickHandler }: Props) => {
  const [directoryData, setDirectoryData] = useState<DirectoryContent>();
  const [isOpen, setIsOpen] = useState(true);
  const { height } = useWindowSize();
  const directoryContentLoader = useCallback(async () => {
    if (currentDirectory) {
      const content = await window.electron.directoryIpcRenderer?.invoke(
        'directory:content',
        currentDirectory
      );
      iconParserHandler(content as DirectoryContent);
      setDirectoryData(content as DirectoryContent);
    }
  }, [currentDirectory]);

  const recursiveTree = useMemo(
    () => (
      <RecursiveTree
        listMeta={directoryData}
        height={height}
        onSelectCallback={(value) => {
          if (value.fileType === 'file') {
            fileClickHandler(value);
          }
        }}
      />
    ),
    [directoryData, height, fileClickHandler]
  );
  useEffect(() => {
    directoryContentLoader();
  }, [currentDirectory, directoryContentLoader]);

  return (
    <div className="h-full overflow-hidden flex flex-col">
      <div className="p-3 flex justify-between items-center">
        <span className="text-white">EXPLORER</span>
        <BsThreeDots
          color="white"
          className="hover:bg-slate-400  bg-opacity-10 rounded-sm box-content p-1"
        />
      </div>
      {directoryData && (
        <div className="w-full flex-1 overflow-hidden flex flex-col">
          <button
            type="button"
            className="flex items-center w-full bg-[#1A343C] rounded-none hover:transform-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <VscChevronRight />
            <span className="text-white">{directoryData?.directoryName}</span>
          </button>
          {isOpen && recursiveTree}
        </div>
      )}
    </div>
  );
};

export default Explorer;
