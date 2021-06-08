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

import MainChartExample from '../charts/MainChartExample.js'



const DisplaySettings = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Display Settings
            </CCardHeader>
			 <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/displaysetup">Display Setup</CHeaderNavLink>
        </CHeaderNavItem>
		
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/categorysetup"> Category Setup</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/productssetup">Products Setup</CHeaderNavLink>
        </CHeaderNavItem>
		
       
      </CHeaderNav>
	  
          </CCardHeader>
		    
           
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default DisplaySettings
