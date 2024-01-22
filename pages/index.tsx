import HeadInfor from '@/components/HeadInfor';
import AboutMe from '@/components/aboutMe';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <HeadInfor
        title='Front-End: Valleir Malta'
        description='Curriculo Online'
      />
      <main className="main">
        <div className="container">
          <Header />
          <AboutMe />
          <Skills />
          <Experience />
        </div>
      </main>
    </>
  )
}
