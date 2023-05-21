import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(!user){
        Swal.fire('You have to log in first to view details !!')
        return <Navigate to="/login"  state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;