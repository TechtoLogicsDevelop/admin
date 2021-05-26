import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CContainer,
  CJumbotron,
  CRow,
  CEmbed,
  CEmbedItem, CBadge,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
 
  CCollapse,
  CFade,
  CSwitch,
  CLink
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const FilesMaster = () => {
	const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
	 <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/filespermission">File Permission</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
		 <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/filestypes">File Types</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/fileslocation">Files Location</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/files">Files</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/filesset">Files Set</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6" md="4">
          <CCard color="success" className="text-white text-center">
            <CCardBody>
              <CHeaderNavItem  className="px-3">
          <CHeaderNavLink to="/advancedsearch">Advanced Search</CHeaderNavLink>
        </CHeaderNavItem>
            </CCardBody>
          </CCard>
        </CCol>
        
      </CRow>
       <CCardHeader className="text-center">
		   <p>
               <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">All<span
																class="label label-primary ml-10">[45]</span></span></CButton> 
			 
              <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2">Documents<span
																class="label label-primary ml-10">[22]</span></span></CButton>
              <CButton size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><span className="mfs-2">Audios<span
																class="label label-primary ml-10">[9]</span></span></CButton>
              <CButton size="sm" className="btn-flickr btn-brand mr-1 mb-1"><span className="mfs-2">Images<span
																class="label label-primary ml-10">[7]</span></span></CButton>
              <CButton size="sm" className="btn-tumblr btn-brand mr-1 mb-1"><span className="mfs-2">Films<span
																class="label label-primary ml-10">[7]</span></span></CButton>
              <CButton size="sm" className="btn-facebook btn-brand mr-1 mb-1"><span className="mfs-2">Books<span
																class="label label-primary ml-10">[0]</span></span></CButton>
            <CButton size="sm" className="btn-pinterest btn-brand mr-1 mb-1"><span className="mfs-2">Pdf Files<span
																class="label label-primary ml-10">[0]</span></span></CButton>
            
            </p>
          
          </CCardHeader>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              FilesMaster
              <DocsLink name="CJumbotron"/>
            </CCardHeader>
			
            <CCardBody>
              <CJumbotron className="border">
                <h1 className="display-3">Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron - style component for calling extra
                  attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
                <p className="lead">
                  <CButton color="primary" size="lg">Learn More</CButton>
                </p>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol>
          <CCard>
            <CCardHeader>
              Jumbotron
              <small> fluid</small>
            </CCardHeader>
            <CCardBody>
              <CJumbotron fluid>
                <CContainer fluid>
                  <h1 className="display-3">Fluid jumbotron</h1>
                  <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </CContainer>
              </CJumbotron>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Embed
            </CCardHeader>
            <CCardBody>
              <CEmbed>
                <CEmbedItem src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"/>
              </CEmbed>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default FilesMaster
