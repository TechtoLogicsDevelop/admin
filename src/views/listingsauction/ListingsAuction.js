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
  CPopover,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const ListingsAuction = () => {
 
  return (
    <>
      
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Listings Auction
              <div className="text-right">
			 <CHeaderNavLink   to="/systemconfig">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   <CFormGroup row>
                  <CCol md="3"><CLabel>Enable</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
			   <CFormGroup row>
                  <CCol md="3"><CLabel>Listing Duration Options</CLabel></CCol>
                  <CCol md="9">
                     <CSelect custom name="select" id="select">
                      <option value="0">Select </option>
                      <option value="1">Start date and Duration</option>
                      <option value="2">Start date and End date</option>
                      <option value="3">Duration Only</option>
					  <option value="4">End date Only</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>
				  <CFormGroup row>
                  <CCol md="3"><CLabel>Duration Days List *</CLabel></CCol>
                  <CCol md="9">
                     <CInput id="text-input" name="text-input" placeholder=" 2,5,8" />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Allow Changes To Listing End Date / Duration</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Allow Edit of Start Date for Scheduled Listings</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
			    <CFormGroup row>
                  <CCol md="3"><CLabel>Max Auto Relists </CLabel></CCol>
                  <CCol md="9">
                     <CInput id="text-input" name="text-input" placeholder=" " />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable Shipping</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable Proxy Bidding</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Proxy Bidding Below Reserve</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Disable Buy Now After Winning Bids</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable Reserve</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable Buy Now</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable Make Offer</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable Quick Bid</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable Inline Bidding (Quick Bid)</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				 <CFormGroup row>
                  <CCol md="3"><CLabel>Enable Large Bid Confirmation</CLabel></CCol>
                  <CCol md="9">
                     <CSwitch
                      className="mr-1"
                      color="info"
                      defaultChecked
                      shape="pill"
                      variant="outline"
                    />
                    
                  </CCol>
                </CFormGroup>
				
              </CForm>
            </CCardBody>
            <CCardFooter className="text-center">
              <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Save Auction Configuration</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
         
        </CCol>
       
      </CRow>
     
    </>
  )
}

export default ListingsAuction
