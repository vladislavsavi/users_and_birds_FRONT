import { FC, useState } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import { Menu as ANTMenu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  YuqueOutlined,
} from "@ant-design/icons";

export const Menu: FC = () => {
  const [collaps, setCollaps] = useState<boolean>(true);
  const location = useLocation();

  return (
    <ANTMenu
      style={{ maxWidth: 256 }}
      defaultSelectedKeys={[location.pathname]}
      mode="inline"
      inlineCollapsed={collaps}
    >
      <ANTMenu.Item
        key="0"
        onClick={() => setCollaps((collaps) => !collaps)}
        icon={collaps ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      />
      <ANTMenu.Item key="/birds" icon={<YuqueOutlined />}>
        <NavLink to="/birds">Birds</NavLink>
      </ANTMenu.Item>
      <ANTMenu.Item key="/users" icon={<UserOutlined />}>
        <NavLink to="/users">Users</NavLink>
      </ANTMenu.Item>
    </ANTMenu>
  );
};
