import styles from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span>
                © Copyright 2022 Premier League Tours Ltd: 12164078 |{" "}
                <a>Terms & Conditions</a>
            </span>
            <span>Website by Orla Howell</span>
        </footer>
    );
};
