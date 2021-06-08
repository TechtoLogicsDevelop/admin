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



const TrainingSession = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            Training Session
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addsession">+Add New Session</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Name</th>
                    <th>Course</th>
                    
                    <th>Shedule Date & Time</th>
                    <th>Status</th>
                   <th>	Delivery Method</th>
				    <th>Delivery Location</th>
					 <th>Attendence Type</th>
					  <th>Training Certification Required</th>
					<th>Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>Admin, Secretarial</div>
                     
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

export default TrainingSession
