import styles from './MainContainer.module.css'

function MainContainer({children}) {
    return(
        <section className={styles.mainContainer}>
            {children}
        </section>
    )
}

export default MainContainer