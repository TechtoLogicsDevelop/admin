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
import CIcon from '@coreui/icons-react'


const EventsMaster = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <>
      
     
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Events List group
              
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="3">
                  <CListGroup id="list-tab" role="tablist">
                    <CListGroupItem onClick={() => setActiveTab(0)} action active={activeTab === 0} >Upcomming Events  ( 5 )</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(1)} action active={activeTab === 1} >Today ( 5 )</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(2)} action active={activeTab === 2} >This Week ( 5 )</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(3)} action active={activeTab === 3} >Next Week ( 5 )</CListGroupItem>
					 <CListGroupItem onClick={() => setActiveTab(4)} action active={activeTab === 4} >Next  Month ( 5 )</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(5)} action active={activeTab === 5} >This Month ( 5 )</CListGroupItem>
                    <CListGroupItem onClick={() => setActiveTab(6)} action active={activeTab === 6} >Old Events ( 5 )</CListGroupItem>
                   
                  </CListGroup>
                </CCol>
                <CCol xs="8">
                  <CTabContent>
                    <CTabPane active={activeTab === 0} >
                      <p>
					   <CListGroup>
                <CListGroupItem action active>
                  <h5 className="d-flex w-100 justify-content-between">
                    List group item heading
                     <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                  </h5>
                  <div className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    <small>Donec id elit non mi porta.</small>
                  </div>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 1}>
                      <p>
					   <CListGroup>
                <CListGroupItem action active>
                  <h5 className="d-flex w-100 justify-content-between">
                     Moonlit Festival 2021  
                     <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
						
                      </div>
                  </h5>
                  <div className="mb-1">
                   The Den Bengaluru, ITPL Main Rd, KIADB Export Promotion Industrial Area, Whitefield Bengaluru, Karnataka
				   <br/>
                    <small>Location Map</small>&nbsp;
					<br/>
					<br/>
					 <CIcon name="cil-people" /> People <CIcon name="cil-people" />Share<CIcon name="cil-people" />
                  </div>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 2}>
                      <p>
					   <CListGroup>
                <CListGroupItem action active>
                  <h5 className="d-flex w-100 justify-content-between">
                    List group item heading
                    <small>3 days ago</small>
                  </h5>
                  <div className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    <small>Donec id elit non mi porta.</small>
                  </div>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
              </CListGroup>

					  </p>
                    </CTabPane>
                    <CTabPane active={activeTab === 3}>
                      <p> <CListGroup>
                <CListGroupItem action active>
                  <h5 className="d-flex w-100 justify-content-between">
                    List group item heading
                     <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                  </h5>
                  <div className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    <small>Donec id elit non mi porta.</small>
                  </div>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
              </CListGroup></p>
                    </CTabPane>
					 <CTabPane active={activeTab === 4}>
                      <p> <CListGroup>
                <CListGroupItem action active>
                  <h5 className="d-flex w-100 justify-content-between">
                    List group item heading
                     <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                  </h5>
                  <div className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    <small>Donec id elit non mi porta.</small>
                  </div>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
              </CListGroup></p>
                    </CTabPane>
                    <CTabPane active={activeTab === 5}>
                      <p> <CListGroup>
                <CListGroupItem action active>
                  <h5 className="d-flex w-100 justify-content-between">
                    List group item heading
                     <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                  </h5>
                  <div className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    <small>Donec id elit non mi porta.</small>
                  </div>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
              </CListGroup></p>
                    </CTabPane>
                    <CTabPane active={activeTab === 6}>
                      <p> <CListGroup>
                <CListGroupItem action active>
                  <h5 className="d-flex w-100 justify-content-between">
                    List group item heading
                     <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                  </h5>
                  <div className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    <small>Donec id elit non mi porta.</small>
                  </div>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
              </CListGroup></p>
                    </CTabPane>
					<CTabPane active={activeTab === 7}>
                      <p> <CListGroup>
                <CListGroupItem action active>
                  <h5 className="d-flex w-100 justify-content-between">
                    List group item heading
                     <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                  </h5>
                  <div className="mb-1">
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                    <small>Donec id elit non mi porta.</small>
                  </div>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
                <CListGroupItem action>
                  <h5>List group item heading</h5>
                  <div>
                    Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                  </div>
                  <small>Small.</small>
                </CListGroupItem>
              </CListGroup></p>
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

export default EventsMaster
