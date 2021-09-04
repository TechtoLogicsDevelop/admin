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


const LeavesManage = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Leaves Management
            </CCardHeader>
			 <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/myleaves">All My Leaves</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/entitlement">Leave Entitlement</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/approvedleave"> Approved Leave</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/pendingleave"> Pending Leave</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/leaverule"> Subordinate Leave</CHeaderNavLink>
        </CHeaderNavItem>
		<CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/paidtimeoff"> Cancellation Request</CHeaderNavLink>
        </CHeaderNavItem>
		
		<CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/employeeleavelist"> Approval Request</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
	  
          </CCardHeader>
		    
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default LeavesManage
