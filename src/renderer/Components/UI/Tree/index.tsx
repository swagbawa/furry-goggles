import React from 'react';
import { VscChevronRight } from 'react-icons/vsc';
import './index.css';
import { DirectoryContent, Directory } from '../../../../types/directory';

interface TreeItemProps {
  readonly branch: Directory;
  readonly onSelectCallback: (branch: Directory) => void;
  readonly paddingValue: number;
}

export interface RecursiveTreeProps {
  readonly listMeta: DirectoryContent | null | undefined;
  readonly height: number;
  readonly onSelectCallback: (branch: Directory) => void;
}
export interface RecursiveTreeState {
  activeList: Directory[] | null | undefined;
  directoriesStatus: { [key: string]: boolean };
  scrollTop: number;
}
const TreeItem = ({
  branch,
  onSelectCallback,
  paddingValue,
}: TreeItemProps) => {
  return (
    <div className="w-100">
      <button
        style={{
          paddingLeft: `${paddingValue}px`,
        }}
        className="w-full m-0 text-gray-300 shadow-none rounded-none py-0.5 hover:bg-[#003340] hover:transform-none"
        type="button"
        onClick={() => {
          onSelectCallback(branch);
        }}
      >
        <div className="pl-4 relative flex items-center w-100">
          {branch.fileType === 'directory' && (
            <div className="absolute left-0 h-full flex items-center">
              <VscChevronRight />
            </div>
          )}
          {branch.icon}
          <span className="pl-2">{branch.name}</span>
        </div>
      </button>
    </div>
  );
};

class RecursiveTree extends React.Component<
  RecursiveTreeProps,
  RecursiveTreeState
> {
  myRef: React.RefObject<HTMLDivElement>;

  constructor(props: RecursiveTreeProps) {
    super(props);
    this.state = {
      activeList: [],
      directoriesStatus: {},
      scrollTop: 0,
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const { listMeta } = this.props;
    const folders: Directory[] = [];
    const files: Directory[] = [];
    const keys = this.keysFinder((listMeta as DirectoryContent)?.path);
    keys?.forEach((item) => {
      if (listMeta?.data[item].fileType === 'directory')
        folders.push(listMeta?.data[item]);
      else files.push((listMeta as DirectoryContent)?.data[item]);
    });
    const newActiveList = folders.concat(files);
    this.setState({
      activeList: newActiveList,
    });
  }

  keysFinder = (path: string) => {
    const { listMeta } = this.props;
    const regxPath = path.replace('/', '\\/');
    const re = new RegExp(`^${regxPath}\\/[^\\/]+$`);
    return Object.keys((listMeta as DirectoryContent)?.data).filter((item) =>
      re.test(item)
    );
  };

  directoryItemClickHandler = (branch: Directory) => {
    const { onSelectCallback, listMeta } = this.props;
    const { activeList, directoriesStatus } = this.state;
    const folders: Directory[] = [];
    const files: Directory[] = [];
    const newDirectoriesStatus = { ...directoriesStatus };
    if (branch.fileType === 'directory') {
      if (directoriesStatus[branch.path]) {
        const regxPath = branch.path.replace('/', '\\/');
        const re = new RegExp(`^${regxPath}\\/.+$`);
        newDirectoriesStatus[branch.path] = false;
        const newActiveList = activeList?.filter((item) => !re.test(item.path));
        this.setState({
          activeList: newActiveList,
          directoriesStatus: newDirectoriesStatus,
        });
      } else {
        const newActiveList = [...(activeList as Directory[])];
        const idx = newActiveList.findIndex(
          (item) => item.path === branch.path
        );
        const childrens = this.keysFinder(branch.path);
        newDirectoriesStatus[branch.path] = true;
        childrens?.forEach((item) => {
          if (listMeta?.data[item].fileType === 'directory')
            folders.push(listMeta?.data[item]);
          else files.push((listMeta as DirectoryContent)?.data[item]);
        });
        const newActiveListItems = folders.concat(files);
        newActiveList.splice(idx + 1, 0, ...newActiveListItems);
        this.setState({
          activeList: newActiveList,
          directoriesStatus: newDirectoriesStatus,
        });
      }
    }
    onSelectCallback(branch);
  };

  render() {
    const { activeList, scrollTop } = this.state;
    const { height } = this.props;
    const availableHeight = height - 121;
    const scrollBottom = scrollTop + availableHeight;

    const rowHeight = 28.5;
    const numRows = activeList?.length ? activeList?.length : 0;
    const totalHeight = rowHeight * numRows;

    const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - 5);
    const endIndex = Math.min(numRows, Math.ceil(scrollBottom / rowHeight) + 5);

    const items = [];
    let index = startIndex;
    while (index < endIndex) {
      items.push(
        <TreeItem
          branch={(activeList as Directory[])[index]}
          key={(activeList as Directory[])[index].path}
          onSelectCallback={this.directoryItemClickHandler}
          paddingValue={(activeList as Directory[])[index].layer * 10}
        />
      );
      index += 1;
    }
    return (
      <div
        className="overflow-auto"
        ref={this.myRef}
        onScroll={() => {
          this.setState({
            scrollTop: this.myRef.current?.scrollTop as number,
          });
        }}
      >
        <div
          style={{
            paddingTop: `${startIndex * rowHeight}px`,
            height: `${totalHeight}px`,
          }}
        >
          {items}
        </div>
      </div>
    );
  }
}

export default RecursiveTree;
