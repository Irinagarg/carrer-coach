import React, { Suspense } from 'react'
import {barloader} from "react-spinners"
const layout = ({children}) => {
  return (
    <div className="px-5">
       
      </div>
      <Suspense
      fallback={<Barloader className="mt-4" width={"100%"} color="gray" />}>
        {children}
      </Suspense>
    </div>
  )
}

export default layout
