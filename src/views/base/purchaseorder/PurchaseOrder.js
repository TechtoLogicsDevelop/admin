import React, { useState } from 'react'
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
   CPagination,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'



const PurchaseOrder = () => {
	 const [currentPage, setCurrentPage] = useState(2)

  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Purchase Orders List 
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
         
			
          <CHeaderNavLink to="/pogenrate">+Create Purchase Order </CHeaderNavLink>
       
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Sl No</th>
                    <th >  Order No </th>
					 <th >Vendor Name </th>
					
					
					
					 <th className="text-center">Product</th>
					  
					 <th className="text-center">Generate Date</th>
					
					 <th className="text-center">Delivery Date</th>
					 
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
				 <tr>
                     <td>
                     1
                     
                    </td>
					  <td>
                     PO_001
                     
                    </td>
                    <td>
                     <CHeaderNavLink to="/vendorsdetails">Artwork</CHeaderNavLink>
                     
                    </td>
					<td>
						<table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                 
                </thead>
                <tbody>
                  <tr>
                    
					
					<td className="text-center">
                                        
                 <div> 9701 10 10    ---    Madhubani paintings (on textiles) --(10 Pcs) </div>         
                 <div> 9701 10 20    ---    Kalamkari paintings (on textiles)  --(10 Pcs) </div>        
                <div>  9701 10 30    ---    Rajasthani paintings (on textiles) --(10 Pcs) </div>
					
                    </td>
				
					
                  </tr>
				   
				   
				  
                </tbody>
              </table>
                    </td>
					
				
					
					 <td className="text-center">
                   30/05/2021
                    </td>
					<td className="text-center">
                   01/06/2021
                    </td>
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
                  <tr>
                     <td>
                     2
                     
                    </td>
					  <td>
                     PO_002
                     
                    </td>
                    <td>
                     <CHeaderNavLink to="/vendorsdetails">Artwork</CHeaderNavLink>
                     
                    </td>
					<td>
						<table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                 
                </thead>
                <tbody>
                  <tr>
                    
					
					<td className="text-center">
                                          
                       
                <div>  9701 10 30    ---    Rajasthani paintings (on textiles)--(20 Pcs)  </div>
					
                    </td>
				
					
                  </tr>
				   
				   
				  
                </tbody>
              </table>
                    </td>
					
				
					
					 <td className="text-center">
                   01/06/2021
                    </td>
					<td className="text-center">
                   03/06/2021
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
                 <br/>
				 
          <CPagination
            align="end"
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        
    </>
  )
}

export default PurchaseOrder
