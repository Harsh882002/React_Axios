import React from 'react'

const Card = ({curElem,handleData}) => {

    const {id,title,body} = curElem;
 
   return (

    
    
    <li key={id} className='bg-gray-700 text-white   h-55 ' >
      <h1 className='text-xs ml-2 mt-1 text-justify'>{ title}</h1>
      
      <p className='text-xs text-justify ml-4 mb-5 mr-5 mt-3'>{body}</p>
        <button className='bg-green-900  ml-6 mr-5'>EDIT </button>
      <button className='bg-red-800  ml-6 mr-5 ' onClick={() => handleData()}>DELETE</button>
       
    </li>
   )
}

export default Card
