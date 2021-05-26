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



const BackupRestore = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             Backup-Restore Master
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/takebackup">New Backup</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th className="text-center">Backup</th>
					<th className="text-center"> Path</th>
                    <th className="text-center">Size</th>
                   
					<th>Backup Date</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                      <div>1</div>
                     
                    </td>
					 <td className="text-center">
                    backup20210413
                    </td>
                    <td className="text-center">
                      users/backup/
                    </td>
                    <td className="text-center">
                      2.14 GB
                    </td>
                     
					<td>
					28-04-2021
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
                    backup20210428
                    </td>
                    <td className="text-center">
                      users/backup/
                    </td>
                    <td className="text-center">
                      2.30 GB
                    </td>
                     
					<td>
					28-04-2021
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

export default BackupRestore
