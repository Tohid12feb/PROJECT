import React from 'react'
import studentlist from './student-data'
export default function student() {
  return (
       
    <ul>
        {
            studentlist.map((data,index)=>
            <li className='shadow-lg px-5 py-5'>
                (index+1),(data.name) (data.surname)
            </li>)
}
        </ul>
    
        
        


    
    
  )
}
