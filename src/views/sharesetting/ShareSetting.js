import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const ShareSetting = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            Share Setting
          </CCardHeader>
          <CCardBody>
          
            <h6>Social Medias for Sharing</h6>
            <p>
              <CButton className="btn-facebook btn-brand mr-1 mb-1"><CIcon name="cib-facebook" /><span className="mfs-2">Facebook</span></CButton>
              <CButton className="btn-twitter btn-brand mr-1 mb-1"><CIcon name="cib-twitter" /><span className="mfs-2">Twitter</span></CButton>
              <CButton className="btn-linkedin btn-brand mr-1 mb-1"><CIcon name="cib-linkedin" /><span className="mfs-2">LinkedIn</span></CButton>
              <CButton className="btn-flickr btn-brand mr-1 mb-1"><CIcon name="cib-flickr" /><span className="mfs-2">Flickr</span></CButton>
              <CButton className="btn-tumblr btn-brand mr-1 mb-1"><CIcon name="cib-tumblr" /><span className="mfs-2">Tumblr</span></CButton>
              <CButton className="btn-xing btn-brand mr-1 mb-1"><CIcon name="cib-xing" /><span className="mfs-2">Xing</span></CButton>
              <CButton className="btn-github btn-brand mr-1 mb-1"><CIcon name="cib-github" /><span className="mfs-2">Github</span></CButton>
              <CButton className="btn-stack-overflow btn-brand mr-1 mb-1"><CIcon name="cib-stackoverflow" /><span className="mfs-2">StackOverflow</span></CButton>
              <CButton className="btn-youtube btn-brand mr-1 mb-1"><CIcon name="cib-youtube" /><span className="mfs-2">YouTube</span></CButton>
              <CButton className="btn-dribbble btn-brand mr-1 mb-1"><CIcon name="cib-dribbble" /><span className="mfs-2">Dribbble</span></CButton>
              <CButton className="btn-instagram btn-brand mr-1 mb-1"><CIcon name="cib-instagram" /><span className="mfs-2">Instagram</span></CButton>
              <CButton className="btn-pinterest btn-brand mr-1 mb-1"><CIcon name="cib-pinterest" /><span className="mfs-2">Pinterest</span></CButton>
              <CButton className="btn-vk btn-brand mr-1 mb-1"><CIcon name="cib-vk" /><span className="mfs-2">VK</span></CButton>
              <CButton className="btn-yahoo btn-brand mr-1 mb-1"><CIcon name="cib-yahoo" /><span className="mfs-2">Yahoo</span></CButton>
              <CButton className="btn-behance btn-brand mr-1 mb-1"><CIcon name="cib-behance" /><span className="mfs-2">Behance</span></CButton>
              <CButton className="btn-reddit btn-brand mr-1 mb-1"><CIcon name="cib-reddit" /><span className="mfs-2">Reddit</span></CButton>
              <CButton className="btn-vimeo btn-brand mr-1 mb-1"><CIcon name="cib-vimeo" /><span className="mfs-2">Vimeo</span></CButton>
            </p>
           
          </CCardBody>
        </CCard>
      </CCol>

      
    </CRow>
  )
}

export default ShareSetting
