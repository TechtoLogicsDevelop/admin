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
  CButton,
  CFormGroup,
  CLabel,
  CSelect,
  CLink
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'


const SelectProducts = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showCard, setShowCard] = React.useState(true)

  return (
    <>
     
     
     <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           Select Products
            </CCardHeader>
			
		   
            <CCardBody>
               <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Main Category </CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Main</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Category</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Category</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
				 <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Sub Category </CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Sub Category</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <hr/>
			   <CFormGroup row className="my-0">
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Products Group *</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Group</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="select">Select Products Brand *</CLabel>
                     <CSelect custom name="select" id="select">
                      <option value="0">Select Group</option>
                      <option value="1">Options 1</option>
                      <option value="2">Options 2</option>
                      <option value="3">Options 3</option>
					   <option value="4">Options 4</option>
                      <option value="5">Options 5</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    
                   <th>  Select</th>
					 <th >Item Code/ SKU </th>
					 <th >Bar Code </th>
					
					<th >Product </th>
                    <th >Price </th>
					
					 	
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                     
                    </td>
                    <td>
                     9701 10 10
                     
                    </td>
					 <td>
                     9701 10 10
                     
                    </td>
					<td>
                    Madhubani paintings (on textiles)
                     
                    </td>
					
					<td className="text-center">
                   Rs 140.00
                    </td>
					
                     
                  </tr>
				    <tr>
                    <td>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                     
                    </td>
                    <td>
                     9701 10 20
                     
                    </td>
					 <td>
                     9701 10 20
                     
                    </td>
					<td>
                    Kalamkari paintings (on textiles)
                     
                    </td>
					
					<td className="text-center">
                   Rs 150.00
                    </td>
					
                     
                  </tr>
				   <tr>
                    <td>
                      <CSwitch
                      className="mr-1"
                      color="success"
                      defaultChecked
                      variant="outline"
                    />
                     
                    </td>
                    <td>
                     9701 10 30
                     
                    </td>
					 <td>
                     9701 10 30
                     
                    </td>
					<td>
                    Rajasthani paintings (on textiles)
                     
                    </td>
					
					<td className="text-center">
                   Rs 140.00
                    </td>
					
                     
                  </tr>
				   
				  
                </tbody>
              </table>

            </CCardBody>
			 <CCardFooter>
              <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> <CHeaderNavLink to="/pogenrate">Next</CHeaderNavLink> </CButton>
             
			  
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      
    </>
  )
}

export default SelectProducts
