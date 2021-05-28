import React from 'react'
import {
  CBadge,
   CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CSwitch,
  CFormGroup,
  CSelect,
  CLabel,
  CButton,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'



const Promotion = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Promotion
            </CCardHeader>
			
		   
            <CCardBody>
			<CCardHeader>
            
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/createpromotion">Add New </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>
              <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Promotion Type</CLabel>
                  </CCol>
                  <CCol xs="4" >
                    <CSelect custom name="select" id="select">
					 <option value="0">Select </option>
                      <option value="1">All</option>
                      <option value="2">Invoice Amount Based</option>
					   <option value="3">Product Based</option>
                     
					  
                    </CSelect>
                  </CCol> <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">Filter</span></CButton> 
                </CFormGroup>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Id</th>
                    <th className="text-center">Image </th> 
                    <th className="text-center">FOC Product </th>  
					 <th className="text-center">Promotion Type </th>
					
					<th className="text-center">FOC Quantity</th>
					
					 <th className="text-center">Invoice From Amount</th>
					 <th className="text-center">Invoice To Amount</th>
					  <th className="text-center">Purchasing Product</th>
					 
					    <th className="text-center">Purchasing Product Quantity</th>
					  <th className="text-center">Status</th>
					 
					    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>64
				  </td>
				  <td>
				 No Image
				  </td>
                     <td>
                    Special Dress
                     
                    </td>
                    <td>
                     Product based
                     
                    </td>
					<td>
                     1
                     
                    </td>
					
					<td className="text-center">
                   00.00
                    </td>
					<td className="text-center">
                  00.00
                    </td>
					
					 <td className="text-center">
                   Special Dress
                    </td>
					 <td className="text-center">
                   1
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

export default Promotion
