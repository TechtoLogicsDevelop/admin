import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
	CButton,
  CModal,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
 CPagination,
 CHeaderNavLink,
  CRow,
  CSwitch,
  CModalHeader,
  CLabel,
  CInput,
  CFormGroup,
  CModalTitle,
  CModalBody,
  CForm,
  CSelect,
  CInputCheckbox,
  CModalFooter
  
} from '@coreui/react'


const PrelaunchUsers = () => {
 
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  
  const [page, setPage] = useState(currentPage)
 const [currentPage, setCurrentPage] = useState(1)
 	const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
   
  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  return (
    <CRow>
      <CCol xl={12}>
        <CCard>
          <CCardHeader>
          Pre-launch
            <small className="text-muted">  Users</small>
          </CCardHeader>
		  <CCardHeader>
		   <p className="text-center">
		   <CButton size="sm" className="btn-xing btn-brand mr-1 mb-1"><span className="mfs-2">All<span
																class="label label-primary ml-10">[0]</span></span></CButton>
			  <CButton size="sm" className="btn-pinterest btn-brand mr-1 mb-1"><span className="mfs-2">Artist<span
																class="label label-primary ml-10">[0]</span></span></CButton>
              
              <CButton size="sm" className="btn-twitter btn-brand mr-1 mb-1"><span className="mfs-2">Enthusiast<span
																class="label label-primary ml-10">[0]</span></span></CButton>
			  <CButton size="sm" className="btn-behance btn-brand mr-1 mb-1"><span className="mfs-2">Business<span
																class="label label-primary ml-10">[0]</span></span></CButton>
             
              <CButton size="sm" className="btn-flickr btn-brand mr-1 mb-1"><span className="mfs-2">Institutions<span
																class="label label-primary ml-10">[0]</span></span></CButton><br/>
			  
              <CButton size="sm" className="btn-facebook btn-brand mr-1 mb-1"><span className="mfs-2">Facebook<span
																class="label label-primary ml-10">[0]</span></span></CButton>
            <CButton size="sm" className="btn-pinterest btn-brand mr-1 mb-1"><span className="mfs-2">Google<span
																class="label label-primary ml-10">[0]</span></span></CButton>
            
            </p>
          
          </CCardHeader>
          <CCardBody>
              <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton>
                <CModalTitle> User Info</CModalTitle>
              </CModalHeader>
              <CModalBody>
                         <CRow>
        <CCol xs="12" md="12">
          <CCard>
           
            <CCardBody >
			<table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                 
                </thead>
                <tbody>
                 <tr>
                <th>First Name:</th>
                  <td>Rakesh</td>
                      </tr>
                   <tr>
                <th>Last Name:</th>
                  <td>SR</td>
                      </tr>
					    <tr>
                <th>User Name:</th>
                  <td>Rakesh123</td>
                      </tr>
				  <tr>
                <th>Email Verified:</th>
                  <td>Yes</td>
                      </tr>
               
				  <tr>
                <th>Phone Verified:</th>
                  <td>No</td>
                      </tr>
                 <tr>
               <th>IP:</th>
				<td>124.123.107.217</td>
				</tr>
				<tr>
				<th>Country:</th>
				<td>IN</td>
				</tr>
                      <tr>
               <th>City:</th>
				<td>Bangalore</td>
				</tr>
				<tr>
				<th>Pincode:</th>
				<td>560002</td>
				</tr>
				    <tr>
               <th>Country Capital:</th>
				<td>New Delhi</td>
				</tr>
				<tr>
				<th>Country Code:</th>
				<td>+91</td>
				</tr>
				    <tr>
               <th>Currency:</th>
				<td>INR</td>
				</tr>
				<tr>
				<th>Language:</th>
				<td>Kannada</td>
				</tr>
                  <tr>
				<th>Latitude:</th>
				<td>12.9634</td>
				</tr>
				    <tr>
               <th>Langitude:</th>
				<td>77.5855</td>
				</tr>
				<tr>
				<th>Region:</th>
				<td>Karnataka</td>
				</tr>
				<tr>
				<th>Timezone:</th>
				<td>Asia/Kolkata</td>
				</tr>
                </tbody>
              </table>
              
             
            
            </CCardBody>
            
          </CCard>
         
        </CCol>
       
      </CRow>
              </CModalBody>
        
            </CModal> 

              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
				  <th className="text-center">Register Type</th>
                  <th className="text-center">First Name</th>
				   <th className="text-center">Last Name</th>
				    <th className="text-center">User Name</th>
					<th className="text-center">Email</th>
					<th className="text-center">Phone</th>
					 <th className="text-center">Type</th>
					 <th className="text-center">Signup Date </th>
					
					 	<th>Status</th>
					
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="text-center">
                   Normal
                    </td>
                     <td className="text-center">
					 <div >
               <CButton   color="secondary" onClick={() => setSuccess(!success)} className="mr-1">Rakesh</CButton>
			   </div>
                     
                    </td>	
					<td className="text-center">
                   SR
                    </td>
					<td className="text-center">
                   Rakesh123
                    </td>
					 <td className="text-center">
                  rakesh@gmail.com
                    </td>
					 <td className="text-center">
                    9537462816
                    </td >
                    <td className="text-center">
                     Artist 
                     
                    </td>
					 <td className="text-center">
                     03-09-2021
                     
                    </td>
                 
                     
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					
					<td>
					<CHeaderNavLink   to="/usersprofile">View</CHeaderNavLink> /
					 Edit / Delete
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
	
  )
  
}


export default PrelaunchUsers
