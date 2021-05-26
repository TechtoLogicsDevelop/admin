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



const Attendees = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Attendees List
            </CCardHeader>
			
		   
            <CCardBody>
              
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th className="text-center"> Name </th>
					<th className="text-center">Email</th>
					
					 <th className="text-center">Mobile</th>
					  <th className="text-center">Registered Date</th>
					   <th className="text-center">Event</th>
					   <th className="text-center">No of Seats</th>
				
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     ea-01
                     
                    </td>
                    <td>
                  Rajit
                     
                    </td>
					
					
					<td className="text-center">
                   rajith@gmail.com
                    </td>
					 <td className="text-center">
                   87964525811
                    </td>
					 <td className="text-center">
                   2021-05-17
                    </td>
					 <td className="text-center">
                    Artwork Event
                    </td>
					 <td className="text-center">
                    5 Seats
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

export default Attendees
