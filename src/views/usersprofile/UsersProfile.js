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

const UsersProfile = () => {
	
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            User Profile 
			 <div className="text-right">
			 <CHeaderNavLink   to="/users">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
		   <CCardHeader className="text-center">
		  
           <CHeaderNav className="d-md-down-none mr-auto" className="text-center">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/publicprofile"> Public Profile</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/myprofilesettings"> Insights</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/base/wallettransaction"> Artcurate Wallet</CHeaderNavLink>  
        </CHeaderNavItem>
         <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/profilesettings"> Settings</CHeaderNavLink>
        </CHeaderNavItem>
		  <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/myshopview"> Shop View</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
	   </CCardHeader>
	     <CCardHeader className="text-center">
		  Business Profile
           <CHeaderNav className="d-md-down-none mr-auto" className="text-center">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/businessprofile"> Public Profile</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/myprofilesettings"> Insights</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/base/wallettransaction"> Artcurate Wallet</CHeaderNavLink>  
        </CHeaderNavItem>
         <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/profilesettings"> Settings</CHeaderNavLink>
        </CHeaderNavItem>
		  <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/institutionprofile"> Institutions</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
	   </CCardHeader>
           
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default UsersProfile
