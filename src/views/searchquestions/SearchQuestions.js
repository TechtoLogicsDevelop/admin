import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CFade,
  CFormGroup,
  CLabel,
  CInputCheckbox,
  CRow 
} from '@coreui/react';
import { DocsLink } from 'src/reusable'

const SearchQuestions = () => {

  const [collapse, setCollapse] = useState(false)
  const [collapseMulti, setCollapseMulti] = useState([false, false])
  const [accordion, setAccordion] = useState(1)
  const [fade, setFade] = useState(true)

  const toggle = (e) => {
    setCollapse(!collapse)
    e.preventDefault()
  }

  const toggleMulti = (type) => {
    let newCollapse = collapseMulti.slice()
    switch (type) {
      case "left":
        newCollapse[0] = !collapseMulti[0];
        break;
      case "right":
        newCollapse[1] = !collapseMulti[1];
        break;
      case "both":
        newCollapse[0] = !collapseMulti[0];
        newCollapse[1] = !collapseMulti[1];
        break;
      default:
    }
    setCollapseMulti(newCollapse)
  }

  const toggleFade = () => {
    setFade(!fade)
  }

  return (
    <CRow>
      <CCol xl="6">
        <CCard>
          <CCardHeader>
           Subject Topic 1
          </CCardHeader>
          <CCardBody>
            <div id="accordion">
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                  >
                    <h6 className="m-0 p-0">Topic 1 Question</h6>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
				   <CLabel>What is capital of India?</CLabel>
                    <CFormGroup row>
                 
                  <CCol md="9">
				  
                    <CFormGroup variant="checkbox" className="checkbox">
					 
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Dehli</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Mumbai</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Bangalore</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Chenni</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
                      <h5>Courses :	Home Revise</h5>
                      <h5>Subject : Subject Name</h5>
                      <h5>Topic : Topic Name</h5>
                      <CLabel>Created By :	Admin</CLabel><br/>
                      <CLabel>Created On :	Monday, 01 Jun, 2020 11:07:57 PM</CLabel> 
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 1 ? null : 1)}
                  >
                    <h5 className="m-0 p-0">Topic 2 Question</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                     <CLabel>What is capital of India?</CLabel>
                    <CFormGroup row>
                 
                  <CCol md="9">
				  
                    <CFormGroup variant="checkbox" className="checkbox">
					 
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Dehli</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Mumbai</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Bangalore</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Chenni</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
                      <h5>Courses :	Home Revise</h5>
                      <h5>Subject : Subject Name</h5>
                      <h5>Topic : Topic Name</h5>
                      <CLabel>Created By :	Admin</CLabel><br/>
                      <CLabel>Created On :	Monday, 01 Jun, 2020 11:07:57 PM</CLabel> 
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 2 ? null : 2)}
                  >
                    <h5 className="m-0 p-0">Topic 3 Question</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                     <CLabel>What is capital of India?</CLabel>
                    <CFormGroup row>
                 
                  <CCol md="9">
				  
                    <CFormGroup variant="checkbox" className="checkbox">
					 
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Dehli</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Mumbai</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Bangalore</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Chenni</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
                      <h5>Courses :	Home Revise</h5>
                      <h5>Subject : Subject Name</h5>
                      <h5>Topic : Topic Name</h5>
                      <CLabel>Created By :	Admin</CLabel><br/>
                      <CLabel>Created On :	Monday, 01 Jun, 2020 11:07:57 PM</CLabel> 
                  </CCardBody>
                </CCollapse>
              </CCard>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
	   <CCol xl="6">
        <CCard>
          <CCardHeader>
           Subject Topic 2
          </CCardHeader>
          <CCardBody>
            <div id="accordion">
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                  >
                    <h5 className="m-0 p-0">Questions 1</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
                      <CLabel>What is capital of India?</CLabel>
                    <CFormGroup row>
                 
                  <CCol md="9">
				  
                    <CFormGroup variant="checkbox" className="checkbox">
					 
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Dehli</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Mumbai</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Bangalore</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Chenni</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
                      <h5>Courses :	Home Revise</h5>
                      <h5>Subject : Subject Name</h5>
                      <h5>Topic : Topic Name</h5>
                      <CLabel>Created By :	Admin</CLabel><br/>
                      <CLabel>Created On :	Monday, 01 Jun, 2020 11:07:57 PM</CLabel> 
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 1 ? null : 1)}
                  >
                    <h5 className="m-0 p-0">Questions 2</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                  <CLabel>What is capital of India?</CLabel>
                    <CFormGroup row>
                 
                  <CCol md="9">
				  
                    <CFormGroup variant="checkbox" className="checkbox">
					 
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Dehli</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Mumbai</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Bangalore</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Chenni</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
                      <h5>Courses :	Home Revise</h5>
                      <h5>Subject : Subject Name</h5>
                      <h5>Topic : Topic Name</h5>
                      <CLabel>Created By :	Admin</CLabel><br/>
                      <CLabel>Created On :	Monday, 01 Jun, 2020 11:07:57 PM</CLabel> 
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 2 ? null : 2)}
                  >
                    <h5 className="m-0 p-0">Questions 3</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                     <CLabel>What is capital of India?</CLabel>
                    <CFormGroup row>
                 
                  <CCol md="9">
				  
                    <CFormGroup variant="checkbox" className="checkbox">
					 
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Dehli</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Mumbai</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Bangalore</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Chenni</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
                      <h5>Courses :	Home Revise</h5>
                      <h5>Subject : Subject Name</h5>
                      <h5>Topic : Topic Name</h5>
                      <CLabel>Created By :	Admin</CLabel><br/>
                      <CLabel>Created On :	Monday, 01 Jun, 2020 11:07:57 PM</CLabel> 
                  </CCardBody>
                </CCollapse>
              </CCard>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
	   <CCol xl="6">
        <CCard>
          <CCardHeader>
            Subject Topic 3
          </CCardHeader>
          <CCardBody>
            <div id="accordion">
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                  >
                    <h5 className="m-0 p-0">Topic Question 1</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
                   <CLabel>What is capital of India?</CLabel>
                    <CFormGroup row>
                 
                  <CCol md="9">
				  
                    <CFormGroup variant="checkbox" className="checkbox">
					 
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Dehli</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Mumbai</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Bangalore</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Chenni</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
                      <h5>Courses :	Home Revise</h5>
                      <h5>Subject : Subject Name</h5>
                      <h5>Topic : Topic Name</h5>
                      <CLabel>Created By :	Admin</CLabel><br/>
                      <CLabel>Created On :	Monday, 01 Jun, 2020 11:07:57 PM</CLabel> 
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 1 ? null : 1)}
                  >
                    <h5 className="m-0 p-0">Topic Question 2</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                    <CLabel>What is capital of India?</CLabel>
                    <CFormGroup row>
                 
                  <CCol md="9">
				  
                    <CFormGroup variant="checkbox" className="checkbox">
					 
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Dehli</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Mumbai</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Bangalore</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Chenni</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
                      <h5>Courses :	Home Revise</h5>
                      <h5>Subject : Subject Name</h5>
                      <h5>Topic : Topic Name</h5>
                      <CLabel>Created By :	Admin</CLabel><br/>
                      <CLabel>Created On :	Monday, 01 Jun, 2020 11:07:57 PM</CLabel> 
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 2 ? null : 2)}
                  >
                    <h5 className="m-0 p-0">Topic Question 3</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
              <CLabel>What is capital of India?</CLabel>
                    <CFormGroup row>
                 
                  <CCol md="9">
				  
                    <CFormGroup variant="checkbox" className="checkbox">
					 
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Dehli</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Mumbai</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Bangalore</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Chenni</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
                      <h5>Courses :	Home Revise</h5>
                      <h5>Subject : Subject Name</h5>
                      <h5>Topic : Topic Name</h5>
                      <CLabel>Created By :	Admin</CLabel><br/>
                      <CLabel>Created On :	Monday, 01 Jun, 2020 11:07:57 PM</CLabel> 
                  </CCardBody>
                </CCollapse>
              </CCard>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xl="6">
        <CCard>
          <CCardHeader>
           Subject Topic 4
          </CCardHeader>
          <CCardBody>
            <div id="accordion">
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                  >
                    <h5 className="m-0 p-0">Topic Question 1</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
                  <CLabel>What is capital of India?</CLabel>
                    <CFormGroup row>
                 
                  <CCol md="9">
				  
                    <CFormGroup variant="checkbox" className="checkbox">
					 
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Dehli</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Mumbai</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Bangalore</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Chenni</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
                      <h5>Courses :	Home Revise</h5>
                      <h5>Subject : Subject Name</h5>
                      <h5>Topic : Topic Name</h5>
                      <CLabel>Created By :	Admin</CLabel><br/>
                      <CLabel>Created On :	Monday, 01 Jun, 2020 11:07:57 PM</CLabel> 
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 1 ? null : 1)}
                  >
                    <h5 className="m-0 p-0">Topic Question 2</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                    <CLabel>What is capital of India?</CLabel>
                    <CFormGroup row>
                 
                  <CCol md="9">
				  
                    <CFormGroup variant="checkbox" className="checkbox">
					 
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Dehli</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Mumbai</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Bangalore</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Chenni</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
                      <h5>Courses :	Home Revise</h5>
                      <h5>Subject : Subject Name</h5>
                      <h5>Topic : Topic Name</h5>
                      <CLabel>Created By :	Admin</CLabel><br/>
                      <CLabel>Created On :	Monday, 01 Jun, 2020 11:07:57 PM</CLabel> 
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 2 ? null : 2)}
                  >
                    <h5 className="m-0 p-0">Topic Question 3</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                  <CLabel>What is capital of India?</CLabel>
                    <CFormGroup row>
                 
                  <CCol md="9">
				  
                    <CFormGroup variant="checkbox" className="checkbox">
					 
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Dehli</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Mumbai</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox 
                        id="checkbox1" 
                        name="checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox1"> Bangalore</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
					
                      <CInputCheckbox id="checkbox2" name="checkbox2" value="option2" />
                      <CLabel variant="checkbox" className="form-check-label" htmlFor="checkbox2">Chenni</CLabel>
                    </CFormGroup>
					
                  </CCol>
                </CFormGroup>
                      <h5>Courses :	Home Revise</h5>
                      <h5>Subject : Subject Name</h5>
                      <h5>Topic : Topic Name</h5>
                      <CLabel>Created By :	Admin</CLabel><br/>
                      <CLabel>Created On :	Monday, 01 Jun, 2020 11:07:57 PM</CLabel> 
                  </CCardBody>
                </CCollapse>
              </CCard>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SearchQuestions
