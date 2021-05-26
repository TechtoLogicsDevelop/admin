import React from 'react'
import {
  CBadge,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CCollapse,
  CFade,
  CSwitch,
  CButton,
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


const SelectMembers = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
     
     
     <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Register Users
            </CCardHeader>
			
		   
            <CCardBody>
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>  Select</th>
					 <th className="text-center">Category </th>
					 <th className="text-center">Sub Category </th>
					
					<th className="text-center">Group</th>
                    <th className="text-center">UserName </th>
					
					
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					
					  <th className="text-center">Location</th>
					 
					    <th className="text-center"> Tag</th>
					 	
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                     
                    </td>
                    <td>
                     Artist / Creaters
                     
                    </td>
					<td>
                    Painter
                     
                    </td>
					
					<td className="text-center">
                   Oil Painter
                    </td>
					 <td className="text-center">
                    Rakesh
                    </td>
					 <td className="text-center">
                  rakesh@gmail.com
                    </td>
					 <td className="text-center">
                    9537462816
                    </td>
					
					
					 <td>
                     Bangalore
                     
                    </td>
                   <td>
                     Gallery
                     
                    </td>
                     
                  </tr>
				   
				  
                </tbody>
              </table>

            </CCardBody>
			 <CCardFooter>
              <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> <CHeaderNavLink to="/smssetting">Next</CHeaderNavLink> </CButton>
             
			  
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      
    </>
  )
}

export default SelectMembers
