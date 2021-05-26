import React from 'react'
import {
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

const EventsPublish = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add the New Events Publish
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   
			    <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Organizer </CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Organizer</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Sponsor</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Sponsor</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Service Type</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Service</option>
                      <option value="1">Deliverable </option>
                      <option value="2">Downloadable </option>
                      <option value="3">Viewable</option>
					   <option value="4">Participation</option> 
					 <option value="5">Live Streaming</option>
					  <option value="6">Bid / Auctions</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			     <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Meta Tag</CLabel>
                    <CInput id="first" placeholder="Meta Tag" />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">Meta Keyword</CLabel>
                    <CInput id="last" placeholder="Meta Keyword" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			     <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="first">Meta Data</CLabel>
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder=" Meta Data..." 
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="last">Meta Description</CLabel>
                    <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder=" Meta Description..." 
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			   <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Main Category </CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Main</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Category</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Category</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Sub Category </CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Sub Category</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Event Group *</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Group</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Event Location *</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Location</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Event Type</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Event type</option>  
                      <option value="1">Group</option>
                      <option value="2">Solo</option>
                      <option value="3">Collaborative</option>
					  
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			    <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first"> Event Name</CLabel>
                    <CInput id="first" placeholder=" Name" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="last"> Description</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="  Description..." 
                    />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="last">Information</CLabel>
                     <CTextarea 
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="3"
                      placeholder="  Information..." 
                    />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="2">
                  <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                    />
                      <CLabel >Free</CLabel>
                   
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                    />
                      <CLabel >Ticketed</CLabel>
                   
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  
                    
                     <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="primary"
                      defaultChecked
                    />
                      <CLabel >Online Event</CLabel>
                   
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="primary"
                      defaultChecked
                    />
                      <CLabel >Offline Event</CLabel>
                   
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  
                    
                     <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="primary"
                      defaultChecked
                    />
                      <CLabel >Accommodations</CLabel>
                   
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="primary"
                      defaultChecked
                    />
                      <CLabel >Parking</CLabel>
                   
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			  
			  
			   <CFormGroup row className="my-0">
			   
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">Start Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
				<CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">Start Time</CLabel>
                    <CInput id="first" placeholder=" Time" />
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">End Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup>
                     <CLabel htmlFor="select">Select Time zone</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Time zone</option>  
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
					  
                    </CSelect>
                  </CFormGroup>
                </CCol>
				<CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">Minimum Attendee</CLabel>
                    <CInput id="first" placeholder=" Numbers" />
                  </CFormGroup>
                </CCol>
				<CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">Maximum Attendee</CLabel>
                    <CInput id="first" placeholder=" Numbers " />
                  </CFormGroup>
                </CCol>
				
              </CFormGroup> 
				
			   <hr/>
                <hr/>
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Ways to Buy</CLabel>
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
                      <CLabel >Add to Cart</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Add to Wishlist</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >BuyNow</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Inquire</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Rentals</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Bid</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Donate</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                      <CLabel >Support</CLabel>
                    </CFormGroup>
                   
                  </CCol>
                </CFormGroup>
               
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center" >
			 <CButton type="submit" size="sm" color="info"><CIcon name="cil-scrubber" /> Save </CButton>&nbsp;&nbsp;
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Save & Continue</CButton>&nbsp;&nbsp;
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
     
     
      
     
     
    </>
  )
}

export default EventsPublish
