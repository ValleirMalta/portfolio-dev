


import Link from 'next/link'
import styles from '@/styles/Home.module.scss'

export default function HeaderMain(){
    return(
        <>

        {/* <header className="bartop">
            <nav className="menu">
                <ul>
                <li><Link href="/dashboard">HTML</Link></li>
                <li><Link href="/dashboard">React</Link></li>
                <li><Link href="/dashboard">Efeitos CSS</Link></li>
                </ul>
            </nav>
        </header> */}

        <header className={styles.bartop}>
            <div className={styles.name}>Front-End: <br/>
            <h1>
                <span data-shadow='Valleir'>Valleir</span> <span data-shadow='Malta'>Malta</span>
                </h1>
            </div>
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