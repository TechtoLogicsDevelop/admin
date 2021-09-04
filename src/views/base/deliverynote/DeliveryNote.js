
import React, { useState, useEffect } from 'react'
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
  CPagination,
  CModal,
  CModalHeader,
  CFormGroup,
  CLabel,
  CModalTitle,
  CModalBody,
  CForm,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const DeliveryNote = () => {
			 const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
  
   const [currentPage, setCurrentPage] = useState(2)

  return (
    <>
     
      

    
	   <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
         Products Delivery Note

            </CCardHeader>
			 
		   
            <CCardBody>
			 <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
              <CModalHeader closeButton>
                <CModalTitle>Customer Details</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>Customer Name</th>
                    <th className="text-center">Email</th>
                    <th>Phone No</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      <div>Rajesh	Kumar</div>
                      <div className="small text-muted">
                         Registered: April 1, 2021
                      </div>
                    </td>
                    <td className="text-center">
                      rajesh84@gmail.com
                    </td>
                    <td>
                     87964525811
                    </td>
                    
                   
                  </tr>
                
                </tbody>
              </table>
			  
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
			  
			   <CFormGroup row className="my-0" className="text-center">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">Gender: </CLabel>
                    <p className="form-control-static">Male</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">DoB:</CLabel>
                   <p className="form-control-static">1997-05-05</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
			    <CFormGroup row className="my-0" className="text-center">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="company">GST: </CLabel>
                    <p className="form-control-static">2AABXYPKxxxxK</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">Nature of Business:</CLabel>
                   <p className="form-control-static">Buyer</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  
			    
			    <hr/>
				 <CLabel htmlFor="company">Address </CLabel>
				<hr/>
			    <CFormGroup row className="my-0" className="text-center">
                <CCol xs="6">
				
                  <CFormGroup>
                    <CLabel htmlFor="company">Street: </CLabel>
                    <p className="form-control-static">Kanakapura Rd, Gangadhar Nagar, Umarbagh Layout,<br/> J. P. Nagar, Bengaluru, Karnataka 560078</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">City:</CLabel>
                   <p className="form-control-static">Bangalore</p>
                  </CFormGroup>
                </CCol>
				<CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="company">Pin Code: </CLabel>
                    <p className="form-control-static">560078</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
				 <CLabel htmlFor="company">Office Address </CLabel>
				<hr/>
			    <CFormGroup row className="my-0" className="text-center">
                <CCol xs="6">
				
                  <CFormGroup>
                    <CLabel htmlFor="company">Street: </CLabel>
                    <p className="form-control-static">Kanakapura Rd, Gangadhar Nagar, Umarbagh Layout,<br/> J. P. Nagar, Bengaluru, Karnataka 560078</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">City:</CLabel>
                   <p className="form-control-static">Bangalore</p>
                  </CFormGroup>
                </CCol>
				<CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="company">Pin Code: </CLabel>
                    <p className="form-control-static">560078</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			  <hr/>
				 <CLabel htmlFor="company">Other Address </CLabel>
				<hr/>
			    <CFormGroup row className="my-0" className="text-center">
                <CCol xs="6">
				
                  <CFormGroup>
                    <CLabel htmlFor="company">Street: </CLabel>
                    <p className="form-control-static">Kanakapura Rd, Gangadhar Nagar, Umarbagh Layout,<br/> J. P. Nagar, Bengaluru, Karnataka 560078</p>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="tag-line">City:</CLabel>
                   <p className="form-control-static">Bangalore</p>
                  </CFormGroup>
                </CCol>
				<CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="company">Pin Code: </CLabel>
                    <p className="form-control-static">560078</p>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
			     
              </CForm>
			   <CCardHeader>
             Last Orders
              
            </CCardHeader>
			<table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                 
                </thead>
                <tbody>
                 
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      <div>God Painting</div>
                      <div className="small text-muted">

                        <span>Color:Grey</span> | Size:Standard
						<br/> | Seller:Artcurate
                      </div>
                    </td>
                    <td className="text-center">
                     Rs 1200.00
                    </td>
                    <td>
                      <div className="clearfix">
                       
                        <div className="float-right">
                          <strong>Delivered on May 11, 2021 </strong>
						   <div className="small text-muted">Your Item as been Delivered</div>
                        </div>
                      </div>
                      
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cib-cc-visa" />
                    </td>
                    <td>
                     
                     <CHeaderNavLink to=""> <strong>RATE & REVIEW PRODUCT</strong> </CHeaderNavLink>
                    </td>
                  </tr>
                  
                  
                </tbody>
              </table>
              </CModalBody>
             
            </CModal>
		
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                   
                    <th>Sl No</th>
					 <th>Delivery Note No</th>
					  <th >Delivery Note Date</th>
					  <th >Order No </th>
                    <th >Customer </th>
					 <th >Hub/ Warehouse </th>
					
					<th >Status </th>
					<th >Action </th>
				
                  </tr>
                </thead>
                <tbody>
                  <tr>
                     <td>
                     01
                     
                    </td>
					 <td>
                     DN_011
                     
                    </td>
                    <td >
                    01/06/2021
                    </td>
					  <td >
                    SO_025
                    </td>
					<td>
					<CButton onClick={() => setLarge(!large)} className="mr-1">
                    Rajesh Kumar
                    </CButton>
                  
                     
                    </td>
					<td>
                   JP Nagar
                     
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

export default DeliveryNote
