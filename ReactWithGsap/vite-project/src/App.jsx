
import {useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);
function App() {
 
  const box=useRef();

  const {contextSafe} = useGSAP();
  const clickBox=contextSafe(()=>{
    gsap.to(box.current,{rotation:'+=360',duration:1,ease:"power2.inOut"})
  })
  return (
    <>
     <div className="outer">
      <div className='box' ref={box} onClick={clickBox}></div>
     </div>
    </>
  )
}

export default App
