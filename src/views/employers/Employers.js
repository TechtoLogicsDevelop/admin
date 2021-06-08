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


const Employers = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            Manage the Registered Employers
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addemployer">+Add New Employer</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Logo</th>
                    
                    <th>Email</th>
                    <th>Company</th>
                   <th>	Phone</th>
				     <th>Contact Person</th>
                   <th>	Date</th>
				    <th>Jobs</th>
					<th>Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                    <td>
                       <div className="c-avatar">
                        <img src={'avatars/company.png'} className="c-avatar-img"  />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td className="text-center">
                    admin@artcurate.com
                    </td>
                     <td className="text-center">
                   Artcurate
                    </td>
                        <td className="text-center">
                    91 80 3352 5000
                    </td>     
                <td className="text-center">
                   Santhosh
                    </td>
                        <td className="text-center">
                    07/06/2021
                    </td>  		
                    <td>
                      <div> <CHeaderNavLink to="/">Admin, Developer</CHeaderNavLink></div>
                     
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

export default Employers
