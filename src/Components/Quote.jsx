import React from 'react'
import './quote.css'

function Quote({content,auth}){
  return (
    
 
    <div className='quotes' >
        <p>{content}</p>
        <h3>{auth}</h3>
    </div>
   
  )
}

export default Quote