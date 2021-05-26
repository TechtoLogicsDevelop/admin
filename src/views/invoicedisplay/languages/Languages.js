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



const Languages = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Languages Master
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addlanguages">+Add New Language</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
				<hr/>
				 <CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>Auto Translation
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Country Name</th>
                    <th>Official Language</th>
					<th className="text-center"> Other Language</th>
                    <th className="text-center">Currency</th>
                   
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                      <div>India</div>
                     
                    </td>
					 <td className="text-center">
                    Hindi
                    </td>
                    <td className="text-center">
                      Hindi, English, Bengali, Gujarati, Kashmiri, Malayalam,
                      Marathi, Oriya, Punjabi, Tamil, Telugu, Urdu, Kannada,
                      Assamese, Sanskrit, Sindhi, and 1600+ dialects
                    </td>
                    <td className="text-center">
                      Rupee
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
                      <div>Australia</div>
                     
                    </td>
					 <td className="text-center">
                    English
                    </td>
                    <td className="text-center">
                      English, Indigenous languages
                    </td>
                    <td className="text-center">
                      Dollar
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

export default Languages
