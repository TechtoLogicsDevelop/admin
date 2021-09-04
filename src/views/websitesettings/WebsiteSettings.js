import React from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
 
  CCard,
 
  CCardHeader,
  CCol,
  
  CRow
  
} from '@coreui/react'



const WebsiteSettings = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Website Settings
			  <div className="text-right">
			 <CHeaderNavLink   to="/storesettings">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			 <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/storestatus">Store Status</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/physicalsetup">Physical Dimension Settings</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/seoptimize"> Search Engine optimization</CHeaderNavLink>
        </CHeaderNavItem>
       
       
      </CHeaderNav>
	  
          </CCardHeader>
		    
           
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default WebsiteSettings
