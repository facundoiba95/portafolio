import React,{ createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    const [ isOpenViewer, setIsOpenViewer ] = useState(false)
    const [ isOpenMenu, setIsOpenMenu ] = useState(false); 
    const [ isScroll, setIsScroll ] = useState(false); 
    const [ isDark, setIsDark ] = useState(false);

  return (
    <GlobalContext.Provider value={{
        isOpenMenu, setIsOpenMenu,
        isDark, setIsDark,
        isOpenViewer, setIsOpenViewer,
        isScroll, setIsScroll
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider