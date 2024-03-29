import styles from '@/styles/Home.module.scss';

interface SkillsProps {}

export default function Skills(props: SkillsProps) {
  const listSkills: string[] = [
    "React-js",
    "TypeScript",
    "Wordpress",
    "HTML5",
    "CSS3",
    "SASS",
    "Figma",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Finalista Para Facebook",
    "Automação de Marketing",
    "(RD STATION, LEADSLOVER)"
  ];

  function renderSkill() {
    return listSkills.map((nome, i) => <li key={i}>{nome}</li>);
  }

  return (
    <>
      <section className={styles.skills}>
        <h3 className={styles.tituloSection}>HABILIDADES</h3>
        <ul>{renderSkill()}</ul>
      </section>
    </>
  );
}
