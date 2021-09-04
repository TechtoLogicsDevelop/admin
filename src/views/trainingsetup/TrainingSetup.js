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


const TrainingSetup = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Training Setup
            </CCardHeader>
			 <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/courseslist">Courses</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/trainingcourses">Training Courses</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/stafftrainingcourses"> Staff Training Courses</CHeaderNavLink>
        </CHeaderNavItem>
         <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/mycourses">My Training Courses</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/alltrainingcourses">All Training Courses</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/directreports"> Training Courses for Direct Reports</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/coordinatedbyme">  Training Sessions of Coordinated by Me</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
	  
          </CCardHeader>
		    
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default TrainingSetup
