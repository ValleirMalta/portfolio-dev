import styles from '@/styles/Home.module.scss';
export default function AboutMe(){
    return (
        <>
            <section className={styles.aboutMe}>
              <div>
                <h3 className={styles.tituloSection}>SOBRE MIM</h3>
                <p>
                  Gosto de desafios, trabalho bem em equipe e aprendo bastante as coisas
                  sozinho. Sou autodidata.
                  Sou um desenvolvedor front-end com experiência na área e estou
                  desenvolvendo minhas habilidades para back-end. Trabalho com
                  frameworks que facilitam na agilidade do desenvolvimento do projeto.
                </p>
              </div>
              <div className={styles.personalInfor}>
                  <p>Brazil, 31.03.1995</p>
                  <p>Porto Velho, RO, Brasil</p>
                  <p><strong>+55 (69) 993988701</strong></p>
                  <p><strong>valleir.sud@gmail.com</strong></p>
              </div>
            </section>
        </>
    )
}