import styles from './Nav.module.css'
import {Link} from 'react-router-dom'

function Nav(){
    return(
    <nav className={styles.nav}>
        
        <ul className={styles.list}>
            <li>
                <Link to='/'> 
                    <img className={styles.logo} src='/images/logo.png' alt='logo' /> 
                </Link> 
            </li>

            <li>
                <Link to='/images'> IMAGES </Link> 
            </li>  
            
            <li>
                <Link to='/apod'> APOD </Link> 
            </li>               
        </ul>
            
    </nav>
    )
}

export default Nav