import React from 'react'
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


const SystemConfig = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
     
     
        <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/companyprofile">Company Profile</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/bankdetails">Bank Details Setting</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/fiscalyears">Fiscal Years</CHeaderNavLink>   
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		
      </CRow>
     
      <CRow>
	  
		<CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/carousel">Banners Carousel</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		
		
		
      </CRow>
     
    </>
  )
}

export default SystemConfig
