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



const BannersGroup = () => {
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
          <CHeaderNavLink to="/addbannergrp"> Add Banner Group </CHeaderNavLink> 
        </CHeaderNavItem>
               
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Title</th>
                    
                    <th className="text-center">Descriptions</th>
                   
					<th>Slug</th>
					<th>Date</th>
					<th>status </th>
					<th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                  
                      <td>
                     <CHeaderNavLink to=""> This is the test Banner Group </CHeaderNavLink>
                    </td>
                  
					
                    <td className="text-center">
                     
                      Banners Descriptions
                    </td>
                    <td >
                     Test Group
                    </td>
                     
					<td>
					  25/05/2021
						
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

export default BannersGroup
