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
  CHeaderNavLink,
  CTabPane
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const ProfileActivity = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
     
      <CRow>
        
        <CCol sm="12" xl="12">
          <CCard>
            <CCardHeader>
              Profile Activity
              <small> accent with color</small>
			   <div className="text-right">
			 <CHeaderNavLink   to="/profilesettings">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
            <CCardBody>
              <CListGroup accent>
                <CListGroupItem accent="primary" color="primary">Today</CListGroupItem>
				
                <CListGroupItem accent="secondary" color="secondary">Last 3 days</CListGroupItem>
                <CListGroupItem accent="success" color="success">Last Week</CListGroupItem>
                <CListGroupItem accent="danger" color="danger">Last Month</CListGroupItem>
                <CListGroupItem accent="warning" color="warning">This is a warning list group item</CListGroupItem>
                <CListGroupItem accent="info" color="info">This is a info list group item</CListGroupItem>
                <CListGroupItem accent="light" color="light">This is a light list group item</CListGroupItem>
                <CListGroupItem accent="dark" color="dark">This is a dark list group item</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      
    </>
  )
}

export default ProfileActivity
