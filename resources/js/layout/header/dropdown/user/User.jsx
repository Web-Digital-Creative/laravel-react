import React, { useState } from "react";
import UserAvatar from "../../../../components/user/UserAvatar";
import { DropdownToggle, DropdownMenu, Dropdown } from "reactstrap";
import { Icon } from "../../../../components/Component";
import { LinkList, LinkItem } from "../../../../components/links/Links";
import { useTheme, useThemeUpdate } from "../../../provider/Theme";

const User = () => {
  const theme = useTheme();
  const themeUpdate = useThemeUpdate();
  const [open, setOpen] = useState(false);
  const toggle = () => {
    themeUpdate.sidebarHide();
    setOpen((prevState) => !prevState)
  };

  const isCrypto = () => {
    if (window.location.pathname.split("/")[2] === "crypto") return true;
    else return false;
  };

  return (
    <Dropdown isOpen={open} className="user-dropdown" toggle={toggle}>
      <DropdownToggle
        tag="a"
        href="#toggle"
        className="dropdown-toggle"
        onClick={(ev) => {
          ev.preventDefault();
        }}
      >
        <div className="user-toggle">
          <UserAvatar icon="user-alt" className="sm" />
          <div className="user-info d-none d-md-block">
            <div className="user-status">Administrator</div>
            <div className="user-name dropdown-indicator">Abu Bin Ishityak</div>
          </div>
        </div>
      </DropdownToggle>
      <DropdownMenu end className="dropdown-menu-md dropdown-menu-s1">
        <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
          <div className="user-card sm">
            <div className="user-avatar">
              <span>AB</span>
            </div>
            <div className="user-info">
              <span className="lead-text">Abu Bin Ishtiyak</span>
              <span className="sub-text">info@softnio.com</span>
            </div>
          </div>
        </div>
        <div className="dropdown-inner">
        {isCrypto() ? (
          <LinkList>
            <LinkItem link="/crypto/user-profile-regular" icon="user-alt" onClick={toggle}>
              View Profile
            </LinkItem>
            <LinkItem link="/crypto/user-profile-setting" icon="setting-alt" onClick={toggle}>
              Account Setting
            </LinkItem>
            <LinkItem link="/crypto/user-profile-activity" icon="activity-alt" onClick={toggle}>
              Login Activity
            </LinkItem>
            <li>
              <a className={`dark-switch ${theme.skin === 'dark' ? 'active' : ''}`} href="#" 
              onClick={(ev) => {
                ev.preventDefault();
                themeUpdate.skin(theme.skin === 'dark' ? 'light' : 'dark');
              }}>
                {theme.skin === 'dark' ? 
                  <><em className="icon ni ni-sun"></em><span>Light Mode</span></> 
                  : 
                  <><em className="icon ni ni-moon"></em><span>Dark Mode</span></>
                }
              </a>
            </li>
          </LinkList>
          ) : (
            <LinkList>
              <LinkItem link="/user-profile-regular" icon="user-alt" onClick={toggle}>
                View Profile
              </LinkItem>
              <LinkItem link="/user-profile-setting" icon="setting-alt" onClick={toggle}>
                Account Setting
              </LinkItem>
              <LinkItem link="/user-profile-activity" icon="activity-alt" onClick={toggle}>
                Login Activity
              </LinkItem>
              <li>
                <a className={`dark-switch ${theme.skin === 'dark' ? 'active' : ''}`} href="#" 
                onClick={(ev) => {
                  ev.preventDefault();
                  themeUpdate.skin(theme.skin === 'dark' ? 'light' : 'dark');
                }}>
                  {theme.skin === 'dark' ? 
                    <><em className="icon ni ni-sun"></em><span>Light Mode</span></> 
                    : 
                    <><em className="icon ni ni-moon"></em><span>Dark Mode</span></>
                  }
                </a>
              </li>
            </LinkList>
          ) }
        </div>
        <div className="dropdown-inner">
          <LinkList>
            <a href={route('logout')}>
              <Icon name="signout"></Icon>
              <span>Sign Out</span>
            </a>
          </LinkList>
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

export default User;
