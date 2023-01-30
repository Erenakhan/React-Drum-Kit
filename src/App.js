import './App.css';
import Func from './Components/Func';
import { useState, useEffect ,useMemo, useRef} from 'react';
import CLAP from  './Components/sounds/clap.wav'
import HIHAT from './Components/sounds/hihat.wav'
import KICK from './Components/sounds/kick.wav'
import OPENHAT from './Components/sounds/openhat.wav'
import BOOM from './Components/sounds/boom.wav'
import RİDE from './Components/sounds/ride.wav'
import SNARE from './Components/sounds/snare.wav'
import TOM from './Components/sounds/tom.wav'
import TİNK from './Components/sounds/tink.wav'




  
function App( ) {
 
  const play =()=> {
  new Audio(sounds.sound).play();
  }
  const [className,SetClassName]=useState(false)
 const [sounds, setSounds] = useState([
  {
    name: 'boom',
    sound: BOOM,
    key :"A",
  },
  {
    name: 'clap',
    sound: CLAP,
    key :"S",
  },
  {
    name: 'hihat',
    sound: HIHAT,
    key :"D",
  },
  {
    name: 'openhat',
    sound: OPENHAT,
    key :"F",
  },
  {
    name: 'ride',
    sound: RİDE,
    key :"G",
  },
  {
    name: 'snare',
    sound: SNARE,
    key :"H",
  },
  {
    name: 'tink',
    sound: TİNK,
    key :"J",
  },
  {
    name: 'tom',
    sound: TOM,
    key :"K",
  },
  {
    name: 'kick',
    sound: KICK,
    key :"L",
  }, 
 ])
  return(

     <div className="buttons">
      {sounds.map((sound,i) =>(
      <Func key={i} keys={sound.key} name={sound.name}sound={sound.sound} />
      ))}
     </div>
    
  )
  
}
export default App;
