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


const EmailTemplates = () => {
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
            Email Templates
			  <div className="text-right">
			 <CHeaderNavLink   to="/systemconfig">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
		   
            <CCardBody>
              
               <CCardHeader>
		  
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Name</th>
                    <th className="text-center">Recipient</th>
					<th></th>
					                 
					<th>Status</th>
					
					  <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                     <h5>Email Header (all emails)</h5>
             <p>Content is substituted wherever [#EmailHeader] is used in an email template body</p>
                     
                    </td>
					 <td className="text-center">
                    
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Enabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				      <tr>
                    
                    <td>
                     <h5>Email Footer (all emails)</h5>
                   <p>Content is substituted wherever [#EmailFooter] is used in an email template body</p>
                     
                    </td>
					 <td className="text-center">
                    
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Enabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				   <tr>
                    
                    <td>
                     <h5>Ask Listing Question</h5>
                   <p>Ask buyer a question</p>
                     
                    </td>
					 <td className="text-center">
                    Buyer
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Enabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				   <tr>
                    
                    <td>
                     <h5>Ask Listing Question</h5>
                   <p>Ask seller a listing question</p>
                     
                    </td>
					 <td className="text-center">
                    Seller
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Enabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				   <tr>
                    
                    <td>
                     <h5>Ask Listing Question</h5>
                   <p>Ask buyer a question</p>
                     
                    </td>
					 <td className="text-center">
                    Buyer
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Enabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				   <tr>
                    
                    <td>
                     <h5>Bid Confirmation</h5>
                   <p>Notify bidder they placed a bid</p>
                     
                    </td>
					 <td className="text-center">
                    Bidder
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				   <tr>
                    
                    <td>
                     <h5>Outbid Notification</h5>
                   <p>Notify bidder they were outbid</p>
                     
                    </td>
					 <td className="text-center">
                    Bidder
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				   <tr>
                    
                    <td>
                     <h5>Purchase Confirmation</h5>
                   <p>Notify buyer they purchased an item</p>
                     
                    </td>
					 <td className="text-center">
                    Buyer
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				    <tr>
                    
                    <td>
                     <h5>Purchase Confirmation, partial qty</h5>
                   <p>Notify buyer they purchased an item, the item hasn't yet ended</p>
                     
                    </td>
					 <td className="text-center">
                    Buyer
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				    <tr>
                    
                    <td>
                     <h5>Contact Us Message</h5>
                   <p>Send Contact Us message to administrator</p>
                     
                    </td>
					 <td className="text-center">
                    Admin
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				     <tr>
                    
                    <td>
                     <h5>Registration Approved</h5>
                   <p>Notify new user their account has been approved</p>
                     
                    </td>
					 <td className="text-center">
                    User
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				     <tr>
                    
                    <td>
                     <h5>Registration Needs Approval</h5>
                   <p>Notify administrator that a new user account needs approval</p>
                     
                    </td>
					 <td className="text-center">
                    Admin
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				     <tr>
                    
                    <td>
                     <h5>Report Failed</h5>
                   <p>Notify user executing a CSV export that the CSV report failed</p>
                     
                    </td>
					 <td className="text-center">
                    Admin
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				  <tr>
                    
                    <td>
                     <h5>Report Ready</h5>
                   <p>Notify user executing a CSV export that the CSV report is ready</p>
                     
                    </td>
					 <td className="text-center">
                    Admin
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				    <tr>
                    
                    <td>
                     <h5>Messaging Abuse Reported</h5>
                   <p>Notify administrator of messaging abuse</p>
                     
                    </td>
					 <td className="text-center">
                    Admin
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				    <tr>
                    
                    <td>
                     <h5>Reset Password</h5>
                   <p>Send user a password reset email</p>
                     
                    </td>
					 <td className="text-center">
                     User
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				      <tr>
                    
                    <td>
                     <h5>Bid Received</h5>
                   <p>Notify seller that a bidder placed a bid</p>
                     
                    </td>
					 <td className="text-center">
                     Seller
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				       <tr>
                    
                    <td>
                     <h5>Listing Posted Confirmation</h5>
                   <p>Notify seller that they've created a new listing</p>
                     
                    </td>
					 <td className="text-center">
                     Seller
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				         <tr>
                    
                    <td>
                     <h5>Listing Ended Unsuccessfully</h5>
                   <p>Notify seller that their listing did not sell</p>
                     
                    </td>
					 <td className="text-center">
                     Seller
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				       <tr>
                    
                    <td>
                     <h5>Site Fee Invoice</h5>
                   <p>Notify seller of fees they currently owe to the site</p>
                     
                    </td>
					 <td className="text-center">
                     User
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				    <tr>
                    
                    <td>
                     <h5>Sales Invoice</h5>
                   <p>Notify buyers of pending invoices needing payment</p>
                     
                    </td>
					 <td className="text-center">
                     Buyer
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				  <tr>
                    
                    <td>
                     <h5>Sale Confirmation</h5>
                   <p>Notify seller that their listing sold</p>
                     
                    </td>
					 <td className="text-center">
                     Seller
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
				    <tr>
                    
                    <td>
                     <h5>Sale Confirmation</h5>
                   <p>Notify seller that their listing sold</p>
                     
                    </td>
					 <td className="text-center">
                     Seller
                    </td>
					 <td className="text-center">
                     <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Edit</span></CButton>
                    </td>
                                        
					<td>
					Disabled
					</td>
					
					<td>
					 <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2">Disable</span></CButton>
					</td>
                  </tr>
                </tbody>
              </table>
            <br/>
				 
          <CPagination
            align="end"
            activePage={currentPage}
            pages={5}
            onActivePageChange={setCurrentPage}
          />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default EmailTemplates
