import React from 'react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CProgress,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const Entitlement = () => {
  const [visible, setVisible] = React.useState(10)

  return (
    <>
      <CRow>
        <CCol xs="12" md="4">
          <CCard>
            <CCardHeader className="text-center">
              Anual Leave (25)
              
            </CCardHeader>
            <CCardBody>
              <CAlert color="primary">
                <CAlert color="primary">
                <strong>Period Start 2021-01-01</strong><br/>
               <strong> Period End 2021-12-31</strong><br/>
                Leave Days from Current Leave Period <strong>25</strong><br/>
                Paid Time Off Adjustments + <strong>(0)</strong><br/>
                Leave Days Carried Forward Previous Period +<strong> (0)</strong>
              </CAlert>
              </CAlert>
              <CAlert color="secondary">
                Leave Days Available to Use 25
				 <CCardBody>
          <CProgress value={5} className="mb-3" style={{height: "3px"}}/>
          
        </CCardBody>
              </CAlert>
              <CAlert color="success">
               Approved Leave Days 0
			    <CCardBody>
          <CProgress value={5} className="mb-3" style={{height: "3px"}}/>
          
        </CCardBody>
              </CAlert>
              <CAlert color="danger">
                Pending Leave Days 0
				 <CCardBody>
          <CProgress value={5} className="mb-3" style={{height: "3px"}}/>
          
        </CCardBody>
              </CAlert>
              <CAlert color="warning">
                Rejected Leave Days 0
				 <CCardBody>
          <CProgress value={5} className="mb-3" style={{height: "3px"}}/>
          
        </CCardBody>
              </CAlert>
             
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" md="4">
          <CCard>
            <CCardHeader className="text-center">
             Casual Leave (8)
              
            </CCardHeader>
            <CCardBody>
              <CAlert color="primary">
               <CAlert color="primary">
                <strong>Period Start 2021-01-01</strong><br/>
               <strong> Period End 2021-12-31</strong><br/>
                Leave Days from Current Leave Period <strong>8</strong><br/>
                Paid Time Off Adjustments + <strong>(0)</strong><br/>
                Leave Days Carried Forward Previous Period + <strong>(0)</strong>
              </CAlert>
              </CAlert>
              <CAlert color="secondary">
			   Leave Days Available to Use 8
                <CCardBody>
          <CProgress value={5} className="mb-3" style={{height: "3px"}}/>
          
        </CCardBody>
              </CAlert>
              <CAlert color="success">
               Approved Leave Days 0
			    <CCardBody>
          <CProgress value={5} className="mb-3" style={{height: "3px"}}/>
          
        </CCardBody>
              </CAlert>
              <CAlert color="danger">
                Pending Leave Days 0
				 <CCardBody>
          <CProgress value={5} className="mb-3" style={{height: "3px"}}/>
          
        </CCardBody>
              </CAlert>
              <CAlert color="warning">
                Rejected Leave Days 0
				 <CCardBody>
          <CProgress value={5} className="mb-3" style={{height: "3px"}}/>
          
        </CCardBody>
              </CAlert>
              
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" md="4">
          <CCard>
            <CCardHeader className="text-center">
              Medical Leave (8)
              
            </CCardHeader>
            <CCardBody>
              <CAlert color="primary">
                <CAlert color="primary">
                <strong>Period Start 2021-01-01</strong><br/>
               <strong> Period End 2021-12-31</strong><br/>
                Leave Days from Current Leave Period <strong>8</strong><br/>
                Paid Time Off Adjustments + <strong>(0)</strong><br/>
                Leave Days Carried Forward Previous Period + <strong>(0)</strong>
              </CAlert>
              </CAlert>
              <CAlert color="secondary">
                 Leave Days Available to Use 8
                <CCardBody>
          <CProgress value={5} className="mb-3" style={{height: "3px"}}/>
          
        </CCardBody>
              </CAlert>
              <CAlert color="success">
               Approved Leave Days 0
			    <CCardBody>
          <CProgress value={5} className="mb-3" style={{height: "3px"}}/>
          
        </CCardBody>
              </CAlert>
              <CAlert color="danger">
                Pending Leave Days 0
				 <CCardBody>
          <CProgress value={5} className="mb-3" style={{height: "3px"}}/>
          
        </CCardBody>
              </CAlert>
              <CAlert color="warning">
                Rejected Leave Days 0
				 <CCardBody>
          <CProgress value={5} className="mb-3" style={{height: "3px"}}/>
          
        </CCardBody>
              </CAlert>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
     
    </>
  )
}

export default Entitlement
