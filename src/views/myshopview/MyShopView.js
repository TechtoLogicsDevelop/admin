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



const MyShopView = () => {
	
  return (
    <>
	
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           My Shop
		    <div className="text-right">
			 <CHeaderNavLink   to="/usersprofile">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
            <CCardBody>
             
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>Sales</th>
                    <th className="text-center">Pickup Available </th> 
                    <th className="text-center">Vendor Name </th>  
					 <th className="text-center">Type </th>
					
					<th className="text-center">Nature of Business</th>
					
					 <th className="text-center">Email </th>
					  <th className="text-center">Mobile </th>
					   <th className="text-center">Phone </th>
					 <th className="text-center">Fax </th>
					  <th className="text-center">Contact Name</th>
					 
					    <th className="text-center">Designation</th>
					  <th className="text-center">Tags </th>
					  <th className="text-center">GST No</th>
					     <th className="text-center">Pan</th>
						 <th className="text-center">Tan</th>
                  </tr>
                </thead>
                
              </table>
         
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
        
    </>
  )
}

export default MyShopView
