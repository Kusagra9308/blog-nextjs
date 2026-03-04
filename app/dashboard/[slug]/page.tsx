// import { useState } from "react";

import { Counter } from "@/app/components/Counter";

type Params = Promise<{ slug: string }>;

export default async function DashboardRoutee({ params }: { params: Params }) {
  const { slug } = await params;
//   const {count,setCount} = useState(0)
  return(
  <div>
    <h1> Hello from dashboard dynamic page
        {/* <button onClick={()=>setCount(count+1)}></button> */}
    </h1>
    <h2>Display : {slug}</h2>
    <Counter/>
  </div>
  )
}
