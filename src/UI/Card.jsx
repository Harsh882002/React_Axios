import React from 'react'

const Card = ({curElem}) => {

    const {id,title,body} = curElem;
 
   return (
    <li key={id} >
      <h1>{ title}</h1>
      <p>{body}</p>
      <button>EDIT</button>
      <button>DELETE</button>
    </li>
   )
}

export default Card
