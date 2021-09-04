import React, { useState } from 'react'
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
   CPagination,
  CRow
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const SponsorsProposal = () => {
	 const [currentPage, setCurrentPage] = useState(2)
  return (
    <>
     <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Sponsors Proposal List
		    <div className="text-right">
			 <CHeaderNavLink   to="base/sponsors">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>Id</th>
                    <th className="text-center">Sponsors Name </th>
					<th className="text-center">Organization</th>
					<th className="text-center">Email</th>
					
					  <th className="text-center">For Event</th>
					  <th className="text-center">Sponshorship Start</th>
					   <th className="text-center">Sponshorship End</th>
				
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     sp-01
                     
                    </td>
                 	<td className="text-center">
                   Handicraft
                    </td>
					 <td className="text-center">
                   handicraft.com
                    </td>
					 <td className="text-center">
                   info@handicraft.com
                    </td>
					<td className="text-center">
                  Artwork-Event
                    </td>
					 <td className="text-center">
                    2021-05-17
                    </td>
					
					 <td className="text-center">
                    2021-05-24
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

export default SponsorsProposal