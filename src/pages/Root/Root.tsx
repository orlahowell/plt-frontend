import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import styles from "./Root.module.scss";

export function Root() {
    return (
        <div className={styles.root}>
            <Navbar />
            <div className={styles.main}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
