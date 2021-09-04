import React from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



const Miscellaneous = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            Miscellaneous Settings
			 <div className="text-right">
			 <CHeaderNavLink   to="/storesettings">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			 <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/emailsetup">Email Setup</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/advsetup">Advanced Store Settings</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/googlesetup"> Google Settings</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/docsetup"> Purchase & Sales Doc Settings</CHeaderNavLink>
        </CHeaderNavItem>
       
      </CHeaderNav>
	  
          </CCardHeader>
		    
           
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Miscellaneous
