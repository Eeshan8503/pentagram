import React from 'react'

const Frame = (props) => {
  return (
    <div className='frame'>
      <img src={props.image} alt="Avatar" style={{width:'90%',height:'80%'}}/>
      <p>{props.name}</p>
      <p>{props.desig}</p>
    </div>
  )
}

export default Frame