import { useState } from 'react';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import arrowSvg from '@/public/arrow.svg';
interface listExperience {
    startDate: string,
    endDate: string,
    companyName: string,
    vacancyInfor: string,
    responsibility: string,
}
export default function Experience(){
    const experienceList: listExperience[] = [
        {
            startDate: "Março 2014",
            endDate: "Janeiro 2015",
            companyName: "Mottirô",
            responsibility: "Desenvolvedor Web",
            vacancyInfor: "Trabalhei na criação de páginas front-end utilizando as linguagens HTML, CSS, JavaScript e PHP."
        },
        {
            startDate: "Março 2015",
            endDate: "Julho 2015",
            companyName: "Gonçalves IND.",
            responsibility: "Designer",
            vacancyInfor: "Trabalhei na produção de arte para panfletos de produtos, criando peças visuais que ajudaram a promover e destacar as características e benefícios dos produtos para os clientes."
        },
        {
            startDate: "Fevereiro 2016",
            endDate: "Novembro 2017",
            companyName: "Agência BPSI",
            responsibility: "Automação de Marketing , Arte Finalista, Desenvolvedor Web.",
            vacancyInfor: "Trabalhei na produção de arte para campanhas no Facebook, na automação de marketing utilizando a plataforma RD Station, e também como desenvolvedor front-end em um site de doações."
        },
        {
            startDate: "Fevereiro 2018",
            endDate: "Fevereiro 2021",
            companyName: "Hospital Central de Porto Velho",
            responsibility: "Auxiliar de farmácia hospitalar.",
            vacancyInfor: "Trabalhei na organização e distribuição de medicação para todos os setores do hospital."
        },
        {
            startDate: "Outubro 2020",
            endDate: "Janeiro 2021",
            companyName: "Soma Comunicação e Eventos",
            responsibility: "Arte Finalista.",
            vacancyInfor: "Trabalhei na produção de arte para campanhas publicitárias no Facebook."
        },
        {
            startDate: "Abril de 2021",
            endDate: "Outubro 2023",
            companyName: "Domatech Soluções em tecnologia",
            responsibility: "Desenvolvedor Front-End.",
            vacancyInfor: "Trabalho com a criação de páginas front-end utilizando a tecnologia ReactJS e TypeScript."
        }
    ]
    function renderExperience () {
        return experienceList.map((experience, i) => 
        <li key={i} className={styles.item}>
            <span className={styles.itemDot}></span>
            <div>
                <span className={styles.itemDate}>{experience.startDate} - {experience.endDate}</span>
                <p className={styles.itemName}><strong>{experience.companyName}</strong><span> — {experience.responsibility}</span></p>
                <div className={styles.itemInfor}>
                    <p>{experience.vacancyInfor }</p>
                </div>
            </div>
        </li>
        )
    }

    return (
        <>
        <section className={styles.experience}>
            <h3 className={styles.tituloSection}>EXPERIÊNCIA</h3>
            <div  className={styles.timeline}>
                <ul>
                    {renderExperience()}
                </ul>
            </div>
        </section>
        </>
    )
}