import React from 'react'

const EventCard = (props) => {
  var t;
  return (
    <div style={{margin:'5%'}}>
        <div className="flip-card" style={{pointerEvents:props.dis}}>
    <div className="flip-card-inner">
    <div className="flip-card-front">
      <img src={props.image} alt="Avatar" style={{width:'100%',height:'100%'}}/>
    </div>
    <div className="flip-card-back" style={{display:props.dis}}>
      <p>{props.cont}</p>
    </div>
  </div>
</div>
<p style={{marginLeft:'40%',fontSize:'1.2em'}}>{props.name}</p>
<p style={{marginLeft:'40%',fontSize:'1.2em'}}>{props.desig}</p>
{/* {props.form===undefined?t='none':t=''} */}
<button onClick={()=>window.location.href=`${props.form}`} className='btn' style={{marginLeft:'40%',display:props.dis},props.form===undefined?{visibility
:'hidden'}:{marginLeft:'40%'}}>Register</button>
    </div>
  )
}

export default EventCard