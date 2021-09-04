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
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const JobReviews = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Reviews
            </CCardHeader>
			 <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/companyreviews">Company Reviews</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/candidatereviews"> Candidate Reviews</CHeaderNavLink> 
        </CHeaderNavItem>
       
		
      </CHeaderNav>
	  
          </CCardHeader>
		  
		  
		    
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default JobReviews
