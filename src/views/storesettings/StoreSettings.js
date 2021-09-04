import React from 'react'
import {
 
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  
  CCol,
  CRow
  
} from  '@coreui/react'


const StoreSettings = () => {
 
  return (
    <>
     
     
        <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/websitesettings">Website Settings</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/displaysettings">Display Settings</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/imagessettings">Image Settings </CHeaderNavLink>   
        
            </CCardBody>
          </CCard>
        </CCol>
		
      </CRow>
     
     <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/sharesetting">Share Settings</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/dateandtime">Date and Timezone Settings</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/statusnotification">Status Change Notifications</CHeaderNavLink>
      
            </CCardBody>
          </CCard>
        </CCol>
		
      </CRow>
      <CRow>
       
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/secureprivacy">Security & Privacy settings</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/miscellaneous">Miscellaneous settings</CHeaderNavLink>   
        
            </CCardBody>
          </CCard>
        </CCol>
		
      </CRow>
    </>
  )
}

export default StoreSettings
