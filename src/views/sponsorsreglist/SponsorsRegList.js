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



const SponsorsRegList = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          SponsorsReg List
            </CCardHeader>
			
		   
            <CCardBody>
			  <CCardHeader>
           
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/sponsorsreg">Sponsors Registration </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>
              
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
					<th className="text-center">Logo</th>
                    <th className="text-center">Sponsors Name </th>
					<th className="text-center">Email</th>
					
					 <th className="text-center">Mobile</th>
					  <th className="text-center">Country</th>
					   <th className="text-center">Contact</th>
					   <th className="text-center">Job Title</th>
				
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     SI-E25
                     
                    </td>
					
					<td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
					</td>
                    <td>
                  Handicrafts
                     
                    </td>
					
					
					<td className="text-center">
                   rajith@gmail.com
                    </td>
					 <td className="text-center">
                   87964525811
                    </td>
					
					 <td className="text-center">
                   India
                    </td>
					 <td className="text-center">
                    Rajith
                    </td>
					 <td className="text-center">
                    Managing Director
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

export default SponsorsRegList
