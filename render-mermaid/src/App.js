import './App.css';
import mermaid from "mermaid"
import { useRef,useEffect } from 'react';

function App({Mermaid}) {
  const ref = useRef(null)

  useEffect(() => {
    mermaid.init({},ref)
  },[ref,Mermaid])
  return (
    <div className="App">
      {
        Mermaid ? <div ref={ref}>
        {Mermaid}
        </div> : <div>None...</div>
      }
      
    </div>
  );
}

export default App;
