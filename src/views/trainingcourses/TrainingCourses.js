import React from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  
  CCard,
  CCardBody,
  
  CCardHeader,
  CCol,
  
  CRow
   
   
   
  
} from '@coreui/react'



const TrainingCourses = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Training Courses
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addtrainingcourse">+Add New Training Course</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Name</th>
                    <th>Course</th>
                    
                    <th>Planned Time</th>
                    <th>Status</th>
                   <th>	Modeof transport</th>
				    <th>Training Location</th>
					 <th>Attendence Type</th>
					  <th>Training Certificate Requirements</th>
					<th>Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                     
                     
                    </td>
                    <td>
                       
                     
                    </td>
                    <td className="text-center">
                    
                    </td>
                     <td className="text-center">
                    
                    </td>
                        <td className="text-center">
                     
                    </td>   
                      <td className="text-center">
                     
                    </td>
                     <td className="text-center">
                    
                    </td>
                     <td className="text-center">
                    
                    </td>					
					<td>
					
					</td>
					<td>
					
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

export default TrainingCourses
