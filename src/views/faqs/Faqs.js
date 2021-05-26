import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CFade,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CRow 
} from '@coreui/react';
import { DocsLink } from 'src/reusable'

const Faqs = () => {

  const [collapse, setCollapse] = useState(false)
  const [collapseMulti, setCollapseMulti] = useState([false, false])
  const [accordion, setAccordion] = useState(1)
  const [fade, setFade] = useState(true)

  const toggle = (e) => {
    setCollapse(!collapse)
    e.preventDefault()
  }

  const toggleMulti = (type) => {
    let newCollapse = collapseMulti.slice()
    switch (type) {
      case "left":
        newCollapse[0] = !collapseMulti[0];
        break;
      case "right":
        newCollapse[1] = !collapseMulti[1];
        break;
      case "both":
        newCollapse[0] = !collapseMulti[0];
        newCollapse[1] = !collapseMulti[1];
        break;
      default:
    }
    setCollapseMulti(newCollapse)
  }

  const toggleFade = () => {
    setFade(!fade)
  }

  return (
    <CRow>
      
      <CCol xl="12">
        <CCard>
          <CCardHeader>
            Faqs
            
          </CCardHeader>
		   <CCardHeader>
		  
                <CHeaderNav className="d-md-down-none mr-auto">
                     <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/addfaqs">+Add New Faqs</CHeaderNavLink>
                     </CHeaderNavItem>
					  <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/faqscategory">Faqs Category</CHeaderNavLink>
                     </CHeaderNavItem>
					  <CHeaderNavItem className="px-3" >
                     <CHeaderNavLink to="/faqssetting">Faqs Setting</CHeaderNavLink>
                     </CHeaderNavItem>
                </CHeaderNav>
              </CCardHeader>
          <CCardBody>
            <div id="accordion">
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                  >
                    <h5 className="m-0 p-0">Faqs Item #1</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
                    1. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 1 ? null : 1)}
                  >
                    <h5 className="m-0 p-0">Faqs Item #2</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                    2. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven''t heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 2 ? null : 2)}
                  >
                    <h5 className="m-0 p-0">Faqs Item #3</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                    3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard>
			   <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 3 ? null : 3)}
                  >
                    <h5 className="m-0 p-0">Faqs Item #4</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 3}>
                  <CCardBody>
                    3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard>
			   <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0" 
                    onClick={() => setAccordion(accordion === 4 ? null : 4)}
                  >
                    <h5 className="m-0 p-0">Faqs Item #5</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 4}>
                  <CCardBody>
                    3. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
                    cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                    on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                    nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft
                    beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                  </CCardBody>
                </CCollapse>
              </CCard>
			  
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Faqs
