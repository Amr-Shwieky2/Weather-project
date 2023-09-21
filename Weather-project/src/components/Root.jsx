import { Outlet } from "react-router";
import MainNavBar from "./MainNavBar";

const RootLayout = () => {
    return(
        <>
            <MainNavBar/>
            <Outlet/>
        </>
    );
    
};
export default RootLayout;