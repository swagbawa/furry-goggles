import GitHubIcon from '../../../../../assets/icons/github.svg';
import FileIcon from '../../../../../assets/icons/file-earmark.svg';
import SettingIcon from '../../../../../assets/icons/gear.svg';
import UserIcon from '../../../../../assets/icons/person-circle.svg';

type Item = {
  key: string;
  icon: string;
};
const menuItems = {
  upper: [
    {
      key: 'Files',
      icon: FileIcon,
    },
    {
      key: 'GitHub',
      icon: GitHubIcon,
    },
  ],
  lower: [
    {
      key: 'Setting',
      icon: SettingIcon,
    },
    {
      key: 'Profile',
      icon: UserIcon,
    },
  ],
};
const menuRenderer = (list: Item[]) => {
  return list.map((item) => (
    <div key={item.key} className="side-icon w-100 p-3">
      <img className="min-w-full" src={item.icon} alt="img" />
    </div>
  ));
};
const IconMenu = () => {
  return (
    <div
      className="flex flex-col min-h-full justify-between"
      style={{ background: '#003847' }}
    >
      <div className="flex flex-col w-100">{menuRenderer(menuItems.upper)}</div>
      <div className="flex flex-col w-100">{menuRenderer(menuItems.lower)}</div>
    </div>
  );
};

export default IconMenu;
