import React, { lazy } from 'react'
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




const ImagesSettings = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Images Settings
			   <div className="text-right">
			 <CHeaderNavLink   to="/storesettings">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			 <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/imagessetup">Product Image Sizes</CHeaderNavLink>
        </CHeaderNavItem>
		
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/brandgroupsetup"> Product Group & Brand Images</CHeaderNavLink>
        </CHeaderNavItem>
      
		
       
      </CHeaderNav>
	  
          </CCardHeader>
		    
           
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ImagesSettings
