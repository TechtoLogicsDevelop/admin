import React, { useState } from 'react'
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
     CPagination,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



const Dimensions = () => {
	 const [currentPage, setCurrentPage] = useState(2)

  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Product Dimensions
		    <div className="text-right">
			 <CHeaderNavLink   to="/base/productvariants">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
		   
            <CCardBody>
              

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>#</th>
                    <th className="text-center">Item No</th>
					 <th className="text-center">Item Name</th>
					<th className="text-center">Unit</th>
					<th className="text-center">Weight</th>
					 <th className="text-center">Width</th>
					  <th className="text-center">Depth</th>
					   <th className="text-center">Height</th> 
					   <th className="text-center">Volume</th>
					
					
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    
                    <td>
                     1
                     
                    </td>
					<td className="text-center">
                    p001
                    </td>
					<td className="text-center">
                   God Painting
                    </td>
					 <td className="text-center">
                    Pcs
                    </td>
					 <td className="text-center">
                   5.50
                    </td>
					 <td className="text-center">
                    30.00
                    </td>
					 <td className="text-center">
                    1.00
                    </td>
					 <td className="text-center">
                    20.00
                    </td>
					 <td className="text-center">
                    600
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
                    <br/>
				 
          <CPagination
            align="end"
            activePage={currentPage}
            pages={10}
            onActivePageChange={setCurrentPage}
          />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dimensions
