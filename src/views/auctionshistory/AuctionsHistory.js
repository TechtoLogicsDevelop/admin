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
  
   CInputCheckbox,
   CInputGroup,
   CInputGroupPrepend,
   CInputGroupText,
  CPagination,
  CFormText,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const AuctionsHistory = () => {
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
            Auctions History
			
            </CCardHeader>
			
		   
            <CCardBody>
              
               <CCardHeader>
		   
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                    <th className="text-center">Bidder Id</th>
                    <th className="text-center">Bidder Name</th>
                    <th className="text-center">Email</th>
					 <th className="text-center">Phone</th>
					<th className="text-center">Item</th>
                    <th className="text-center">Bid Amount</th>
					<th className="text-center">Date</th>
					<th>Status</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                     B-2054
                    </td>
                    <td>
                     Sandeep
                     
                    </td>
					 <td className="text-center">
                    sandeep@gmail.com
                    </td>
                    <td className="text-center">
                    9632587410
                    </td>
                       <td className="text-center">
                 Abstract Art on canvas 
                    </td>
					 <td className="text-center">
                    $1,400.00
                     
                    </td>
					<td>
					11/08/2021
					</td>
					
					<td>
					Won
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

export default AuctionsHistory
