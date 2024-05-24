import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const App = () => {
  
  let tl=gsap.timeline();
  useGSAP(()=>{
    tl.to('#box', { 
      rotation: 360, 
      x: 300, 
      duration: 2 ,
      repeat: -1,
      yoyo: true,
    })
  })

  useGSAP(()=>{
    tl.to('#box', { 
      rotation: 0, 
      x: 0, 
      duration: 2 ,
      repeat: -1,
      yoyo: true,
    })
  })

  return (
    <main>
      <h1>GSAP React</h1>
      <div id="box"></div>
    </main>
  );
};

export default App;
