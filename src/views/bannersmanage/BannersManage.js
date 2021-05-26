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



const BannersManage = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            Banners Manage
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		   <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/bannersgroup">Banners Group </CHeaderNavLink> |  <CHeaderNavLink to="/addbanners">Add Banner</CHeaderNavLink> 
        </CHeaderNavItem>
               
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                    <th>Thumbnail</th>
                    <th>Title</th>
                    <th>Short Code</th>
                    <th className="text-center">Performance</th>
                   
					<th>Banner Group</th>
					<th>Date</th>
					<th>status </th>
					<th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                  
                      <td>
                     <CHeaderNavLink to=""> This is the test Banner </CHeaderNavLink>
                    </td>
                  
					 <td className="text-center">
                     [Banner Id="1058"]
                    </td>
                    <td className="text-center">
                     
                       <div className="small text-muted">
                        <span>Impression: 105</span>  
						<br/> Clicks: 0
						<br/>CTR:0.00%
                      </div>
                    </td>
                    <td className="text-center">
                     Test Group
                    </td>
                     
					<td>
					 <div className="small text-muted">
                        <span>Published: </span>  
						<br/> 24/05/2021
						
                      </div>	
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

export default BannersManage
