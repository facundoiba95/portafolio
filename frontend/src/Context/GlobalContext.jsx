import React,{ createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
    const [ isOpenViewer, setIsOpenViewer ] = useState(false)
    const [ isOpenMenu, setIsOpenMenu ] = useState(false); 
    const [ isScroll, setIsScroll ] = useState(false); 
    const [ isDark, setIsDark ] = useState(false);
    const [ isOpenModal, setIsOpenModal ] = useState(false); 
    const [ conditionModal, setConditionModal  ] = useState(false); 

  return (
    <GlobalContext.Provider value={{
        isOpenMenu, setIsOpenMenu,
        isDark, setIsDark,
        isOpenViewer, setIsOpenViewer,
        isScroll, setIsScroll,
        isOpenModal, setIsOpenModal,
        conditionModal, setConditionModal
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContextProvider