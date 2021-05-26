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



const RegSubCategories = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
             RegSubCategories Master
            </CCardHeader>
			
		   
            <CCardBody>
              

               <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addregsubcategory">+Add New  Sub Category</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
                    <th className="text-center">Category</th>
					<th className="text-center">Sub Category</th>
					<th className="text-center"> Descriptions</th>
                   
                   
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
                    Painter Descriptions
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
                    Business
                    </td>
					 <td className="text-center">
                    Museum
                    </td>
                    <td className="text-center">
                      Museum Descriptions
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
                      <div>3</div>
                     
                    </td>
					 <td className="text-center">
                    Art Enthusiast
                    </td>
                    <td className="text-center">
                      Conservators
                    </td>
                    <td className="text-center">
                      Conservators Descriptions
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
                      <div>4</div>
                     
                    </td>
					 <td className="text-center">
                    Institutions
                    </td>
					<td className="text-center">
                    Foundations
                    </td>
                    <td className="text-center">
                      Foundations Descriptions
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
                      <div>5</div>
                     
                    </td>
					 <td className="text-center">
                   Others
                    </td>
					<td className="text-center">
                   Facilities
                    </td>
                    <td className="text-center">
                      Facilities Descriptions
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
                      <div>6</div>
                     
                    </td>
					 <td className="text-center">
                    Craft Communities
                    </td>
					<td className="text-center">
                     Wooden Craft Communities
                    </td>
                    <td className="text-center">
                      Craft Communities Descriptions
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
                      <div>7</div>
                     
                    </td>
					 <td className="text-center">
                    Creative Communities
                    </td>
					 <td className="text-center">
                     New Creative Communities
                    </td>
                    <td className="text-center">
                      Creative Communities Descriptions
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
                      <div>8</div>
                     
                    </td>
					 <td className="text-center">
                    Students
                    </td>
					 <td className="text-center">
                    Students
                    </td>
                    <td className="text-center">
                      Students Descriptions
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

export default RegSubCategories
