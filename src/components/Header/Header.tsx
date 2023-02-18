import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LeftMenu } from "./LeftMenu";
import { Drawer, Button } from "antd";
// import {Menu, Grid } from "antd";

export const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const drawerOnClose = () => {
    setVisible(false);
  };
  return (
    <div className='navbar-section'>
      <div className='container'>
        <nav className='navbar'>
          <div className='navbar-logo'>
            <NavLink
              to='/'
              className={({ isActive }) => {
                const linkClasses = ["navbar-item"];
                if (isActive) linkClasses.push("is-active");
                return linkClasses.join(" ");
              }}
            >
              <img src={require("../../assets/logo/supplyally.png")} alt='' />
            </NavLink>
          </div>
          <div className='navbar-menu'>
            <div className='navbar-left-menu'>
              <LeftMenu />
            </div>

            
            {/* <div className="navbar-right-menu">
              <RightMenu />
            </div> */}
          </div>
          <div>
            <Button
              className='navbar-btnBars'
              type='primary'
              onClick={showDrawer}
            >
              <span className='navbar-btnBars-span'></span>
            </Button>
            <Drawer
              title='Drawer navbar'
              placement='right'
              closable={true}
              onClose={drawerOnClose}
              visible={visible}
            >
              <LeftMenu />
              {/* <RightMenu /> */}
            </Drawer>
          </div>
        </nav>
      </div>
    </div>
  );
};
