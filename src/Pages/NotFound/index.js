import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound(){
    return(
        <main className={styles.notFound}>
            <h1>Not Found</h1>
             <p>Oops! The page you're looking for doesn't exist.</p>

             <Link to="/" className={styles.homeButton}>
                Go back home
            </Link>
        </main>
        
        
    )
}

export default NotFound;