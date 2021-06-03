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



const VendorsPackage = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Manage Vendors Package
            </CCardHeader>
			
		   
            <CCardBody>
              <CCardHeader>
             Manage Vendors Packages
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/addvendorspackage">Add Package </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>No</th>
					<th className="text-center">Seal</th> 
                    <th >Title</th>
					
					
					<th >Price </th>
					
					
					<th>For</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     1
                     
                    </td>
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/starter.png'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Free(Default)
                     
                    </td>
					<td>
                    Rs 00.00
                     
                    </td>
					
					
						<td>
					Lifetime
					</td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				    <tr>
                     <td>
                     2
                     
                    </td>
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/basic.png'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                   Basic
                     
                    </td>
					<td>
                    Rs 10000.00
                     
                    </td>
					
					
						<td>
					3 Months
					</td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				   <tr>
                     <td>
                     3
                     
                    </td>
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/optimal.png'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Optimal
                     
                    </td>
					<td>
                    Rs 15000.00                     
                    </td>
					
					
						<td>
					6 Months
					</td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				   <tr>
                     <td>
                     4
                     
                    </td>
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/business.png'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Business
                     
                    </td>
					<td>
                    Rs 25000.00
                     
                    </td>
					
					
						<td>
					1 Years
					</td>
					
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				    <tr>
                     <td>
                     5
                     
                    </td>
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/premium.png'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Premium
                     
                    </td>
					<td>
                    Rs 35000.00
                     
                    </td>
					
					
						<td>
					2 Years
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

export default VendorsPackage
