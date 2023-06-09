import styles from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <span>LOGO</span>
            <ul className={styles.list}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/the-teams">The Teams</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <span>BOOK NOW</span>
        </nav>
    );
};
