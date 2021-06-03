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
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'



const SalesQuatation = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Sales Quatation
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
            Sales Quatation
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/createquatation">Create Quatation </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Sl no</th>
					 <th>Quatation No</th>
                    <th > Date </th>
					 <th >Customer Name </th>
					
					<th className="text-center">Total</th>
				 
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                    01
                     
                    </td>
                     <td>
                     <CHeaderNavLink to="/">SQ_01</CHeaderNavLink> 
                     
                    </td>
					  <td>
                    06/05/2021
                     
                    </td>
                    <td>
                      <CHeaderNavLink to="/vendorsdetails">Naveen</CHeaderNavLink>
                     
                    </td> 
                  					
					<td>
                    Rs 5000.00
                     
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

export default SalesQuatation
