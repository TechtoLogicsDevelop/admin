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


const ProfileMyEvents = () => {
		 const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
  const [currentPage, setCurrentPage] = useState(2)
  return (
    <>
          <CRow>
		   <CCard>
		    <CCardHeader>
          Profile My Events
		   <div className="text-right">
			 <CHeaderNavLink   to="/publicprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
		    </CCard>
        </CRow>
		 <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard>
		  
            <CCardHeader>
              
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
               <div >
                        <img src={'avatars/3.jpg'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
            </CCardBody>
			<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </CCard>
        </CCol>
       <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
               <div >
                        <img src={'avatars/4.jpg'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
            </CCardBody>
			<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </CCard>
        </CCol>
		  <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
               <div >
                        <img src={'avatars/5.jpg'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
            </CCardBody>
			<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
               <div >
                        <img src={'avatars/6.jpg'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
            </CCardBody>
			<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
               <div >
                        <img src={'avatars/7.jpg'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
            </CCardBody>
			<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard>
            <CCardHeader>
              
              <div className="card-header-actions">
                <CSwitch className={'float-right mb-0'} color={'info'} defaultChecked size={'sm'} tabIndex="0" />
              </div>
            </CCardHeader>
            <CCardBody>
               <div >
                        <img src={'avatars/8.jpg'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
            </CCardBody>
			<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </CCard>
        </CCol>
       
      </CRow>
    </>
  )
}

export default ProfileMyEvents
