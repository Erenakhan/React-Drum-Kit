import React from 'react'
import '../App.css';
import { useEffect ,useState} from 'react';

function Func(props) {
  const [className, setClassName] = useState("key");
  const play =()=>{
   
    setClassName('key2');
    setTimeout(() => {
      setClassName('key');
    }, 200);
    new Audio(props.sound).play() 

  } ;

  useEffect(()=>{ 
    document.addEventListener("keydown",(e)=>{
      if(e.key.toLowerCase() === props.keys.toLowerCase()) {
        play();
      }
    })
  },[]);

 
  return (   
<div className='Func'>
  <div className={className} onClick={play}>{props.keys}<div className={"sound"}>{props.name}</div>  </div>
  
</div>
  );
};


 

export default Func;