import React,{ createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    const [ isOpenMenu, setIsOpenMenu ] = useState(false); 
    const [ isDark, setIsDark ] = useState(false);

  return (
    <GlobalContext.Provider value={{
        isOpenMenu, setIsOpenMenu,
        isDark, setIsDark
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider