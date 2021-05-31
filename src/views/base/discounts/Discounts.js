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



const Discounts = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Manage Discounts
            </CCardHeader>
			
		   
            <CCardBody>
              <CCardHeader>
           
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/adddiscount">Add New Discount</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader> 

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Id</th>
                    <th >Discount </th> 
                   
					  <th >Description</th>
					 
					   
					  <th >Status</th>
					 
					    <th >Action</th>
					 
                  </tr>
                </thead>
                <tbody>  
                  <tr>
				  <td>01
				  </td>
				  <td>
				 Flat Discount
				  </td>
                     <td>
                    Eg: Rs. 50 off on purchasing safety shoes .
                     
                    </td>
                    <td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					View / Edit / Delete
					</td>
					
					
                  </tr>
				   <tr>
				  <td>02
				  </td>
				  <td>
				 Percentage Discounts
				  </td>
                     <td>
                    Eg: 20% off on purchasing safety shoes.
                     
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

export default Discounts
