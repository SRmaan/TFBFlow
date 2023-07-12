import React from "react"
import Image from "next/image"

const FlowDiagram = () => {
  return (
    <>
   <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl font-bold">Flow Diagram</p>
      </div>
    <div className="flex flex-col items-center gap-2">
  <Image 
    src="/Diagram.drawio.png"
    width={900}
    height={900}
    alt="Flow diagram for TFB App"
  />
  </div>
  </section>
  
  </>
  )
}

export default FlowDiagram
