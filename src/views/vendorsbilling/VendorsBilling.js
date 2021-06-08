import React from 'react'
import {
	
  CHeaderNavItem,
  CHeaderNavLink,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  
 
  CFormGroup,
  
  CInput,
  
  CLabel,
  
  CRow
  
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



const VendorsBilling = () => {
 
  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Vendors Billing Address
              
            </CCardHeader>
            <CCardBody>
              
			   <CCardHeader>
              
            
				Billing Address
            </CCardHeader>
			 <CFormGroup>
			   <CFormGroup row>
                   <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/addvendors">Back </CHeaderNavLink>
        </CHeaderNavItem>
				  
                </CFormGroup>
                <CLabel htmlFor="street">Street</CLabel>
                <CInput id="street" placeholder="Enter street name" />
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput id="city" placeholder="Enter your city" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">Postal Code</CLabel>
                    <CInput id="postal-code" placeholder="Postal Code" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Country</CLabel>
                <CInput id="country" placeholder="Country name" />
              </CFormGroup>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
          
        </CCol>
            
      
      </CRow>
     
     
    </>
  )
}

export default VendorsBilling
