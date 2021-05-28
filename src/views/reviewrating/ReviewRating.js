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



const ReviewRating = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Review & Rating
            </CCardHeader>
			
		   
            <CCardBody>
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Id</th>
                    <th>Product Id</th>
                     <th>Product Name</th>
                    <th>User Name</th>
                   
                    <th>Title</th>
					
					  <th>Description</th>
					   <th>Rating</th>
					
					  <th>Rating In</th>
					  <th>Verified Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>01</div>
                     
                    </td>
                    <td>
                      <div>7106</div>
                     
                    </td>
					 <td>
                      <div>Painting</div>
                     
                    </td>
                    <td >
                     Rakshith
                    </td>
                    <td >
                      Good Product
                    </td>
                       <td >
                      I have recieved the Product without damage
                    </td>    
                    <td >
                      5
                    </td> 
                          <td >
                      3
                    </td> 					
					
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
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

export default ReviewRating
