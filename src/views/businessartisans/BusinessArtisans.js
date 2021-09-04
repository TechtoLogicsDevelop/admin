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


const BusinessArtisans = () => {
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
          Business Artisans
			 <div className="text-right">
			 <CHeaderNavLink   to="/businessprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
		   
            <CCardBody>
               
             
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Photo</th>
                    <th className="text-center">Name</th>
					 <th className="text-center">Bio</th>
					  <th className="text-center">City,Country</th>
					   <th className="text-center">Video + Image</th>
                   <th className="text-center">Products Listing</th>
				    
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
                   Bangalore,Karnataka,India
                    </td>
					   <td className="text-center">
                     <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
					   <td className="text-center">
                     <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
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

export default BusinessArtisans
