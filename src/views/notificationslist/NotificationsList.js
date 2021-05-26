import React, { lazy } from 'react'
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
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'



const NotificationsList = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Messages Setting
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
		   <p>
               <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">All<span
																class="label label-primary ml-10">[3]</span></span></CButton> 
			 
              <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2">Notifications<span
																class="label label-primary ml-10">[1]</span></span></CButton>
              <CButton size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><span className="mfs-2">Email<span
																class="label label-primary ml-10">[1]</span></span></CButton>
              <CButton size="sm" className="btn-flickr btn-brand mr-1 mb-1"><span className="mfs-2">SMS<span
																class="label label-primary ml-10">[1]</span></span></CButton>
            
            
            </p>
          
          </CCardHeader>

              
                 
				 
				 
				 
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>#</th>
                    <th>Type</th>
                    <th >Heading</th>
                    <th className="text-center">Descriptions</th>
                   <th  className="text-center">Tag</th>
				   <th  className="text-center">Notification To</th>
				   <th  className="text-center">Notification Type</th>
                    <th className="text-center">Created On</th>
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>1</div>
                     
                    </td>
                    <td>
                      <div>Notification</div>
                     
                    </td>
					 <td>
                      <div>Event</div>
                     
                    </td>
                    <td className="text-center">
                     Events Information
                    </td>
					<td className="text-center">
                     Events
                    </td>
					<td className="text-center">
                    Agent
                    </td>
					<td className="text-center">
                    SMS
                    </td>
                    <td className="text-center">
                      28-04-2021
                    </td>
                                      
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				    <tr>
                    <td>
                      <div>2</div>
                     
                     </td>
					  <td>
                      <div>Email</div>
                     
                    </td>
                    <td>
                      <div>Register Sucessfull</div>
                     
                    </td>
                    <td className="text-center">
                     Registration Sucessfull message for the users
                    </td>
					<td className="text-center">
                     Sucessfull Message
                    </td>
					<td className="text-center">
                    Agent
                    </td>
					<td className="text-center">
                    Google Push
                    </td>
                    <td className="text-center">
                      28-04-2021
                    </td>
					
                                      
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					View / Edit / Delete
					</td>
                  </tr>
				  
				  
                 
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default NotificationsList
