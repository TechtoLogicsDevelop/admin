import React, { useState } from 'react'
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
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
  CHeaderNavLink,
  CRow,
  CListGroup,
  CListGroupItem,
  CTabContent,
  CTabPane,
  CBadge,
  CLink,
  
  
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'
const ProfileEvents = () => {
	 const [activeTab, setActiveTab] = useState(0)
	 const [collapsed, setCollapsed] = React.useState(true)
        const [showCard, setShowCard] = React.useState(true)

	 const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
 
  return (
    <>
     
     
      <CRow>
     
	  <CCol>
          <CCard>
            <CCardHeader>
            Profile Events
              <div className="text-right">
			 <CHeaderNavLink   to="/publicprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
            <CCardBody>
			 
              <CRow>
                <CCol xs="2">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >All</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Current</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Upcoming</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Past</CListGroupItem>
					
                     
                   
                  </CListGroup>
                </CCol>
                <CCol xs="10">
                  <CTabContent>
                    <CTabPane active={activeTab === 0} >
                      <p>
					   <CListGroup>
                <CListGroupItem action >
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
       </CListGroupItem>
               
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 1}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
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
       </CListGroupItem>
               
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 2}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
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
     

                </CListGroupItem>
               
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 3}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
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
                </CListGroupItem>
               
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 4}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
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
     

                </CListGroupItem>
               
              </CListGroup>

					  </p>
                    </CTabPane>
           
             
                  </CTabContent>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
    </CRow>
    </>
  )
}

export default ProfileEvents
