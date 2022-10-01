import { useReducer, useState } from "react";
import { createContext } from "react";
import sportsReducer from "./reducer";

export const SportsContext = createContext();

function SportsContextProvider({children}) {

    const [sportsState , sportsDispatch] = useReducer(sportsReducer , {sportsData:[]})

    return <SportsContext.Provider value={{sportsState, sportsDispatch}}>
        {children}
    </SportsContext.Provider>
}

export default SportsContextProvider;
