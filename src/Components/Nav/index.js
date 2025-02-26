import styles from './Nav.module.css'
import {Link} from 'react-router-dom'

function Nav(){
    return(
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <Link to='/'> Home </Link> 
                </li>
                <li>
                    <Link to='/images'> Galery </Link> 
                </li>
                {/* <li>
                    <Link to='/videos'> Videos </Link> 
                </li> */}
                
            </ul>
        </nav>
    )
}

export default Nav