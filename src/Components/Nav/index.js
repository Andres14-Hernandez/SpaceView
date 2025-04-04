import styles from './Nav.module.css'
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <nav className={styles.nav}>

            <div className={styles.logo}>
                <Link to='/'> 
                    <img src='/images/logo-SpaceView.png' alt='logo' /> 
                </Link>           
            </div>

            <ul className={styles.list}>
                <li>
                    <Link to='/images'> Images </Link> 
                </li>                
            </ul>
            
        </nav>
    )
}

export default Nav