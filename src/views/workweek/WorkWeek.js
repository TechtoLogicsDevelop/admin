import React from 'react'
import {

  CCard,
  CCardBody,
 
  CCardHeader,
  CCol,
 
  CRow,
   CSwitch
   
} from '@coreui/react'


const WorkWeek = () => {
  return (
    <>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
           WorkWeek
            </CCardHeader>
			
		   
            <CCardBody>
              

              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                  
                    <th>Id</th>
                    
                    <th> Day</th>
                <th> Day Staus</th>
					<th>Status</th>
					  <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                   
                  
                    <td >
                1
                    </td>
                     <td >
                Monday
                    </td>
                        <td >
                Full Day
                    </td> 	
                   
                   				
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 View / Edit / Delete
					</td>
                  </tr>
				    <tr>
                   
                  
                    <td >
                2
                    </td>
                     <td >
                Tuesday
                    </td>
                       <td >
                Full Day
                    </td>  	
                   
                   				
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 View / Edit / Delete
					</td>
                  </tr>  
                  <tr>
                   
                  
                    <td >
                3
                    </td>
                     <td >
                Wednesday
                    </td>
                       <td >
                Full Day
                    </td>  	
                   
                   				
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 View / Edit / Delete
					</td>
                  </tr> 
				    <tr>
                   
                  
                    <td >
                4
                    </td>
                     <td >
                Thursday
                    </td>
                     <td >
                Full Day
                    </td>    	
                   
                   				
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 View / Edit / Delete
					</td>
                  </tr> 
				     <tr>
                   
                  
                    <td >
                5
                    </td>
                     <td >
                Friday
                    </td>
                     <td >
                Full Day
                    </td>    	
                   
                   				
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 View / Edit / Delete
					</td>
                  </tr> 
				    <tr>
                   
                  
                    <td >
                6
                    </td>
                     <td >
               Saturday
                    </td>
                     <td >
                Non Working day
                    </td>    	
                   
                   				
					<td>
					<CSwitch className={'mx-1'} variant={'3d'} color={'primary'} defaultChecked onChange={(e)=>console.log(e.target.checked)}/>
					</td>
					<td>
					 View / Edit / Delete
					</td>
                  </tr> 
				    <tr>
                   
                  
                    <td >
                7
                    </td>
                     <td >
               Sunday
                    </td>
                     <td >
                Non Working day
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

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default WorkWeek
