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

const MyProfileSettings = () => {
	
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            My Profile Setting
			 <div className="text-right">
			 <CHeaderNavLink   to="/profilesettings">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
		   <CCardHeader className="text-center">
		  
           <CHeaderNav className="d-md-down-none mr-auto" className="text-center">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/settingsnotifications"> Notifications</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/settingsprivacy"> Privacy</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/settingslanguages"> Languages</CHeaderNavLink>  
        </CHeaderNavItem>
         <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/settingssync"> Sync</CHeaderNavLink>
        </CHeaderNavItem>
		
      </CHeaderNav>
	   </CCardHeader>
           
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default MyProfileSettings
