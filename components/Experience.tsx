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
    const [item, setItem] = useState(0);
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
            startDate: "Março 2015",
            endDate: "Julho 2015",
            companyName: "Gonçalves IND.",
            responsibility: "Designer",
            vacancyInfor: "Trabalhei na produção de arte para panfletos de produtos, criando peças visuais que ajudaram a promover e destacar as características e benefícios dos produtos para os clientes."
        },
        {
            startDate: "Março 2015",
            endDate: "Julho 2015",
            companyName: "Gonçalves IND.",
            responsibility: "Designer",
            vacancyInfor: "Trabalhei na produção de arte para panfletos de produtos, criando peças visuais que ajudaram a promover e destacar as características e benefícios dos produtos para os clientes."
        }
    ]
    function renderExperience () {
        return experienceList.map((experience, i) => 
        <li key={i} className={styles.item}>
            <div className={styles.headerItem}>
                <button
                className={` ${styles.btnArrow} ${item === (i + 1) ? styles.btnArrowExpanded : ""} `}
                onClick={() => expandItem(i)}
                >
                    <Image
                        src={arrowSvg}
                        width={30}
                        height={30}
                        alt="Picture of the author"
                    />
                </button>
                <span className={styles.itemDot}></span>
                <div>
                    <span className={styles.itemDate}>{experience.startDate} - {experience.endDate}</span>
                    <p className={styles.itemName}><strong>{experience.companyName}</strong><span> — {experience.responsibility}</span></p>
                </div>
            </div>
            <div className={` ${styles.itemInfor} ${item === (i + 1) ? styles.expanded : ""} `} >
                <div>
                    <p>{experience.vacancyInfor }</p>
                </div>
            </div>
        </li>
        )
    }
    function expandItem(params:number) {
        if((params + 1) === item) {
            setItem(0)
        } else {
            setItem(params + 1)
        }
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