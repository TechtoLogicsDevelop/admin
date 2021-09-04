import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CFormGroup,
  CInput,
  CCardFooter,
  CLabel,
  CSelect,
  CTextarea,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const CandidateProfile = () => {

  const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)

  return (
    <CRow>
      <CCol>
        <CCard>
          <CCardHeader>
           Candidate Profile
            <DocsLink name="CModal"/>
          </CCardHeader>
          <CCardBody>
          
          



            <hr />
             <CButton color="info" onClick={() => setInfo(!info)} className="mr-1">Info modal</CButton>
            <CButton color="primary" onClick={() => setPrimary(!primary)} className="mr-1">
              Work History
            </CButton>
            <CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Education</CButton>
            <CButton color="warning" onClick={() => setWarning(!warning)} className="mr-1">Skills</CButton>
            <CButton color="danger" onClick={() => setDanger(!danger)} className="mr-1">Referees</CButton>
            
            <CModal 
              show={primary} 
              onClose={() => setPrimary(!primary)}
              color="primary"
            >
              <CModalHeader closeButton>
                <CModalTitle>Work History</CModalTitle>
              </CModalHeader>
              <CModalBody>
                 <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Work History
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
                <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Job Title</CLabel>
                    <CInput id="company-website" placeholder="Job Title" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Company</CLabel>
                    <CInput id="company-website" placeholder="Company" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				 <CFormGroup row className="my-0">
               
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Countory</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Country 1</option>
                      <option value="2">Country 2</option>
                      <option value="3">Country 3</option>
					   <option value="4">Country 4</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">From Year</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">2021</option>
                      <option value="2">2020</option>
                      <option value="3">2019</option>
					   <option value="4">2018</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">From Month</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
					   <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
					   <option value="8">August</option>
					    <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
					   <option value="12">December</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">To Year</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">2021</option>
                      <option value="2">2020</option>
                      <option value="3">2019</option>
					   <option value="4">2018</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">To Month</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
					   <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
					   <option value="8">August</option>
					    <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
					   <option value="12">December</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Currently Working year</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                      
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                 <CFormGroup row className="my-0">
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Details</CLabel>
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="..." 
                    />
                  </CFormGroup>
                </CCol>
                 
              </CFormGroup>
              
              </CForm>
            </CCardBody>
            
          </CCard>
         
        </CCol>
       
      </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => setPrimary(!primary)}>
                  + Done
                </CButton>{' '}
                <CButton color="secondary" onClick={() => setPrimary(!primary)}>
                  Cancel
                </CButton>
              </CModalFooter>
            </CModal>

            <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle>Education</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
             Education
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
                <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Institute</CLabel>
                    <CInput id="company-website" placeholder="Institute" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Degree / Diploma</CLabel>
                    <CInput id="company-website" placeholder="Company" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				 <CFormGroup row className="my-0">
               
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Countory</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Country 1</option>
                      <option value="2">Country 2</option>
                      <option value="3">Country 3</option>
					   <option value="4">Country 4</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">From Year</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">2021</option>
                      <option value="2">2020</option>
                      <option value="3">2019</option>
					   <option value="4">2018</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">From Month</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
					   <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
					   <option value="8">August</option>
					    <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
					   <option value="12">December</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">To Year</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">2021</option>
                      <option value="2">2020</option>
                      <option value="3">2019</option>
					   <option value="4">2018</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">To Month</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
					   <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
					   <option value="8">August</option>
					    <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
					   <option value="12">December</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Currently Studying</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Yes</option>
                      <option value="2">No</option>
                      
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
                
              
              </CForm>
            </CCardBody>
            
          </CCard>
         
        </CCol>
       
      </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton color="success" onClick={() => setSuccess(!success)}>+ Done</CButton>{' '}
                <CButton color="secondary" onClick={() => setSuccess(!success)}>Cancel</CButton>
              </CModalFooter>
            </CModal>

            <CModal 
              show={warning} 
              onClose={() => setWarning(!warning)}
              color="warning"
            >
              <CModalHeader closeButton>
                <CModalTitle>Skills</CModalTitle>
              </CModalHeader>
              <CModalBody>
                           <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Skills
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
                <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Skills</CLabel>
                    <CInput id="company-website" placeholder="Skills" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Skills Level</CLabel>
                    <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Advanced Beginer</option>
                      <option value="2">Competent</option>
                      <option value="3">Proficient</option>
					   <option value="4">Expert</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				 <CFormGroup row className="my-0">
               
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="established">Last Used Year</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">2021</option>
                      <option value="2">2020</option>
                      <option value="3">2019</option>
					   <option value="4">2018</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">last Used Month</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
					   <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
					   <option value="8">August</option>
					    <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
					   <option value="12">December</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Years of Experience</CLabel>
                    <CInput id="company-website" placeholder="Ex: 4 Years " />
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
			   
                
              
              </CForm>
            </CCardBody>
            
          </CCard>
         
        </CCol>
       
      </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton color="warning" onClick={() => setWarning(!warning)}>+ Done</CButton>{' '}
                <CButton color="secondary" onClick={() => setWarning(!warning)}>Cancel</CButton>
              </CModalFooter>
            </CModal>

            <CModal 
              show={danger} 
              onClose={() => setDanger(!danger)}
              color="danger"
            >
              <CModalHeader closeButton>
                <CModalTitle>Referees</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
           Referees
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
              
                <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Name</CLabel>
                    <CInput id="company-website" placeholder="Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Designation</CLabel>
                    <CInput id="company-website" placeholder="Designation" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				 <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Company</CLabel>
                    <CInput id="company-website" placeholder="Company" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="meta-tag">Country</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Country 1</option>
                      <option value="2">Country 2</option>
                      <option value="3">Country 3</option>
					   <option value="4">Country 4</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Phone</CLabel>
                    <CInput id="company-website" placeholder="Phone " />
                  </CFormGroup>
                </CCol>
                 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company-website">Email</CLabel>
                    <CInput id="company-website" placeholder="Email " />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   
                
              
              </CForm>
            </CCardBody>
            
          </CCard>
         
        </CCol>
       
      </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton color="danger" onClick={() => setDanger(!danger)}>+ Done</CButton>{' '}
                <CButton color="secondary" onClick={() => setDanger(!danger)}>Cancel</CButton>
              </CModalFooter>
            </CModal>

            <CModal 
              show={info} 
              onClose={() => setInfo(!info)}
              color="info"
            >
              <CModalHeader closeButton>
                <CModalTitle>Modal title</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={() => setInfo(!info)}>Cancel</CButton>
                <CButton color="info" onClick={() => setInfo(!info)}>Do Something</CButton>{' '}
              </CModalFooter>
            </CModal>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default CandidateProfile
