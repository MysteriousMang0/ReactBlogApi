import { Outlet, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const ProtectedRouts = () => {
    const navigate = useNavigate()

    var user = JSON.parse(localStorage.getItem("user"))

    if (user && user.loggedIn === true){
        return <Outlet/>
    }
    if (!user || user.loggedIn === false) {
        return <Navigate to="/login" />;
    }
}

export default ProtectedRouts