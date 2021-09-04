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


const JobsPayment = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Jobs Payment
            </CCardHeader>
			 <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/approvepayment">Approve </CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/paymentarchive"> Payment Archive</CHeaderNavLink> 
        </CHeaderNavItem>
        <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/jobpackages">Packages</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/subscriptions">Subscriptions </CHeaderNavLink>
        </CHeaderNavItem>
		
      </CHeaderNav>
	  
          </CCardHeader>
		  
		   <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/creditpayments"> Credits Pricing</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/directpayments">Direct Payments</CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/jobcoupons">Coupons </CHeaderNavLink>
        </CHeaderNavItem>
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/invoicelist"> Invoices</CHeaderNavLink>
        </CHeaderNavItem>
		<CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/invoicesetup"> Invoice Settings</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
	  
          </CCardHeader>
		    
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default JobsPayment
