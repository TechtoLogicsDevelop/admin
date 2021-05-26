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
   CSwitch,
   CFormGroup,
   CInputCheckbox,
   CLabel,
   CSelect,
   CForm,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'



const PendingOverview = () => {
  return (
    <>
      

      <CRow>
        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
             General Attributes
            </CCardHeader>
			
		   
            <CCardBody>
             

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                
                <tbody>
                  <tr>
                    <td>
                      <div>Order Id:</div>
                     
                    </td>
                    <td>
                      1
                    </td>
                 
                  </tr>
				    <tr>
                    <td>
                      <div>External Order No:</div>
                     
                    </td>
                    <td>
                      1
                    </td>
                   
                  </tr>
				  <tr>
                    <td>
                      <div>ShippingJob Type:</div>
                     
                    </td>
                    <td>
                       Pick Up
                    </td>
                   

                  </tr>
				  <tr>
                    <td>
                      <div>Package Weight(KG):</div>
                     
                    </td>
                    <td>
                      1
                    </td>
                 
                  </tr>
				    <tr>
                    <td>
                      <div>Shipper Name:</div>
                     
                    </td>
                    <td>
                      Sandeep
                    </td>
                   
                  </tr>
				  <tr>
                    <td>
                      <div>Shipper Contact Number:</div>
                     
                    </td>
                    <td>
                       9513574682
                    </td>
                   

                  </tr>
				  <tr>
                    <td>
                      <div>Seller Name:</div>
                     
                    </td>
                    <td>
                      Artcurate
                    </td>
                 
                  </tr>
				    <tr>
                    <td>
                      <div>Seller Address:</div>
                     
                    </td>
                    <td>
                      Seller Address
                    </td>
                   
                  </tr>
				  <tr>
                    <td>
                      <div>HUB Name:</div>
                     
                    </td>
                    <td>
                       Bangalore
                    </td>
                   

                  </tr>
				  <tr>
                    <td>
                      <div>PC/PS:</div>
                     
                    </td>
                    <td>
                      Pc
                    </td>
                 
                  </tr>
				    <tr>
                    <td>
                      <div>Total Collected Amount:</div>
                     
                    </td>
                    <td>
                      Rs 2050.00
                    </td>
                   
                  </tr>
				  <tr>
                    <td>
                      <div>Delivery Charge:</div>
                     
                    </td>
                    <td>
                       Rs 00.00
                    </td>
                   

                  </tr>
				   <tr>
                    <td>
                      <div>Payment Mode:</div>
                     
                    </td>
                    <td>
                       COD
                    </td>
                   

                  </tr>
				    <tr>
                    <td>
                      <div>Status:</div>
                     
                    </td>
                    <td>
                       Delivered
                    </td>
                   

                  </tr>
				    <tr>
					
                    <td>
                      <div>Amount Received Status:</div>
                     
                    </td>
                    <td>
                     Yes
                    </td>
                   
                  </tr>
				  <tr>
                    <td>
                      <div>Canceled Order:</div>
                     
                    </td>
                    <td>
                       No
                    </td>
                   

                  </tr>
				  
                 
                </tbody>
              </table>
                
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="12" md="6">
          <CCard>
            <CCardHeader>
            Location
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="12">
				  <p><strong>Name: </strong> Sharath B</p>
				  <p> <strong>Email:</strong> sharath@gmail.com</p>
				   <p><strong>Phone No: </strong> 9537468240</p>
				    <p><strong>Address:</strong>  306, janapriya lake view apartment phase 1, vakil marina Street,
Kodichikknahalli, Bommanahalli, Kodichikknahalli, Lake City, Bommanahalli, Bengaluru,
Karnataka 560068, India</p>
				    <p><strong>City:</strong> Bangalore</p>
				   
                   
					
                  </CCol>
                </CFormGroup>
               
              </CForm>
            </CCardBody>
           
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default PendingOverview
