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



const ModulesMaster = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
            Modules Master Setting
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
		   <p>
              
			 
              <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2"> <CHeaderNavLink to="/modules">Modules </CHeaderNavLink><span
																class="label label-primary ml-10">[1]</span></span></CButton>
              <CButton size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/submodules">Sub-Modules </CHeaderNavLink><span
																class="label label-primary ml-10">[1]</span></span></CButton>
              <CButton size="sm" className="btn-flickr btn-brand mr-1 mb-1"><span className="mfs-2"><CHeaderNavLink to="/childsubmodules">Child Sub-Modules </CHeaderNavLink><span
																class="label label-primary ml-10">[1]</span></span></CButton>
																 <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2"> <CHeaderNavLink to="/modulepages">Pages </CHeaderNavLink><span
																class="label label-primary ml-10">[1]</span></span></CButton>
            
            
            </p>
          
          </CCardHeader>

               <CCardHeader>
		  
                
				
              </CCardHeader>
                 
				 
				 
				 
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Id</th>
				    <th>Priority</th>	
                    <th>Module Name</th>
                    <th >Sub-Module</th>
                    <th className="text-center">Child Sub-Modules</th>
                   <th  className="text-center">Pages</th>
                   <th>Status</th>
					
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      m-01
                     
                    </td>
					  <td>
                      1
                     
                    </td>
                    <td>
                      <div>Dashboard</div>
                     
                    </td>
					 <td>
                      <div>Dashboard</div>
                     
                    </td>
                    <td className="text-center">
                     Dashboard
                    </td>
					<td className="text-center">
                     dashboard
                    </td>
                   <td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
                  </tr>
				    <tr>
                    <td>
                      m-02
                     
                     </td>
					 <td>
                      2
                     
                     </td>
					  <td>
                      <div>Visitors List</div>
                     
                    </td>
                    <td>
                      <div>Visitors</div>
                     
                    </td>
                    <td className="text-center">
                     Visitors
                    </td>
					<td className="text-center">
                     users
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

export default ModulesMaster
