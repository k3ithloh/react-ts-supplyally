import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Grid } from "antd";

const { SubMenu, ItemGroup: MenuItemGroup } = Menu;
const { useBreakpoint } = Grid;

export const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key='key-track'>
        <NavLink className='navbar-item' to='/track'>
          Track
        </NavLink>
      </Menu.Item>
      <Menu.Item key='key-statistics'>
        <NavLink className='navbar-item' to='/stats'>
          Statistics
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};
