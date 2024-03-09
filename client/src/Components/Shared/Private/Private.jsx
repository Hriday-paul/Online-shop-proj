import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../../../ContextHandler/Authonicate/Authonicate';
import {PropagateLoader} from 'react-spinners'


function Private({ children }) {
    const { userInfo, loading } = useContext(authContext);
    const location = useLocation();

    if (loading) {
        return <div className="min-h-[90vh] flex justify-center items-center">
            <PropagateLoader
                color="#FB923C"
                size={17}
                speedMultiplier={1}
            />

        </div>
    }

    else if (userInfo) {
        return children;
    }

    return <Navigate state={{ from: location.pathname }} to="/login" replace></Navigate>
}

export default Private