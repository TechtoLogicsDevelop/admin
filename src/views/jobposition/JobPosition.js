import React, { lazy } from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
   CSwitch,
   
   
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



const JobPosition = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Job Position
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addsession">+Add Job Position</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Job Code</th>
                    <th>Job Title</th>
                    
                    <th>Details</th>
                    <th>Department</th>
                   <th>Country</th>
				   
					<th>Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      JC001
                    </td>
                    <td>
                      <div>Course and Diploma in Media and Graphic Design</div>    
                     
                    </td>
                    <td className="text-center">
                     09/01/20 19:00
                    </td>
                     <td className="text-center">
                     09/08/21 13:55
                    </td>
                        <td className="text-center">
                     ArtmediaWork
                    </td>   
                      <td className="text-center">
                     Artcurate
                    </td>
                     <td className="text-center">
                     Hemanth
                    </td>
                     <td className="text-center">
                    Paid
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

export default JobPosition
