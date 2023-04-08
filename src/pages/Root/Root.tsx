import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export function Root() {
    return (
        <>
            <Navbar />
            <div id="detail">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
