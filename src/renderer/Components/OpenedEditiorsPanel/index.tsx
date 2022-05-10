import { Directory, OpenedFile } from 'types/directory';
import { CloseOutlined } from '@ant-design/icons';
import IconWrapper from '../Explorer/iconWrapper';

interface Props {
  list: { [key: string]: OpenedFile };
  onClickHandler: (file: Directory) => void;
  onCloseHandler: (file: Directory) => void;
  activeFile: string;
}
const OpenedEditiorsPanelItem = (
  item: Directory,
  onClickHandler: (file: Directory) => void,
  onCloseHandler: (file: Directory) => void,
  activeFile: string
) => {
  const { name, fileType, path } = item;
  return (
    <button
      type="button"
      className={`flex justify-center items-center rounded-none pl-2 pr-10 hover:transform-none border-0 border-solid border-r-2 border-[#002B36] relative group cursor-pointer ${
        activeFile === path && 'bg-[#002B37]'
      }`}
      key={path}
      onClick={() => onClickHandler(item)}
    >
      <IconWrapper name={name} type={fileType} />
      <p className="m-0 p-0 pl-2 text-[#90A4AE] text-xs">{name}</p>
      <button
        type="button"
        className="hidden group-hover:flex justify-center items-center p-0.5 hover:bg-[#e1FFFF4D] rounded last:mr-1 absolute right-0"
      >
        <CloseOutlined
          style={{ color: '#90A4AE' }}
          onClick={() => onCloseHandler(item)}
        />
      </button>
    </button>
  );
};
const OpenedEditiorsPanel = ({
  list,
  onClickHandler,
  onCloseHandler,
  activeFile,
}: Props) => {
  return (
    <div className="bg-[#004052] h-9 flex">
      {Object.keys(list).map((item) =>
        OpenedEditiorsPanelItem(
          list[item].moreInfo,
          onClickHandler,
          onCloseHandler,
          activeFile
        )
      )}
    </div>
  );
};

export default OpenedEditiorsPanel;
