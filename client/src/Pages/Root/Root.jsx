import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../../Components/shared/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer></Footer>
            <ScrollRestoration />
        </div>
    );
};

export default Root;