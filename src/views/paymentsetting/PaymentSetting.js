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
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'



const PaymentSetting = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Payment Setting
            </CCardHeader>
			
		   
            <CCardBody>
              


              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Payment Modes</th>
                    <th>COD</th>
                    
                    <th>Credit Card</th>
                   
                    <th>Debit Card</th>
					<th>Net Banking</th>
					  <th>Credit Card EMI</th>
					  <th>Payment Wallets</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>Status</div>
                     
                    </td>
                    <td>
                        <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="danger"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
                    </td>
                    <td className="text-center">
                      <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="danger"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
                    </td>
                    <td className="text-center">
                      <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="danger"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
                    </td>
                                      
					<td>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="danger"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
					</td>
					<td>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="danger"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
					</td>
					<td>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="danger"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
					</td>
                  </tr>
				  
				 
				  
                 
                </tbody>
              </table>
                
            </CCardBody>
			<CCardBody>
              


              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Payment Wallets</th>
                    <th>PayTM</th>
                    
                    <th>Google Pay</th>
                   
                    <th>Amazon Pay</th>
					<th>PhonePe</th>
					  <th>BHIM</th>
					  <th>JioMoney</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>Status</div>
                     
                    </td>
                    <td>
                        <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
                    </td>
                    <td className="text-center">
                      <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
                    </td>
                    <td className="text-center">
                      <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
                    </td>
                                      
					<td>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
					</td>
					<td>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
					</td>
					<td>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
					</td>
                  </tr>
				  
				 
				  
                 
                </tbody>
              </table>
                
            </CCardBody>
			<CCardBody>
              


              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Payment Gateway</th>
                    <th>Citrus Pay</th>
                    
                    <th>CCAvenue</th>
                   
                    <th>PayUBiz</th>
					<th>Instamojo</th>
					  <th>Direcpay</th>
					  <th>Razorpay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>Status</div>
                     
                    </td>
                    <td>
                        <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
                    </td>
                    <td className="text-center">
                      <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
                    </td>
                    <td className="text-center">
                      <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
                    </td>
                                      
					<td>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
					</td>
					<td>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
					</td>
					<td>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
					</td>
                  </tr>
				  
				 
				  
                 
                </tbody>
              </table>
                
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default PaymentSetting
