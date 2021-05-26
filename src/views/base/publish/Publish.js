import React from 'react'
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
  CButton,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'



const Publish = () => {
  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Products Publish
            </CCardHeader>
			
		   
            <CCardBody>
			 <CCardHeader>
		   <p>
               <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-1">All<span
																class="label label-primary ml-10">[1]</span></span></CButton> 
			 
              <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-1">ART 2D & 3D<span
																class="label label-primary ml-10">[1]</span></span></CButton>
              <CButton size="sm" className="btn-linkedin btn-brand mr-1 mb-1"><span className="mfs-2">CRAFTS<span
																class="label label-primary ml-10">[0]</span></span></CButton>
              <CButton size="sm" className="btn-flickr btn-brand mr-1 mb-1"><span className="mfs-2">PRODUCTS<span
																class="label label-primary ml-10">[0]</span></span></CButton>
             
             
            
            </p>
          
          </CCardHeader>
               <CCardHeader>
            
			 <CHeaderNavItem  className="px-3" className="text-left">
          <CHeaderNavLink to="/addpublish">Publish Product </CHeaderNavLink> | <CHeaderNavLink to="/digitalpublish">Digital Publish </CHeaderNavLink> | <CHeaderNavLink to="/eventspublish">Publish Events </CHeaderNavLink> | <CHeaderNavLink to="/auctionspublish"> Publish Auctions </CHeaderNavLink> | <CHeaderNavLink to="/addpublish">Publish Opportunities </CHeaderNavLink> | <CHeaderNavLink to="/addpublish">Publish Fundraisers </CHeaderNavLink> | <CHeaderNavLink to="/addpublish">Publish Learn </CHeaderNavLink> | <CHeaderNavLink to="/addpublish">Publish Facilities </CHeaderNavLink>
        </CHeaderNavItem>
            </CCardHeader>

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   
                    <th>Item Code/ SKU</th>
					 <th>Bar Code</th>
					  <th className="text-center">Image</th>
					  <th >Main </th>
                    <th >Category  </th>
					 <th >SubCategory </th>
					
					<th >Groups </th>
					<th >Brands </th>
					<th >Product  </th>
				
					<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     1001
                     
                    </td>
					 <td>
                     1001
                     
                    </td>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
					<td>
                   ART 2D & 3D
                     
                    </td>
					<td>
                    Art
                     
                    </td>
					<td>
                    Prints
                     
                    </td>
					<td>
                    ARTWORK POSTERS 
                     
                    </td>
					<td>
                    POSTERS BRANDS 
                     
                    </td>
					<td>
                    Digital Prints
                     
                    </td>
					
					
						<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					Edit / Delete
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

export default Publish
