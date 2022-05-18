import React, {useState, useEffect} from 'react'
import './clients.css'



const Clients = () => {
  const [Customers, setCustomers] = useState([])

  useEffect(() =>{
    fetch('https://fakerapi.it/api/v1/companies?_quantity=10')
    .then(response => response.json())
    .then(data => setCustomers(data.data))
  },[]);
  




    
  return (
    <div >
      
      <h1 id='client-title-head'>Our Clients</h1>
      <div className='clients-icon'>
      
      <span>share</span>   <span>edit</span>   <span>delete</span>
      </div>
      <table className='clients-table'>
        <thead >
          <tr>
            <th>Id:</th>
            <th></th>
            <th className='move-left'>Full Name:</th>
            <th>Email:</th>
            <th>Phone Number:</th>
          </tr>
        </thead>
        
       
        <tbody>
        
        { Customers ? Customers?.map((customer, idx)=>(
            <tr key={idx}>

              <td>{customer.id}</td>
              <td><img src={customer.image} alt=''/> </td> 
              <td className='move-left'>{customer.name}</td>
              
              <td>{customer.email}</td>
              <td>{customer.phone}</td> 
              
            </tr>  
           )) : null
        } 
        </tbody>
        
      </table>
    </div>
  )
}

export default Clients