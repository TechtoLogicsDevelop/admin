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



const RegSubChild = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Reg Sub Child Master
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addregsubchild">+Add New  Sub Child</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th className="text-center">Category</th>
					<th className="text-center">Sub Category</th>
					<th className="text-center"> Sub Child</th>
                   
                   
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                      <div>1</div>
                     
                    </td>
					 <td className="text-center">
                   Artist / Creaters
                    </td>
					 <td className="text-center">
                  Painter
                    </td>
                    <td className="text-center">
                    Oil Painter
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
					 <td className="text-center">
                    Artist / Creaters
                    </td>
					 <td className="text-center">
                   Painter
                    </td>
                    <td className="text-center">
                      Sketch Pen Painter
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

export default RegSubChild
