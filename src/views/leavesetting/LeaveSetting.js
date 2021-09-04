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


const LeaveSetting = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              LeaveSetting
            </CCardHeader>
			 <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/leavetypes">Leave Types</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/leaveperiod">Leave Period</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/workweek"> Work Week</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/holidays"> Holidays</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/leaverule"> Leave Rules</CHeaderNavLink>
        </CHeaderNavItem>
		<CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/paidtimeoff"> Paid Time Off</CHeaderNavLink>
        </CHeaderNavItem>
		<CHeaderNavItem  className="px-3">
		  <CDropdown className="m-1">
              <CDropdownToggle>
                Leave Groups
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem header><CHeaderNavLink to="/leavegroup"> Edit Leave Group</CHeaderNavLink></CDropdownItem>
				 <CDropdownItem header><CHeaderNavLink to="/leavegroupemp"> Leave Group Employees</CHeaderNavLink></CDropdownItem>
               
               
              </CDropdownMenu>
            </CDropdown>
			 </CHeaderNavItem>
		<CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/employeeleavelist"> Employee leave List</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
	  
          </CCardHeader>
		    
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default LeaveSetting
