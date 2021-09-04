import React, { useState } from 'react'
import {
  CBadge,
   CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CSwitch,
    CModal,
   CModalHeader,
   CModalTitle,
   CModalBody,
   CForm,
   CFormGroup,
   CLabel,
   CInput,
   CSelect,
   CModalFooter,
   CTextarea,
   CInputFile,
   CButton,
   CInputCheckbox,
    CPagination,
  CRow
} from '@coreui/react'

const ProfileSettings = () => {
	
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            My Profile 
			  <div className="text-right">
			 <CHeaderNavLink   to="/usersprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
		   <CCardHeader className="text-center">
		  
           <CHeaderNav className="d-md-down-none mr-auto" className="text-center">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/settingsmyprofile"> Profile</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/myprofilesettings"> Settings</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/profilesubscription"> Subscriptions</CHeaderNavLink>  
        </CHeaderNavItem>
         <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/profileverification"> Verification</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/profileactivity"> Activity</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/profileaccount"> Account</CHeaderNavLink>  
        </CHeaderNavItem>
      </CHeaderNav>
	   </CCardHeader>
           
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ProfileSettings
