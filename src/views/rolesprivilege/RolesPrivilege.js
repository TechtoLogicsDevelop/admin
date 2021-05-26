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



const RolesPrivilege = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Roles Privilege
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Roles Type</CLabel>
                  </CCol>
                  <CCol xs="6" md="6">
                    <CSelect custom name="select" id="select">
                      <option value="0">Select Roles</option>
                      <option value="1">Admin</option>
                      <option value="2">Manager</option>
                      <option value="3">Superviser</option>
					   <option value="4">Staff</option>
                      <option value="2">Accountant</option>
                      <option value="3">Partner</option>
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Module</th>
                    <th>Access Permission</th>
                    
                    <th>Create Permission</th>
                   
                    <th>Update Permission</th>
					<th>Read Permission</th>
					  <th>Delete Permission</th>
					  <th>Other Permission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>Admin Users</div>
                     
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
				    <tr>
                    <td>
                      <div>Modules</div>
                     
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
				  <tr>
                    <td>
                      <div>System Config</div>
                     
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
				  <tr>
                    <td>
                      <div>Contacts Master</div>
                     
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
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default RolesPrivilege
