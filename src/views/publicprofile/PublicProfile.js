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
const PublicProfile = () => {
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
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
          Public Profile
              <div className="text-right">
			 <CHeaderNavLink   to="/usersprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
            <CCardBody>
			
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			  
                 <CFormGroup >
				 
                  <CCol md="12">
				
					 <div className="text-center">
					 <div className="c-avatar">
                        <img src={'avatars/8.jpg'} className="c-avatar-img" />
                        <span className="c-avatar-status bg-success"></span>
                      </div><br/>
					  <div className="text-center">
                      <CLabel ><strong>Naini Todi</strong>*  *  *</CLabel><br/>
					  <p>Artist</p></div>
					   <p className="text-center">
		   <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span>Followers</span></CButton>
			  <CButton size="sm" className="btn-pinterest btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span>Following</span></CButton>
              
              <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span>Supporters</span></CButton>
			  <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span>Supporting</span></CButton>
             
              <CButton size="sm" className="btn-flickr btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span>Communities</span></CButton>
			   
            
            </p>
			<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                   </div>
			 
                  </CCol>
                </CFormGroup>
				 
              </CForm>
            </CCardBody>
          
          </CCard>
         
        </CCol>
       
      </CRow>
      <CRow>
     
	  <CCol>
          <CCard>
            <CCardHeader>
             Users Activities
              
            </CCardHeader>
			
            <CCardBody>
			 
              <CRow>
                <CCol xs="2">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Feed </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Showcase</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Catalogs</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Art Social</CListGroupItem>
					 <CListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Tagged</CListGroupItem>
					  <CListGroupItem onClick={() => setActiveTab(5)} action active={activeTab === 5} >About</CListGroupItem>
                     <CListGroupItem onClick={() => setActiveTab(6)} action active={activeTab === 6} >Team </CListGroupItem>
                   
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
            <CTabPane active={activeTab === 5}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
				
                  <p className="text-center">
		   <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span> <CHeaderNavLink   to="/profilelinkedaccounts">LINKED ACCOUNTS</CHeaderNavLink> </span></CButton>
			  <CButton size="sm" className="btn-pinterest btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink   to="/profileabout">ABOUT</CHeaderNavLink></span></CButton>
              
              <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span><CHeaderNavLink   to="/profileservices">SERVICES</CHeaderNavLink></span></CButton>
			  <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span><CHeaderNavLink   to="/profiledisciplines">DISCIPLINES</CHeaderNavLink></span></CButton>
             
              <CButton size="sm" className="btn-flickr btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span><CHeaderNavLink   to="/">SKILLS & ENDORSEMENTS</CHeaderNavLink></span></CButton>
			   <CButton size="sm" className="btn-reddit btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span><CHeaderNavLink   to="/featurepress">FEATURES & PRESS</CHeaderNavLink></span></CButton>
              
              <CButton size="sm" className="btn-stack-overflow btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span><CHeaderNavLink   to="/reviewsrecommendations">REVIEWS & RECOMMENDATIONS</CHeaderNavLink></span></CButton>
              <CButton size="sm" className="btn-facebook btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span><CHeaderNavLink   to="/profileeducation">EDUCATION</CHeaderNavLink></span></CButton>
            <CButton size="sm" className="btn-pinterest btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span><CHeaderNavLink   to="/workexperience">WORK EXPERIENCE</CHeaderNavLink></span></CButton>
																 
             
              <CButton size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span><CHeaderNavLink   to="/profilecertificate">CERTIFICATIONS</CHeaderNavLink></span></CButton>
             
              <CButton size="sm" className="btn-dribbble btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span><CHeaderNavLink   to="/accomplishments">ACCOMPLISHMENTS</CHeaderNavLink></span></CButton>
             
              <CButton size="sm" className="btn-vimeo btn-brand mr-1 mb-1"><span className="mfs-2"><span
																class="label label-primary ml-10">[0]</span><CHeaderNavLink   to="/profileevents">MY EVENTS</CHeaderNavLink></span></CButton>
            
            </p>
                </CListGroupItem>
               
              </CListGroup>

					  </p>
                    </CTabPane>
               <CTabPane active={activeTab === 6}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                 <CRow>
       
        <CCol xs="12" sm="6" md="3">
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
			<p className="text-center">Tao Yi </p>
          </CCard>
        </CCol>
       <CCol xs="12" sm="6" md="3">
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
			<p className="text-center">Brijamohan Mallick </p>
          </CCard>
        </CCol>
		  <CCol xs="12" sm="6" md="3">
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
			<p className="text-center">Fatima Cambeiro </p>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="3">
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
			<p className="text-center">Amacheah Chukwudi </p>
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

export default PublicProfile
