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
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


const ProductVariants = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
     
     
        <CRow>
       
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/colours">Colours</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/sizemaster">Size Master</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/shapes">Products Shapes</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
              
          <CHeaderNavLink to="/productpattern"> Products Pattern</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/producttype">Products Type</CHeaderNavLink>
        
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/productmaterial">Products Material</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/framestype">Frames Type</CHeaderNavLink>  
        
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/productstyle">Products Style</CHeaderNavLink>  
       
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/productfinishing">Products Finishing Type</CHeaderNavLink>
      
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/packingtype">Packing Type</CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		
		<CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
            
          <CHeaderNavLink to="/paintingtype">Painting Type </CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		<CCol xs="12" sm="6" md="4">
          <CCard color="warning" className="text-white text-center">
            <CCardBody>
             
          <CHeaderNavLink to="/dimensions">Products Dimension </CHeaderNavLink>
       
            </CCardBody>
          </CCard>
        </CCol>
		
      </CRow>
     
    </>
  )
}

export default ProductVariants
