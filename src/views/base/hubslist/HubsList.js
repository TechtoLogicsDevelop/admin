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



const HubsList = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Hub List
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
             Hub List
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/addcustomers">Add Hubs </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Sl No</th>
                  
					  <th > Entity Code </th>
					 <th > Name</th>
					<th >Email</th>
					
					 <th >Phone</th>
					
					
					 <th > Status </th>
					  <th > Action </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     1
                     
                    </td>
                    <td>
                     1001
                     
                    </td>
					<td>
                    <CHeaderNavLink to="/base/hubdetails"> Bangalore </CHeaderNavLink>
                     
                    </td>
					
					<td className="text-center">
                   bang@gmail.com
                    </td>
					
					 <td className="text-center">
                   87964525811
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

export default HubsList
