import { useState } from "react"


function App() {
const [color,setColor]=useState("olive")
  return (
    <>
    <div className="absolute w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed relative first-letter:flex flex-wrap justify-center bottom-0 insert-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-400 rounded px-2 py-2 font-bold font-color">
          <button onClick={()=>setColor("black")} className="outline-none px-4 rounded-full text-white"style={{backgroundColor:"black"}}>DARK MODE</button>
          <button onClick={()=>setColor("white")} className="outline-none px-4 rounded-full text-black"style={{backgroundColor:"white"}}>LIGHT MODE</button>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
