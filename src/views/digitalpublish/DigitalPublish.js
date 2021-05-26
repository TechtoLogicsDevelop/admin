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

const DigitalPublish = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
            Add the New Digital Publish
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			   
			    <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Manufacturer </CLabel>
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
                    <CLabel htmlFor="select">Select Vendor</CLabel>
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
                    <CLabel htmlFor="select">Select Products Group *</CLabel>
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
                    <CLabel htmlFor="select">Select Products Brand *</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Brand</option>
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
                    <CLabel htmlFor="select">Select Language</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Language</option>
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
                    <CLabel htmlFor="first"> Name</CLabel>
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
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first"> SKU/Item Code</CLabel>
                    <CInput id="first" placeholder=" SKU/Item Code" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="last"> Bar Code</CLabel>
                     <CInput id="first" placeholder=" Bar Code" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="last"> HSN</CLabel>
                    <CInput id="first" placeholder=" HSN" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			   <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Product Unit</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Product Unit</option>
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
                    <CLabel htmlFor="first">Product Discount Type</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Discount Type</option>
                      <option value="1">Discount Percentage</option>
                      <option value="2">Discount Ammount</option>
                    
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Tax Type</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Tax Type</option>
                      <option value="1">Fixed</option>
                      <option value="2">Variable</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			 
			  <hr/>
			   
				  <CFormGroup row className="my-0">
				   <CLabel htmlFor="last">Digital Products</CLabel>
                <CCol xs="2">
                  <CFormGroup>
				  <CLabel htmlFor="last">Digital 1</CLabel>
                     <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                     Digital 1
                    </CLabel>
                  </CFormGroup>
                </CCol>&nbsp;
                 <CCol xs="2">
                  <CFormGroup>
				  <CLabel htmlFor="last">Digital 2</CLabel>
                     <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                      Digital 2
                    </CLabel>
                  </CFormGroup>
                </CCol>&nbsp;
				  <CCol xs="2">
                  <CFormGroup>
				  <CLabel htmlFor="last">Digital 3</CLabel>
                     <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                    Digital 3
                    </CLabel>
                  </CFormGroup>
                </CCol>&nbsp;
				 <CCol xs="2">
                  <CFormGroup>
				  <CLabel htmlFor="last">Digital 4</CLabel>
                     <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                     Digital 4
                    </CLabel>
                  </CFormGroup>
                </CCol>&nbsp;
				<CCol xs="2">
                  <CFormGroup>
				  <CLabel htmlFor="last">Digital 5</CLabel>
                     <CInputFile custom id="custom-file-input"/>
                    <CLabel htmlFor="custom-file-input" variant="custom-file">
                     Digital 5
                    </CLabel>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
				 <hr/>
			   <CLabel htmlFor="first">Product Pricing</CLabel>
			   <CFormGroup row className="my-0">
			   <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">Ways to Watch</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Option</option>
                      <option value="1">Free</option>
                      <option value="2">Pay to Watch Now</option>
                      <option value="3">Support</option>
					   <option value="4">License</option>
                      <option value="5">Buy Copyright</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">Buying Price</CLabel>
                    <CInput id="first" placeholder="Buy Price" />
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">Sell Price</CLabel>
                     <CInput id="first" placeholder="Sell Price" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">Discount Value</CLabel>
                    <CInput id="first" placeholder="Discount Value" />
                  </CFormGroup>
                </CCol>
				<CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">Offer Tag</CLabel>
                    <CInput id="first" placeholder="Offer Tag" />
                  </CFormGroup>
                </CCol>
				<CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">Inventory  quantity</CLabel>
                    <CInput id="first" placeholder="inventory quantity" />
                  </CFormGroup>
                </CCol>
				
				
              </CFormGroup> 
			   <hr/>
			  
			   <CFormGroup row className="my-0">
			   
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="first">Mfg Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">SGST Rate</CLabel>
                     <CInput id="first" placeholder="SGST Rate" />
                  </CFormGroup>
                </CCol>
				 <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">CGST Rate</CLabel>
                    <CInput id="first" placeholder="CGST Rate" />
                  </CFormGroup>
                </CCol>
				<CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">IGST Rate</CLabel>
                    <CInput id="first" placeholder="IGST Rate" />
                  </CFormGroup>
                </CCol>
				<CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="last">Cess Rate</CLabel>
                    <CInput id="first" placeholder="Cess Rate" />
                  </CFormGroup>
                </CCol>
				
              </CFormGroup> 
				
			   <hr/>
                
                 <CFormGroup row>
                  <CCol md="3">
                    <CLabel><strong>Rarity</strong></CLabel>
                  </CCol>
                  <CCol md="12">
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="primary"
                      defaultChecked
                    />
                      <CLabel >Unique</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                      <CLabel >Limited Edition</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                     <CSwitch
                      className="mr-1"
                      color="warning"
                      defaultChecked
                      variant="opposite"
                    />
                      <CLabel>Open Edition</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                       <CSwitch
                      className="mr-1"
                      color="danger"
                      defaultChecked
                      shape="pill"
                    />
                      <CLabel >Unknown</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                       <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
					<br/>
                      <CLabel >Link With Stock</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                      <CLabel >Is Special</CLabel>
                    </CFormGroup>
					 <CFormGroup variant="custom-checkbox" inline>
                       <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                      <CLabel ><strong>Image showcase in Fronend</strong></CLabel>
                    </CFormGroup>
                   
                  </CCol>
                </CFormGroup>
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
				<hr/>
				 <CLabel htmlFor="first">Product Location</CLabel>
				<CFormGroup row className="my-0">
				
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="first">Vendors Location</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Vendors Location</option>
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
                    <CLabel htmlFor="first">Stores Location</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Store Location</option>
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
                    <CLabel htmlFor="first">Warehouses</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Warehouses</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
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

export default DigitalPublish
