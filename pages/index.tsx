
import React, { useRef } from 'react';
import HeadInfor from '@/components/HeadInfor';
import AboutMe from '@/components/AboutMe';
import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import SelectOne from '@/components/Select/SelectOne';
import styles from '@/styles/Home.module.scss';

export default function Home() {
  const checkboxRef = useRef<HTMLLabelElement>(null);
  return (
    <>
      <HeadInfor
        title='Front-End: Valleir Malta'
        description='Curriculo Online'
      />
      <main className="mainHome"  ref={checkboxRef}>
        <SelectOne checkboxRef={checkboxRef} />
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

