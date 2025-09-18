import styles from './Nav.module.css'
import {Link} from 'react-router-dom'

function Nav(){
    return(
    <nav className={styles.nav}>
        
        <div>

        <Link to='/'> 
            <img className={styles.logo} src='/images/logo.png' alt='logo' /> 
        </Link> 
        </div>

        <ul className={styles.list}>
            <li>
                <Link to='/images'> IMAGES </Link> 
            </li>  
            
            <li>
                <Link to='/apod'> APOD </Link> 
            </li>
            
            <li>
                <Link to='/articles'> ARTICLES </Link> 
            </li>                
        </ul>
            
    </nav>
    )
}

export default Nav