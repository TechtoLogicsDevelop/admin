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



const Vouchers = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Manage Vouchers
            </CCardHeader>
			
		   
            <CCardBody>
              <CCardHeader>
           
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/"> New Voucher</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader> 

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Voucher Code</th>
                    <th >Manage to be displayed in the Website </th> 
                   
					  <th >Max usage per user</th>
					 
					   
					  <th >Status</th>
					 
					    <th >Action</th>
					 
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>158965
				  </td>
				  <td>
				 Rs. 50 off on purchasing safety shoes .
				  </td>
                     <td>
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

export default Vouchers
