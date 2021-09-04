import React from 'react'
import {
  
  CHeaderNavItem,
  CHeaderNavLink,
  CCard,
  CCardBody,
  
  
  CCol,
  CRow
  
  
} from  '@coreui/react'


const SystemConfig = () => {
 
  return (
    <>
     
       <CRow>
		
        <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/companyprofile">Company Profile</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
		
		 <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/sitedisplay">Site Display</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/bankdetails">Bank Details Setting</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		
      </CRow>
        <CRow>
		
        <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/listingspreferences">Listings Preferences</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/listingsauction">Listings Auction</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/currency">Currency Setting</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
		
		
      </CRow>
      <CRow>
		
        <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/listingsfixedprice">Listings Fixed Price</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/listingsclassified">Listings Classified</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/currency">Currency Setting</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
		
		
      </CRow>
      <CRow>
	   <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/languages">Language Setting</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
	  <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/fiscalyears">Fiscal Years</CHeaderNavLink>   
      
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/socialmedia">Social Medias</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
		
      </CRow>
      <CRow>
	   <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
          <CHeaderNavLink to="/datetime">Date & Time Setting</CHeaderNavLink>
		  </CCardBody>
          </CCard>
        </CCol>
	  <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
            <CHeaderNavLink to="/locale">Locale Setting</CHeaderNavLink>
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
           <CHeaderNavLink to="/googlemap">Google map Setting</CHeaderNavLink>
            </CCardBody>
          </CCard>
        </CCol>
		
      </CRow>
	    <CRow>
	   <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
          <CHeaderNavLink to="/release">Release Setting</CHeaderNavLink>
		  </CCardBody>
          </CCard>
        </CCol>
	  <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
            <CHeaderNavLink to="/backuprestore">Restore & Backup Setting</CHeaderNavLink>
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
           <CHeaderNavLink to="/privacypolicy">Privacy, Terms & Conditions Setting</CHeaderNavLink>
            </CCardBody>
          </CCard>
        </CCol>
		
      </CRow>
	   <CRow>
	   <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
         <CHeaderNavLink to="/maintenance">Maintenance</CHeaderNavLink>
		  </CCardBody>
          </CCard>
        </CCol>
	      <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
         <CHeaderNavLink to="/preferences">Preferences</CHeaderNavLink>
		  </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="6" sm="4" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
         <CHeaderNavLink to="/emailtemplates">Email Templates</CHeaderNavLink>
		  </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default SystemConfig
