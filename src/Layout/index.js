import React, { Component } from 'react'
import Header from '../Components/Header/Header'
import ApproveSysMan from '../Components/Container/ApproveOrRevokeSysMan/SysMan'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Organization from '../Components/Container/ApproveOrRevokeOrganization/Organization'
import RevokeCV from '../Components/Container/RevokeCV/RevokeCV'
import AddCertificate from '../Components/Container/AddCertificate/AddCertificate'
import ViewCV from '../Components/Container/ViewCV/ViewCV'
import AddCV from './../Components/Container/AddCV/AddCV'
import CvRequest from './../Components/Container/Cv Request/CvRequest'
import Profile from './../Components/Container/Profile/Profile'
import EditProfile from './../Components/Container/Profile/EditProfile'
import SystemManLayout from './SysMan/SystemManageLayout'
import OrganizationLayout from './Organization/OrganizationLayout'
import SysMan from './../Components/Container/ApproveOrRevokeSysMan/SysMan'
import { SidebarORG } from '../Components/Data/Data'
import { SidebarUser } from './../Components/Data/Data'
import UserLayout from './User/UserLayout'
import AllowRequestCV from './../Components/Container/CV Request Allow/AllowRequestCV'
import HomePage from './HomePage/HomePage'
import ViewCertificate from './../Components/Container/ViewCertificate/ViewCertificate'

export default class SystemManage extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/home-page" element={<HomePage />}></Route>
          {/* Router sys-man */}
          <Route path="/system-manage" element={<SystemManLayout />}></Route>
          <Route
            path="/system-manage/approve-or-revoke-sysman"
            element={<SysMan />}
          />
          <Route
            path="/system-manage/approve-or-revoke-org"
            element={<Organization />}
          />
          {/* Router ORG */}
          <Route path="/org" element={<OrganizationLayout />}></Route>
          <Route path="/org/add-cv" element={<AddCV MenuName={SidebarORG} />} />

          <Route
            path="/org/add-certificate"
            element={<AddCertificate MenuName={SidebarORG} />}
          ></Route>
          <Route path="/org/revoke-cv" element={<RevokeCV />}></Route>
          <Route path="/org/view-cv" element={<ViewCV />}></Route>
          <Route path="/org/request-cv" element={<CvRequest />}></Route>
          <Route
            path="/org/view-certificate"
            element={<ViewCertificate MenuName={SidebarORG} />}
          ></Route>

          {/* Router User */}
          <Route path="/user" element={<UserLayout />}></Route>
          <Route
            path="/user/add-cv"
            element={<AddCV MenuName={SidebarUser} />}
          ></Route>
          <Route
            path="/user/add-certificate"
            element={<AddCertificate MenuName={SidebarUser} />}
          ></Route>
          <Route
            path="/user/request-see-cv"
            element={<AllowRequestCV MenuName={SidebarUser} />}
          ></Route>
          <Route
            path="/user/view-certificate"
            element={<ViewCertificate MenuName={SidebarUser} />}
          ></Route>

          {/* Router Profile */}
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/edit-profile" element={<EditProfile />}></Route>
        </Routes>
      </Router>
    )
  }
}
