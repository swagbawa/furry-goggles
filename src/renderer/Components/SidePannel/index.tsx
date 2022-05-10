import { Directory } from 'types/directory';
import Explorer from '../Explorer';

interface Props {
  currentDirectory: string;
  fileClickHandler: (value: Directory) => void;
}
const SidePannel = ({ currentDirectory, fileClickHandler }: Props) => {
  return (
    <div className="h-full" style={{ backgroundColor: '#00212B' }}>
      <Explorer
        currentDirectory={currentDirectory}
        fileClickHandler={fileClickHandler}
      />
    </div>
  );
};

export default SidePannel;
