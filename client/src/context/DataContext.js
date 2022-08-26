import { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {



  return (
    <DataContext.Provider value={{

    }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext