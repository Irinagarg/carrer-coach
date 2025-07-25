import React, { Suspense } from 'react'
import { BarLoader } from "react-spinners";
const layout = ({children}) => {
  return (
    <div className="px-5">
      <div className=" flex item-center ustify">
         <h1 className="text-6xl font-bold gradient-title">Industry Insights</h1>
      </div>
      <Suspense
      fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}>{children}
      </Suspense>
    </div>
  )
}

export default layout
