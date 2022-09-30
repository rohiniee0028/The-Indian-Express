import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [authState, setAuthState] = useState(false);
    const loginUser=()=>{
        setAuthState(!authState);
    }
    return <AuthContext.Provider value={{authState, loginUser}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;
