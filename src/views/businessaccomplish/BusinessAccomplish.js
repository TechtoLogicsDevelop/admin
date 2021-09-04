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
import { DocsLink } from 'src/reusable'
import CIcon from '@coreui/icons-react'


const BusinessAccomplish = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      
     <CRow>
     
	  <CCol>
          <CCard>
            <CCardHeader>
            Business Accomplishments
			  <div className="text-right">
			 <CHeaderNavLink   to="/businessprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
            <CCardBody>
			  
              <CRow>
                <CCol xs="2">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Patents (1) </CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Awards (3)</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >Contests (10)</CListGroupItem>
                   
                  </CListGroup>
                </CCol>
                <CCol xs="10">
                  <CTabContent>
                    <CTabPane active={activeTab === 0} >
                      <p>
					   <CListGroup>
                <CListGroupItem action >
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   
                    <th className="text-center">Title</th>
					<th className="text-center">Location</th> 
					 <th className="text-center">Patent Issued</th>
                    <th className="text-center">Description</th>
                   
                   
					 <th className="text-center"><CIcon name="cil-people" /></th>
					 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                    <td className="text-center">
                     Messenger Bags
                    </td>
					 <td className="text-center"> 
                      Bisadora, LLC, Phoenix, AZ (US) US D507,107 S 
					  </td>
					  <td className="text-center"> 
					  Issued on Jul 12,2005 
					  </td>
                    <td className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat.  
					  </td>
                 
                   
                     
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                  </tr>
                 
                  
                </tbody>
              </table>
                </CListGroupItem>
               
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 1}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   
                    <th className="text-center">Title</th>
					<th className="text-center">Location</th> 
					 <th className="text-center">Patent Issued</th>
                    <th className="text-center">Description</th>
                   
                   
					 <th className="text-center"><CIcon name="cil-people" /></th>
					 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                    <td className="text-center">
                     Messenger Bags
                    </td>
					 <td className="text-center"> 
                      Bisadora, LLC, Phoenix, AZ (US) US D507,107 S 
					  </td>
					  <td className="text-center"> 
					  Issued on Jul 12,2005 
					  </td>
                    <td className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat.  
					  </td>
                 
                   
                     
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                  </tr>
                 
                  
                </tbody>
              </table>
                </CListGroupItem>
               
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 2}>
                      <p>
					   <CListGroup>
                <CListGroupItem action >
                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   
                    <th className="text-center">Title</th>
					<th className="text-center">Location</th> 
					 <th className="text-center">Patent Issued</th>
                    <th className="text-center">Description</th>
                   
                   
					 <th className="text-center"><CIcon name="cil-people" /></th>
					 
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                    <td className="text-center">
                     Messenger Bags
                    </td>
					 <td className="text-center"> 
                      Bisadora, LLC, Phoenix, AZ (US) US D507,107 S 
					  </td>
					  <td className="text-center"> 
					  Issued on Jul 12,2005 
					  </td>
                    <td className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus accumsan tortor posuere ac ut consequat.  
					  </td>
                 
                   
                     
					 <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                  </tr>
                 
                  
                </tbody>
              </table>
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
      <CRow>
        
      </CRow>
    </>
  )
}

export default BusinessAccomplish
