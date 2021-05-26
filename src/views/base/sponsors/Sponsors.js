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



const Sponsors = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Sponsors
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
            Sponsors  Master
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/addsponsors">Add Sponsors </CHeaderNavLink> | <CHeaderNavLink to="/sponsorsproposal">Sponsors Proposal Senders List</CHeaderNavLink> | <CHeaderNavLink to="/sponsorsreglist">Sponsors Registers List</CHeaderNavLink> 
        </CHeaderNavItem>
		
            </CCardHeader>
                    
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th className="text-center">Sponsors Name </th>
					<th className="text-center">Email</th>
					
					 <th className="text-center">Mobile</th>
					  <th className="text-center">For Event</th>
					  <th className="text-center">Amount Donate</th>
					   <th className="text-center">Collected</th>
				
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
                   87964525811
                    </td>
					 <td className="text-center">
                  Artwork-Event
                    </td>
					 <td className="text-center">
                   500000
                    </td>
					 <td className="text-center">
                    300000
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

export default Sponsors
