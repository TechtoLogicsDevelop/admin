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



const CompanyBanks = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Company Banks 
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
            
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/bankdetails">Add Banks </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                   
                    <th className="text-center">Account Name </th>  
					 <th className="text-center">Type </th>
					
					<th className="text-center">Currency</th>
					
					 <th className="text-center">Bank</th>
					 <th className="text-center">Branch</th>
					  <th className="text-center">Number</th>
					 
					    <th className="text-center">Bank Address</th>
					  <th className="text-center">Dflt</th>
					
					
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>  
                  <tr>
                     <td>
                    Artcurate
                     
                    </td>
                    <td>
                     Chequing Account
                     
                    </td>
					<td>
                   INR
                     
                    </td>
					
					<td className="text-center">
                   Axis Bank
                    </td>
					<td className="text-center">
                  MG Road
                    </td>
					
					 <td className="text-center">
                   001250001
                    </td>
					 <td className="text-center">
                    MG Road, Bangalore
                    </td>
					
					
					 <td>
                     Yes
                     
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
                    Artcurate
                     
                    </td>
                    <td>
                     Saving Account
                     
                    </td>
					<td>
                   INR
                     
                    </td>
					
					<td className="text-center">
                   Axis Bank
                    </td>
					<td className="text-center">
                  MG Road
                    </td>
					
					 <td className="text-center">
                   001250011
                    </td>
					 <td className="text-center">
                    MG Road, Bangalore
                    </td>
					
					
					 <td>
                     Yes
                     
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

export default CompanyBanks
