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



const FaqsSetting = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Faqs Setting
            </CCardHeader>
			
		   
            <CCardBody>
              
                 
				  
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                  
                    <th>Id</th>
					
                    <th className="text-center">Category</th>
				    <th className="text-center">Faqs question</th>
					<th className="text-center">Faqs Answer</th>
					<th>Status</th>
					<th>Publish</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                     01
                     
                    </td>
					 <td className="text-center">
                    Sales
                    </td>
					 <td className="text-center">
                    Sales question
                    </td>
					 <td className="text-center">
                    Sales answer
                    </td>
                   
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'danger'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
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

export default FaqsSetting
