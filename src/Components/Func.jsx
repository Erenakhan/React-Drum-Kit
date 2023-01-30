import React from 'react'
import '../App.css';
import { useEffect } from 'react';

function Func(props) {
  const play =()=>{
    new Audio(props.sound).play()
  } 

  useEffect(()=>{ 
    document.addEventListener("keydown",(e)=>{
      if(e.key.toLowerCase() === props.keys.toLowerCase()) {
        play();
      }
    })
  },[]);

 
  return (   
<div className='Func'>
  <div className="key" onClick={play}>{props.keys}<div className={"sound"}>{props.name}</div>  </div>
  
</div>
  );
};


 

export default Func;