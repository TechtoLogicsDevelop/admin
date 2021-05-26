import React from 'react'
import {
  CBadge,
   CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CSwitch,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const Main = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
        Products Main Master
            </CCardHeader>
			
		   
            <CCardBody>
               <CCardHeader>
           
			 <CHeaderNavItem  className="px-3" className="text-right">
          <CHeaderNavLink to="/addmain">Add Main </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Id</th>
					 
                    <th >Main Name </th>
					
					
					<th >Meta Keyword </th>
					
					
					  <th className="text-center">Sort Order</th>
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     m-01
                     
                    </td>
                   
					<td>
                    ART 2D & 3D
                     
                    </td>
					<td>
                    Main Product  Keyword
                     
                    </td>
					
					<td className="text-center">
                   01
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
                     m-02
                     
                    </td>
                   
					<td>
                    CRAFTS
                     
                    </td>
					<td>
                    Main Product  Keyword
                     
                    </td>
					
					<td className="text-center">
                   02
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
                     m-03
                     
                    </td>
                   
					<td>
                    PRODUCTS
                     
                    </td>
					<td>
                    Main Product  Keyword
                     
                    </td>
					
					<td className="text-center">
                   03
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
                     m-04
                     
                    </td>
                   
					<td>
                    FILMS & VIDEOS
                     
                    </td>
					<td>
                    Main Product  Keyword
                     
                    </td>
					
					<td className="text-center">
                   04
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

export default Main
