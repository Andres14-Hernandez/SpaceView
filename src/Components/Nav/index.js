import styles from './Nav.module.css'
import {Link} from 'react-router-dom'

function Nav(){
    return(
    <nav className={styles.header}>
        
        <div>
        <Link className={styles.home} to='/'> 
            <img className={styles.logo} src='/images/logo.png' alt='logo' />
            <h3>SpaceView</h3> 
        </Link> 
        </div>

        <ul className={styles.nav}>
            <li>
                <Link to='/images'> GALERY </Link> 
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