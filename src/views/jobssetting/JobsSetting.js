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


const JobsSetting = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
     
     
        <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/jobtypes">Job Types</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/joblistings">Jobs Listing</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/courseslist">Course Listings</CHeaderNavLink>   
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
          <CHeaderNavLink to="/jobalerts">Job Alerts</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		
		<CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/jobtitles">Job Titles</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/paygrade">Pay Grade</CHeaderNavLink>
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
          <CHeaderNavLink to="/jobskills">Job Skills</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/education">Education</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		
		<CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/certifications">Certifications</CHeaderNavLink>
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
          <CHeaderNavLink to="/trainsession">Training Sessions</CHeaderNavLink>  
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/experiencelevel">Experience Level</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/benefits">Benefits</CHeaderNavLink>  
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		
		
      </CRow>
	
	 
	 
    </>
  )
}

export default JobsSetting
