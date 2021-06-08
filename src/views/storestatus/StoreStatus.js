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



const StoreStatus = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader className="text-center">
             StoreStatus
            </CCardHeader>
			
		   
            <CCardBody>
              

             

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th className="text-center">Open</th>
                    
                    <th className="text-center">Down for Maintainance</th>
                   
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  
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

export default StoreStatus
