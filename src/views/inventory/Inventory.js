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
   CLabel,
   CSelect,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'



const Inventory = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
           Inventory
            </CCardHeader>
			
		   
            <CCardBody>
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select Store</CLabel>
                  </CCol>
                  <CCol xs="4" >
                    <CSelect custom name="select" id="select">
					 <option value="0">Select Store</option>
                      <option value="1">Artcurate</option>
                      <option value="2">Other</option>
                     
					  
                    </CSelect>
                  </CCol>
                </CFormGroup>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>SKU</th>
				   <th>Store</th>
				    <th> Store Zone</th>
                    <th>Product</th>
                    <th >Unit</th>
                    <th >Price</th>
                   <th >Quantity</th>
                  
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                     1001
                     
                    </td>
                   
					 <td>
                    <CHeaderNavLink to="/storesdetails">Artcurate</CHeaderNavLink> 
                    </td>
					 <td>
                      JP Nagar  
                    </td>
					 <td>
                     <CHeaderNavLink to="">Digital Prints</CHeaderNavLink> 
                     
                    </td>
                    <td>
                     Pcs
                    </td>
					 <td >
                     Rs 1200
                    </td >
                       <td>
					<CHeaderNavLink to="/editquantity">10</CHeaderNavLink>
					</td>               
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					View / Edit / Delete
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

export default Inventory
