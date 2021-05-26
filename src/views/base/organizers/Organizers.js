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



const Organizers = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Organizers
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
             Organizers Master
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/addorganizers">Add Organizers </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th className="text-center">Organizers </th>
					
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone No</th>
					 <th className="text-center">Mobile</th>
					  <th className="text-center">Contact</th>
					  <th className="text-center">Event Assign</th>
						
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     v-01
                     
                    </td>
                    <td>
                   Artwork-Art
                     
                    </td>
					
					
					<td className="text-center">
                   info@artwork.com
                    </td>
					 <td className="text-center">
                    789 654 3215
                    </td>
					 <td className="text-center">
                   87964525811
                    </td>
					 <td className="text-center">
                    Suresh SB
                    </td>
					 <td className="text-center">
                    <CHeaderNavLink to="">Assign </CHeaderNavLink> 
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

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        
    </>
  )
}

export default Organizers
