import React from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
    CButton,
   CCard,
  CCardBody,
 
  CCardHeader,
  CCol,
 
  CRow,
   CSwitch
  
} from '@coreui/react'

const ManageCourses = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
           Manage Courses
		   
            </CCardHeader>
		
		    <CCardHeader className="text-center">
		  
           <CHeaderNav className="d-md-down-none mr-auto" className="text-center">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/lmscourses"> Manage Courses</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/lmssubjects"> Manage Subjects</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/lmstopics"> Manage Topics</CHeaderNavLink>
        </CHeaderNavItem>
        
      </CHeaderNav>
	  
          </CCardHeader>
            <CCardBody>
               
            

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ManageCourses
