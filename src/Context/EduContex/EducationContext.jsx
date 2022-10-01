import { useReducer, useState } from "react";
import { createContext } from "react";
import eduReducer from "./eduReducer";


export const EducationContext = createContext();

function EducationContextProvider({children}) {

    const [eduState , eduDispatch] = useReducer(eduReducer , {eduData:[]})

    return <EducationContext.Provider value={{eduState, eduDispatch}}>
        {children}
    </EducationContext.Provider>
}

export default EducationContextProvider;
