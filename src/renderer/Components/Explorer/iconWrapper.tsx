import DirIcon, { DirectoryIcon } from './directoryIcon';

interface Props {
  name: string;
  type: 'directory' | 'file';
}

const returnSrc = (name: string, type: 'directory' | 'file') => {
  const icon = DirIcon.iconDefinitions;
  if (type === 'directory' && name) {
    if (name in DirIcon.folderNames) {
      return icon[DirIcon.folderNames[name as keyof DirectoryIcon]].iconPath;
    }
    return icon[DirIcon.folder].iconPath;
  }
  if (type === 'file' && name) {
    if (name in DirIcon.fileNames) {
      return icon[DirIcon.fileNames[name as keyof DirectoryIcon]].iconPath;
    }
    const extension = name.split('.').pop();
    if (extension && extension in DirIcon.fileExtensions) {
      return icon[
        DirIcon.fileExtensions[name.split('.').pop() as keyof DirectoryIcon]
      ].iconPath;
    }
    return icon[DirIcon.file].iconPath;
  }
  return null;
};

const iconWrapper = ({ name, type }: Props) => {
  let src = null;
  src = returnSrc(name, type);
  return (
    <div className="w-5">
      <img src={src} alt="logo" />
    </div>
  );
};

export default iconWrapper;
