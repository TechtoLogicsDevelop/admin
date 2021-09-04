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
  CPagination,
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
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const BusinessArtist = () => {
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
          Business Artist
			 <div className="text-right">
			 <CHeaderNavLink   to="/businessprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
		   
            <CCardBody>
              
             
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Photo</th>
                    <th className="text-center">Your Artists</th>
					 <th className="text-center">Presentation Type</th>
					  <th className="text-center">Start Time</th>
					   <th className="text-center">End Time</th>
                   <th className="text-center">Comission %*</th>
				    <th className="text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                   <td>  
				   <div className="c-avatar">
                        <img src={'avatars/8.jpg'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
					  </td>
                  
                     <td className="text-center">
                    Tao Yi
                    </td>
					  <td className="text-center">
                   Artist
                    </td>
					   <td className="text-center">
                   20-08-2021
                    </td>
					   <td className="text-center">
                    20-08-2022
                    </td>
					   <td className="text-center">
                    30%
                    </td>
					   <td className="text-center">
                    <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					
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

export default BusinessArtist
