import React from 'react'
import {
	
  CCard,
  CCardBody,
  
  CCardHeader,
  CCol,
  CHeaderNavLink,
  CRow,
   CSwitch,
   CFormGroup
   
} from '@coreui/react'



const StoreStatus = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader >
             StoreStatus
			  <div className="text-right">
			 <CHeaderNavLink   to="/websitesettings">Back</CHeaderNavLink> 
			 </div>
            </CCardHeader>
			
		   
            <CCardBody>
              

             

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th className="text-center">Store Opening Status</th>
                    
                    <th className="text-center">Down for Maintainance</th>
                   
                    
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  
                    <td className="text-center">
                        <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="danger"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
                    </td>
                    <td className="text-center">
                      <CFormGroup variant="custom-checkbox" inline>
                      <CSwitch
                      className="mr-1"
                      color="danger"
                      defaultChecked
                      shape="pill"
                    />
                      
                    </CFormGroup>
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

export default StoreStatus
