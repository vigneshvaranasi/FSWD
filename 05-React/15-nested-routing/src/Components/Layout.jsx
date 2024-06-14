
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <div>
            <Navbar/>
            {/* Add Dynamic Content Here */}
            <div style={{minHeight:'100vh'}}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;