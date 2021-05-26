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
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const ProductsKit = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         ProductsKit
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
           
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/addproductskit">Add ProductsKit </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>
               <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
					
                    <th > Kit Name </th>
					
					
					<th >Descriptions </th>
					<th >Kit Items </th>
					<th >Kit Price </th>
					<th >Product </th>
					
					
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     pk-01
                     
                    </td>
					 <td >
                      Combo Offer
                    </td>
                   
					<td>
                    Combo Offer
                     
                    </td>
					<td>
                    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th >Items </th>
					
					<th >Price </th>
					
					<th>Status</th>
				
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     item 1
                     
                    </td>
					 <td >
                      50
                    </td>
                   
					
					
					
					
					
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 Edit / Delete
					</td>
                  </tr>
				    <tr>
                     <td>
                     item 2
                     
                    </td>
					 <td >
                      50
                    </td>
                   
					
					
					
					
					
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 Edit / Delete
					</td>
                  </tr>
				    <tr>
                     <td>
                     item 3
                     
                    </td>
					 <td >
                      50
                    </td>
                   
					
					
					
					
					
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 Edit / Delete
					</td>
                  </tr>
				  
                </tbody>
              </table>
                     
                    </td>
					<td>
                    <CHeaderNavLink to="/editkitprice">Rs 125 </CHeaderNavLink> 
                     
                    </td>
					<td>
                    <CHeaderNavLink to="/addkititems">Adds Items </CHeaderNavLink> 
                     
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
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
               
                <tbody>
                  <tr>
                     <td>
                     pk-02
                     
                    </td>
					 <td >
                      Discount Offers
                    </td>
                   
					<td>
                    Discount Offers
                     
                    </td>
					<td>
                    <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th >Items </th>
					
					<th >Price </th>
					
					<th>Status</th>
				
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     item 1
                     
                    </td>
					 <td >
                      50
                    </td>
                   
					
					
					
					
					
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 Edit / Delete
					</td>
                  </tr>
				    <tr>
                     <td>
                     item 2
                     
                    </td>
					 <td >
                      50
                    </td>
                   
					
					
					
					
					
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					 Edit / Delete
					</td>
                  </tr>
				   
				  
                </tbody>
              </table>
                     
                    </td>
					<td>
                    <CHeaderNavLink to="/editkitprice">Rs 85 </CHeaderNavLink> 
                     
                    </td>
					<td>
                    <CHeaderNavLink to="/addkititems">Adds Items </CHeaderNavLink> 
                     
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

export default ProductsKit
