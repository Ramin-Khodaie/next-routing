import React from "react";

export default function CatchAllSegmentPage(props: any) {
  
  return (
    <section className="mt-12">
    <div className="container">
      <h1 className="font-serif text-3xl font-bold text-gray-700">CatchAllSegmentPage</h1>
    </div>    
    <div className=" ps-60 mt-4"> with  params: {JSON.stringify(props.params)}</div>
  </section>
  
  )
  
  
}
