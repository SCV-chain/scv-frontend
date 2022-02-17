import React, { Component } from 'react'
import { Container, Dropdown, Icon, Image, Menu } from 'semantic-ui-react'
import SidebarMenu from '../Sidebar/SidebarMenu'
import MenuItem from '../Menu/MenuItem'
import './header.css'
import SysMan from './../Container/ApproveOrRevokeSysMan/SysMan'
import Organization from './../Container/ApproveOrRevokeOrganization/Organization'
import { SidebarAccountType } from '../Data/Data'
import { Link } from 'react-router-dom'
export default class Header extends Component {
  render() {
    return (
      <Menu
        attached="top"
        tabular
        style={{
          backgroundColor: 'white',
          border: 'none',
          alignItems: 'center',
          borderRadius: 'none',
          padding: '10px',
        }}
      >
        <Container>
          <Menu.Menu>
            <Link to="/home-page" className="link">
              <Menu.Item icon="th" className="logo"></Menu.Item>
            </Link>
          </Menu.Menu>
          <Menu.Menu position="right">
            <Dropdown icon="user" className="menu-parent">
              <Dropdown.Menu className="menu-item">
                <MenuItem
                  link="/profile"
                  title="Profile"
                  nameIcon="user secret"
                />
                <MenuItem
                  link="/edit-profile"
                  title="Edit Profile"
                  nameIcon="user secret"
                />
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown text="Account Type" className="menu-parent">
              <Dropdown.Menu>
                {SidebarAccountType.map(MenuAccountType => (
                  <MenuItem
                    link={MenuAccountType.link}
                    title={MenuAccountType.title}
                    icon={MenuAccountType.icon}
                    key={MenuAccountType.id}
                  />
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }
}
