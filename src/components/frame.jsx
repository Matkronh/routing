import { Link, Outlet } from 'react-router-dom'
import styles from './frame.module.css'

function Layout() {
    return(
        <>
        <header>
            <h3>~v~ Links ~v~</h3>
            <nav className={styles.nav} >
                <Link className={styles.indi} to='/'>Home</Link>
                <Link className={styles.indi} to='/rules'>Rules</Link>
                <Link className={styles.indi} to='/contact'>Contact Me</Link>
            </nav>
        </header>

        <main>
            <Outlet />
        </main>

        <footer>
            <h5>Copyright 2023 - 2083 TM@EvilCorp</h5>
        </footer>
        </>
    )
}

export default Layout