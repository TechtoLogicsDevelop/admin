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
   CFade,
   CLink,
   CCollapse,
      CModal,
   CModalHeader,
   CModalTitle,
   CModalBody,
   CForm,
   CFormGroup,
   CLabel,
   CInput,
   CSelect,
   CModalFooter,
   CTextarea,
   CInputFile,
    CPagination,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const ManageExams = () => {
	const [visible, setVisible] = React.useState(10)
   const [activeTab, setActiveTab] = useState(1)
    const [collapsed, setCollapsed] = React.useState(true)
    const [showCard, setShowCard] = React.useState(true)
	
	
			 const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
   const [currentPage, setCurrentPage] = useState(1)
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Manage Exams
			 <div className="text-right">
			 <CHeaderNavLink   to="/examinations">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
            <CCardBody>
              
               <CCardHeader>
           
           
            </CCardHeader>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Sl No</th>
                    <th className="text-center">Exam Name</th>
					<th className="text-center">Courses</th>
					<th className="text-center">Result Type</th>
                     <th className="text-center">Subject & Totals</th>
					<th className="text-center">Month</th>
					<th className="text-center"> Year</th>
                     <th className="text-center">Actions</th>
				
					
                  </tr>
                </thead>
                 <tbody>
                  <tr>
                   
                  
                    <td >
                  1
                    </td>
                     <td >
                  Unit Test
                    </td>
                      
                    <td >
                  MCA
                    </td>
                    

                    <td >
                   <CFade in={showCard}>
            <CCard>
             
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Grade Name
                    </td>
                  
					<td>
					Percentage
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                     Distinction
                    </td>
                  
					<td>
					>= 75%
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                    First Class
                    </td>
                  
					<td>
					>= 60%
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Second Class
                    </td>
                  
					<td>
					>= 50 %
					</td>
					
                  </tr>
				  
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
                    </td>
					 <td >
                   
          <CFade in={showCard}>
            <CCard>
             
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Artificial Intelligence
                    </td>
                  
					<td>
					100
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                     Operating Systems
                    </td>
                  
					<td>
					100
					</td>
					
                  </tr>
				
			
				  
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
       
                    </td>
                     <td >
                   Jan
                    </td>					
					<td>
					2021
					</td>
					<td>
					 Edit / Delete
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

export default ManageExams
