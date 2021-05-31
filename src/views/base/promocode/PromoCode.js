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
  CLabel,
  CSelect,
  CInput,
  CButton,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'



const PromoCode = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Promo Code
            </CCardHeader>
			
		   
            <CCardBody>
			 <CCardHeader>
            
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/createpromocode">Add New </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>
             <CCardHeader>
			
			 <CFormGroup row>
                 <CFormGroup row>
				
				   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line"> From Date</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="Order Delivery From Date" />
                  </CFormGroup>
                </CCol>
				 
                   <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line"> Available From</CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="Order Delivery From Date" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Available To </CLabel>
                   <CInput type="date" id="date-input" name="date-input" placeholder="Order Delivery To Date" />
                  </CFormGroup>
                </CCol>
                </CFormGroup>				   
                </CFormGroup>
				<CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">Filter</span></CButton>
				 
                 </CCardHeader>	

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Id</th>
				   <th className="text-center">Promotion Type </th> 
                    <th className="text-center">Promo Code </th> 
                    <th className="text-center">Amount Type </th>  
					 <th className="text-center">Discount Amount </th>
					
					<th className="text-center">Discount Percentage</th>
					
					 <th className="text-center">Maximum Use</th>
					 <th className="text-center">Available From</th>
					  <th className="text-center">Available To</th>
					 
					    <th className="text-center">Usage Count</th>
					  <th className="text-center">Status</th>
					 
					    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>01
				  </td>
				   <td>Advertising
				  </td>
				  <td>
				  Promo-2021
				  </td>
                     <td>
                    Percentage
                     
                    </td>
                    <td>
                     00.00
                     
                    </td>
					<td>
                   04.00
                     
                    </td>
					
					<td className="text-center">
                   7
                    </td>
					<td className="text-center">
                  27/05/2021
                    </td>
					
					 <td className="text-center">
                   27/05/2021
                    </td>
					 <td className="text-center">
                   0
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

export default PromoCode
