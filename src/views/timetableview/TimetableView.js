import React, { useState } from 'react'
import {
  CAlert,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CProgress,
  CListGroup,
  CListGroupItem,
  CTabContent,
  CTabPane,
  CFade,
  CModal,
  CFormGroup,
  CLabel,
  CInput,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CSelect,
  CForm,
  CInputCheckbox,
  CModalFooter,
  CHeaderNavLink,
  CCollapse,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'

const TimetableView = () => {
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



  return (
    <>
	 <CCardHeader>
	 
             Add / Edit Time-Table
			<div className="text-right">
               <CButton   color="success" onClick={() => setLarge(!large)} className="mr-1">+ Add</CButton>
			   </div>
				 <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>  Time-Table</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Add / Edit Time-Table
             
            </CCardHeader>
            <CCardBody >
			
             <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			     <CFormGroup row>
				
					<CCol xs="12" md="12">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Batch by Course</option>
                      <option value="1">Course 1</option>
                      <option value="2">Course 2</option>
                      <option value="3">Course 3</option>
                    </CSelect>
					</CCol>
                  </CFormGroup>
				     <CFormGroup row>
				
					<CCol xs="12" md="12">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Batch by Subject</option>
                      <option value="1">Subject 1</option>
                      <option value="2">Subject 2</option>
                      <option value="3">Subject 3</option>
                    </CSelect>
					</CCol>
                  </CFormGroup>
				    <CFormGroup row>
				
					<CCol xs="12" md="12">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Batch </option>
                      		<option value = '19' > Batch / May-2020</option>
							<option value = '18' > batch / August-2018 </option>
							<option value = '17' >Sample Batch / May-2016</option>
							<option value = '16' >Fail  / April-2016</option>
							<option value = '15' >Office Kaam / May-2016</option>
							<option value = '12' >WC EDU / June-2015</option>
							<option value = '11' >Sample Batch / May-2015</option>
							<option value = '10' >Test Batch 7 / January-2014</option>
							<option value = '9' >Test Batch 6 / January-2014</option>
							<option value = '8' >Test Batch 5 / January-2014</option>
							<option value = '7' >Test Batch 4 / January-2014</option>
							<option value = '3' >Test Batch 3 / January-2014</option>
							<option value = '2' >Test Batch 2 / January-2014</option>
							<option value = '1' >Test Batch 1 / January-2014</option>									 
								 
                    </CSelect>
					</CCol>
                  </CFormGroup>
			    
			  
			     
              </CForm>
			   <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Sunday</th>
                  <th className="text-center">Monday</th>
				   <th className="text-center">Tuesday </th>
                    <th className="text-center">Wednesday </th>
                   <th className="text-center">Thursday </th>
                   <th  className="text-center">Friday</th>
                   <th  className="text-center">Saturday</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                 <td >
                 <CHeaderNavLink to="/addtimetable">+Add </CHeaderNavLink>
                    </td>
                    <td >
                 <CHeaderNavLink to="/addtimetable">+Add </CHeaderNavLink>
                     </td>
                
					<td>
					 <CHeaderNavLink to="/addtimetable">+Add </CHeaderNavLink>
					</td>
					<td>
					 <CHeaderNavLink to="/addtimetable">+Add </CHeaderNavLink>
					</td>
					 <td >
                   <CHeaderNavLink to="/addtimetable">+Add </CHeaderNavLink>
                    </td>
                    <td >
                   <CHeaderNavLink to="/addtimetable">+Add </CHeaderNavLink>
                    </td>
                
					<td>
				   <CHeaderNavLink to="/addtimetable">+Add </CHeaderNavLink>	 
					</td>
                  </tr>
                </tbody>
              </table>
            </CCardBody>
            
          </CCard>
         
        </CCol>
       
      </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton color="success" onClick={() => setSuccess(!success)}> Save</CButton>{' '}
				 <CButton color="info" onClick={() => setSuccess(!success)}>Save & Continue</CButton>
                <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
              </CModalFooter>
            </CModal>
            </CCardHeader>
			
	 <CRow>
	   
	   <CCol xs="2">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Sunday </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Monday</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Tuesday </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Wednesday</CListGroupItem>
					 <CListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Thursday</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(5)} action active={activeTab === 5} >Friday </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(6)} action active={activeTab === 6} >Saturday</CListGroupItem>
					
                   
                  </CListGroup>
                </CCol>
                <CCol xs="10">
                  <CTabContent>
                    <CTabPane active={activeTab === 0} >
                      <p>
					   <CListGroup>
                <CListGroupItem action >
				 <CRow>
                 <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		 </CRow>
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 1}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                				 <CRow>
                 <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		 </CRow> 
		 				 <CRow>
                 <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		 </CRow>
		 </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 2}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                   				 <CRow>
                 <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		 </CRow>
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 3}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                  				 <CRow>
                 <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		 </CRow>
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
					 <CTabPane active={activeTab === 4}>
                       <p>
					   <CListGroup>
                <CListGroupItem action >
                 				 <CRow>
                 <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		 </CRow>
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 5}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                 				 <CRow>
                 <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		 </CRow>
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 6}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                 				 <CRow>
                 <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		    <CCol xs="12" sm="6" md="4">
          <CFade in={showCard}>
            <CCard>
              <CCardHeader>
                09:30 - 10:30
				 
                <div className="card-header-actions">
                  <CLink className="card-header-action">
                    <CIcon name="cil-settings" />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setCollapsed(!collapsed)}>
                    <CIcon name={collapsed ? 'cil-chevron-bottom':'cil-chevron-top'} />
                  </CLink>
                  <CLink className="card-header-action" onClick={() => setShowCard(false)}>
                    <CIcon name="cil-x-circle" />
                  </CLink>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed}>
                <CCardBody>
                    <table className="table table-hover table-outline mb-1 d-none d-sm-table">
                
                <tbody>
                  <tr>
                   
                     <td >
                       Batch
                    </td>
                  
					<td>
					May-2021
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Teacher
                    </td>
                  
					<td>
					teaching Account
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Course
                    </td>
                  
					<td>
					MHT-CET
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                       Subject
                    </td>
                  
					<td>
					Mathematics
					</td>
					
                  </tr>
				    <tr>
                   
                     <td >
                      Timimg
                    </td>
                  
					<td>
					09:30 - 10:30
					</td>
					
                  </tr>
                </tbody>
              </table>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
		 </CRow>
                </CListGroupItem>
               
                
              </CListGroup>

					  </p>
                    </CTabPane>
					
                  </CTabContent>
                </CCol>
              </CRow>
         
     
    </>
  )
}

export default TimetableView
