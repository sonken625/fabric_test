import React, {useLayoutEffect, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import { fabric } from "fabric";

function App() {

  const canvasRef = useRef<HTMLCanvasElement|null>(null)

  useLayoutEffect(()=>{
    if(canvasRef.current){
      const canvas = new fabric.Canvas(canvasRef.current)
      const rect = new fabric.Rect({
        left: 100,
        top: 50,
        fill: 'transparent',
        width: 200,
        height: 100,
        objectCaching: false,
        stroke: 'lightgreen',
        strokeWidth: 4,
      });

      rect.on("modified", ((e) => {
        console.log(e)
        console.log(rect)
      }))
      canvas.add(rect);
      canvas.setActiveObject(rect);

    }
  },[])



  return (
    <div className="App">
      <canvas  ref={canvasRef} width={400} height={400}/>
    </div>
  );
}

export default App;
