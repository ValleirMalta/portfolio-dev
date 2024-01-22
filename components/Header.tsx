
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
export default function HeaderMain(){
    return(
        <>
        <header className={styles.bartop}>
            <h1 className={styles.name}>Front-End: <br/><strong>Valleir Malta</strong></h1>
            <nav className={styles.menu}>
                <ul>
                <li><Link href="/dashboard">HTML</Link></li>
                <li><Link href="/dashboard">React</Link></li>
                <li><Link href="/dashboard">Efeitos CSS</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}