import { Dropdown, Menu } from 'antd';
import {
  CloseOutlined,
  MinusOutlined,
  BorderOutlined,
} from '@ant-design/icons';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  setCurrentDirectory: Dispatch<SetStateAction<string | undefined>>;
}

const TopMenu = ({ setCurrentDirectory }: Props) => {
  const menuItems = {
    leftSide: [
      {
        title: 'File',
        children: [
          {
            title: 'New Project',
            clickHandler: async () => {
              const dir = await window?.electron?.directoryIpcRenderer?.invoke(
                'directory:openFinder'
              );
              if (dir) {
                setCurrentDirectory(dir as string);
              }
            },
          },
        ],
      },
      {
        title: 'View',
        children: [
          {
            title: 'New File',
            clickHandler: async () => {
              // TODO
            },
          },
          {
            title: 'New Window',
            clickHandler: async () => {
              // TODO
            },
          },
          {
            title: 'Open File',
            clickHandler: async () => {
              // TODO
            },
          },
          {
            title: 'Open Window',
            clickHandler: async () => {
              // TODO
            },
          },
        ],
      },
      {
        title: 'Terminal',
        children: [
          {
            title: 'New Terminal',
            clickHandler: async () => {
              // TODO
            },
          },
        ],
      },
      {
        title: 'Help',
        children: [
          {
            title: 'About Us',
            clickHandler: async () => {
              // TODO
            },
          },
          {
            title: 'Tutorial',
            clickHandler: async () => {
              // TODO
            },
          },
        ],
      },
    ],
    rightMenu: [
      {
        title: 'Minimize',
        icon: <MinusOutlined />,
        clickHandler: () =>
          window?.electron?.windowIpcRenderer?.send('window:minimize'),
      },
      {
        title: 'Scale',
        icon: <BorderOutlined />,
        clickHandler: () =>
          window?.electron?.windowIpcRenderer?.send('window:min-max'),
      },
      {
        title: 'Close',
        icon: <CloseOutlined />,
        clickHandler: () =>
          window?.electron?.windowIpcRenderer?.send('window:close'),
      },
    ],
  };
  return (
    <div className="flex justify-between items-center mt-1 mb-1">
      <div className="flex list-none">
        {menuItems.leftSide.map((item) => (
          <Dropdown
            key={item.title}
            trigger={['click']}
            overlay={
              <Menu>
                {item.children.map((child) => (
                  <Menu.Item
                    key={child.title}
                    onClick={child?.clickHandler}
                    className=""
                  >
                    {child.title}
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <li className="px-2 m-0">
              <a
                data-bs-toggle="dropdown"
                role="button"
                href="#ret"
                aria-expanded="false"
              >
                {item.title}
              </a>
            </li>
          </Dropdown>
        ))}
      </div>
      <div className="flex">
        {menuItems.rightMenu.map((item) => (
          <button
            type="button"
            key={item.title}
            onClick={item.clickHandler}
            className="flex justify-center items-center p-2 hover:bg-slate-200 rounded last:mr-1"
          >
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TopMenu;
