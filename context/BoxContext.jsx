import React, { createContext, useState } from 'react'
import { unboxingData } from '../unboxingData'


export const BoxContext = createContext()

const BoxProvider = ({children}) => {
  const [box, setBox] = useState(unboxingData)

  // console.log(box);
  
  return (
    <BoxContext.Provider value={{box}}>
        {children}
    </BoxContext.Provider> 
  )
}

export default BoxProvider