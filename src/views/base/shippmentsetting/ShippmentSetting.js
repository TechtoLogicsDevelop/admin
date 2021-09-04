import React, { useState } from 'react'
import {
  CBadge,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


const ShippmentSetting = () => {
  
  return (
    <>
     
     
        <CRow>
       
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/base/hubslist">Hub List</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/base/shipcustomers">Customer / Client List</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/notificationslist">Notifications List</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/rolesprivilege"> Module Permission</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/zones"> Zones Master</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		
		
      </CRow>
     
    </>
  )
}

export default ShippmentSetting
