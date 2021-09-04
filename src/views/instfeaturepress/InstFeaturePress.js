import React, { useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CListGroup,
  CListGroupItem,
  CRow,
  CTabContent,
  CButton,
  CSwitch,
  CHeaderNavLink,
  CFormGroup,
  CLabel,
  CSelect,
  CProgress,
  CTabPane
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const InstFeaturePress = () => {
	const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
          Institute Feature & Press
			 <div className="text-right">
			 <CHeaderNavLink   to="/institutionprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
		   
            <CCardBody>
              
              <CRow>
                <CCol xs="2">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Featured </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Press</CListGroupItem>
                   
                   
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

export default InstFeaturePress
