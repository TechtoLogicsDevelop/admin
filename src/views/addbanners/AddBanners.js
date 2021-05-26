import React from 'react'
import {
	CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const AddBanners = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Sponsors Registration
             
			 
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   <CFormGroup row className="my-0">
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel col md="3" htmlFor="banner">Upload Banner Image</CLabel>
                     <CInputFile id="banner" name="banner"/>
                  </CFormGroup>
                </CCol>
               
              </CFormGroup>
			  
			      <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Banner Group</CLabel>
                     <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Group1</option>
                      <option value="2">Group2</option>
                      <option value="3">Group3</option>
					 
                     
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Banner Zone</CLabel>
                     <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Top Zone</option>
                      <option value="2">Side bar</option>
                      <option value="3">Footer Zone</option>
					   <option value="4">Offers Zone</option>
					    <option value="4">Discounts Zone</option>
					 
                     
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
                    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Banner to Display</CLabel>
                     <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">First Banner</option>
                      <option value="2">Second</option>
                      <option value="3">Third</option>
					 
                     
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
				 <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Banner Group</CLabel>
                     <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Top Zone</option>
                      <option value="2">Side bar</option>
                      <option value="3">Footer Zone</option>
					   <option value="4">Offers Zone</option>
					    <option value="4">Discounts Zone</option>
					 
                     
                    </CSelect>
                  </CCol>
                  </CFormGroup>
                </CCol>
                
              </CFormGroup>
			  
			 
			    <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CCol md="3">
                    <CLabel>Height</CLabel>
                  </CCol>
                  <CCol md="6">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox 
                        custom 
                        id="inline-checkbox1" 
                        name="inline-checkbox1" 
                        value="option1" 
                      />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Auto</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Specify</CLabel><CInput id="height" placeholder="Specify" />
                    </CFormGroup>
                    
                  </CCol>
                  </CFormGroup>
                </CCol>
				
               <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Width</CLabel>
                  </CCol>
                  <CCol md="6">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Auto</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">100%</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Specify</CLabel><CInput id="width" placeholder="Specify" />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              </CFormGroup>
			   <CFormGroup row className="my-0">
			   <CCol md="3">
                    <CLabel>Show the banners only between these days</CLabel>
                  </CCol>
			  
			   <br/>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">From Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
				
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">To Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
			
				
              </CFormGroup> 
			   <hr/>
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Show the banners Only On</CLabel>
                  </CCol>
                  <CCol md="12">
				   <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Mon</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Tue</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Wed</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Thu</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Fri</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Sat</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Sun</CLabel>
                    </CFormGroup>
					
                   
                  </CCol>
                </CFormGroup>
			     <CFormGroup row className="my-0">
			   
				<CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">Maximum Impression</CLabel>
                    <CInput id="first" placeholder=" Numbers" />
                  </CFormGroup>
                </CCol>
				<CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">CTR %</CLabel>
                    <CInput id="first" placeholder=" 0.00% " />
                  </CFormGroup>
                </CCol>
				
              </CFormGroup> 
              </CForm>
			   
			 
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
          
        </CCol>
            
      
      </CRow>
     
     
    </>
  )
}

export default AddBanners
