import styles from '@/styles/Home.module.scss';

export default function Experience(){
    // const
    return (
        <>
        <section className={styles.experience}>
            <h3 className={styles.tituloSection}>EXPERIÊNCIA</h3>
            <div>
                <ul>
                    <li>
                        <div>
                            <dl>
                                <dd>Março 2014</dd>
                                <dd>- Janeiro 2015</dd>
                            </dl>
                        </div>
                        <div>
                            <h4>Mottirô — Desenvolvedor Web</h4>
                            <p>Trabalhei na criação de páginas front-end utilizando as linguagens HTML, CSS, JavaScript e PHP.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}