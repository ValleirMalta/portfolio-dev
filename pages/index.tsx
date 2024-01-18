import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import HeadInfor from '@/components/HeadInfor'

export default function Home() {
  return (
    <>
      <HeadInfor
        title='Front-End: Valleir Malta'
        description='Curriculo Online'
      />
      <main className="main">
        <div className="container">

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

        </div>
      </main>
    </>
  )
}
