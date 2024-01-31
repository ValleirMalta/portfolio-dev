


import Link from 'next/link'
import styles from '@/styles/Home.module.scss'

export default function HeaderMain(){
    return(
        <>
        <header className={styles.bartop}>
            <div className={styles.name}>Front-End: <br/>
            <h1>
                <span data-shadow='Valleir'>Valleir</span> <span data-shadow='Malta'>Malta</span>
                </h1>
            </div>
            <nav className={styles.menu}>
                <ul>
                <li><Link href="/react">React</Link></li>
                <li><Link href="/efeitosCss">Efeitos CSS</Link></li>
                </ul>
            </nav>
        </header>
        </>
    )
}