import { Outlet } from "react-router-dom";
import MainContainer from "../../Components/MainContainer";
import Nav from "../../Components/Nav";
import styles from './BasePage.module.css'

function BasePage() {
    return(
        <main className={styles.basePage}>
            <Nav/>
            <MainContainer>
                <Outlet/>
            </MainContainer>
        </main>
    )
}

export default BasePage;