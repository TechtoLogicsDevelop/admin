import React from 'react'
import {
  
  CCard,
  CCardBody,
  
  CCardHeader,
  CCol,
  
  CForm,
  CFormGroup,
  
  CLabel,
  
  CRow
 
} from '@coreui/react'

const TakeBackup = () => {
 
  return (
    <>
     
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Take Backup
             
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
               
                  <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Export</CLabel>
                  </CCol>
                 
                </CFormGroup>
				
               
              </CForm>
            </CCardBody>
           
          </CCard>
         
        </CCol>
       
      </CRow>
     
     
      
     
     
    </>
  )
}

export default TakeBackup
