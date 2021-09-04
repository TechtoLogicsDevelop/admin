import React, { useState } from 'react'
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
   CPagination,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const EmployersEnquiry = () => {
	 const [currentPage, setCurrentPage] = useState(2)

  return (
    <>
       <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Employers Enquiries
            </CCardHeader>
			
            <CCardBody>
              
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Id</th>
                    <th>Name</th>
                     <th>Phone</th>
                    <th>Email</th>
                   
                    <th>Message</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>01</div>
                     
                    </td>
                    <td>
                      <div>Preetham</div>
                     
                    </td>
					 <td>
                      <div>9856321470</div>
                     
                    </td>
                    <td >
                     preet12@gmail.com
                    </td>
                    <td >
                      Text Message
                    </td>
                         
					<td>
					View / Delete
					</td>
                  </tr>
				   
                </tbody>
              </table>
             <br/>
          <CPagination
            align="end"
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default EmployersEnquiry
