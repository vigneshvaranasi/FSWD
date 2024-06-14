import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <div>
            <Navbar/>
            {/* Add Dynamic COntent Here */}
            <div style={{minHeight:'100vh'}}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;