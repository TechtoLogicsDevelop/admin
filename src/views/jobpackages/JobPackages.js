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
   CFormGroup,
   CLabel,
   CSelect,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../charts/MainChartExample.js'



const JobPackages = () => {
  return (
    <>
      

      <CRow>
        <CCol >
          <CCard>
            <CCardHeader>
          List of the current Packages
            </CCardHeader>
			
		   
            <CCardBody>
                   <CCardHeader>
		  
           <CHeaderNav className="d-md-down-none mr-auto">
       
		 <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/addemppackage"> Add Employer Package</CHeaderNavLink>
        </CHeaderNavItem>
		 </CHeaderNav>
	  
          </CCardHeader>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   <th>Id </th>
				   <th>Name</th>
				    <th> Description</th>
                    <th>Price</th>
                    <th >No of Jobs </th>
                   <th >No of Resumes</th>
                   <th >Featured Jobs</th>
					<th >Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
				   <td>
                   01
                     
                    </td>
                   
					 <td>
                   Test 5 jobs 
                    </td>
					 <td>
                       You can post up to 5 job listings with this package
                    </td>
					 <td>
                     Rs 29
                     
                    </td>
                   
					 <td >
                     5
                    </td >
					 <td >
                     100
                    </td >
                        <td >
                    1
                    </td >            
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

export default JobPackages
