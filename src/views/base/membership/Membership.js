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
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const Membership = () => {
	 const [currentPage, setCurrentPage] = useState(2)

  return (
    <>
     
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Membership Packages
            </CCardHeader>
			
		   
            <CCardBody>
            
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>No</th>
					<th className="text-center">Seal</th> 
                    <th >Title</th>
					
					
					<th >Price </th>
					<th >Product Upload </th>
					
					<th>Status</th>
					
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
                        <img src={'avatars/bronze.png'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Bronze
                     
                    </td>
					<td>
                    Rs 1500.00
                     
                    </td>
					<td>
                    10 Times
                     
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
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/silver.png'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Silver
                     
                    </td>
					<td>
                    Rs 2500.00
                     
                    </td>
					<td>
                    20 Times
                     
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
                     3
                     
                    </td>
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/gold.png'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                   
					<td>
                    Gold
                     
                    </td>
					<td>
                    Rs 3500.00
                     
                    </td>
					<td>
                    30 Times
                     
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

export default Membership
