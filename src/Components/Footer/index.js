import styles from './footer.module.css'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.returnHome}>
          <Link to ="/">
            <img className={styles.logo} src='/images/logo.png' alt='logo' />
          </Link>
          <div>
            <Link to="/" className={styles.link}> SpaceView </Link>
              <p className={styles.copy}>
                © {new Date().getFullYear()} SpaceView. All rights reserved.
              </p>    
            </div>
        </div>

        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/andres14hernandez/" target="_blank" rel="noopener noreferrer">
            Linkedind
          </a>
          <a href="https://github.com/Andres14-Hernandez" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
