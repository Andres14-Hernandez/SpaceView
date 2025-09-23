import { Outlet } from "react-router-dom";
import MainContainer from "../../Components/MainContainer";
import Nav from "../../Components/Nav";
import styles from './BasePage.module.css'
import Footer from "../../Components/Footer";

function BasePage() {
    return(
        <main className={styles.basePage}>
            <Nav/>
            <MainContainer>
                <Outlet/>
            </MainContainer>
            <Footer/>
        </main>
    )
}

export default BasePage;