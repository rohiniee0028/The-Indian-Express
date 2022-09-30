import { useContext } from "react";
import { Children } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({children}) {
  const {authState} = useContext(AuthContext);

  if(!authState){
    return <Navigate to="/login"/>
  }
  else{
    return children;
  }
  
}

export default PrivateRoute;
