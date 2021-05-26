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



const InviteList = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Invite List
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
           
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/sendinvite">Send Invite </CHeaderNavLink> 
        </CHeaderNavItem>
		
            </CCardHeader>
                    
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th className="text-center">Invite  Name </th>
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					
					 <th className="text-center">ForEvent</th>
					<th className="text-center">Sent Date</th>
					
					
					  <th className="text-center">RVSP Date?</th>
					  <th className="text-center">Attend?</th>
					   
				
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     IS-01
                     
                    </td>
                  
					
					
					<td className="text-center">
                   DR. Prajwal
                    </td>
					 <td className="text-center">
                   prajwal@gmail.com
                    </td>
					 <td className="text-center">
                   9513574628
                    </td>
					 <td className="text-center">
                    Artwork
                    </td>
					<td className="text-center">
                    2021-05-17
                    </td>
					
					
					 <td className="text-center">
                    2021-05-18
                    </td>
					 <td className="text-center">
                    MayBe
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

export default InviteList
