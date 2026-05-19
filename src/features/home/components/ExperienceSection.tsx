import { ChipList } from "@/features/home/components/ui/ChipList";
import Image from "next/image";
import type { PortfolioContent } from "@/features/home/data/portfolio";
import styles from "@/features/home/home.module.css";

type ExperienceSectionProps = {
  experience: PortfolioContent["experience"];
  section: PortfolioContent["sections"]["experience"];
};

export function ExperienceSection({ experience, section }: ExperienceSectionProps) {
  const HeaderIcon = section.icon;

  return (
    <section className={`${styles.section} ${styles.experienceSection}`} id="work">
      <div className={styles.experienceHeader}>
        <div>
          <div className={styles.kicker}>
            <HeaderIcon size={17} />
            <span>{section.eyebrow}</span>
          </div>
          <h2>{section.title}</h2>
          <p>{section.description}</p>
        </div>
        <span>{experience.length} roles</span>
      </div>
      <div className={styles.experienceList}>
        {experience.map((item, index) => {
          const Icon = item.icon;

          return (
            <article className={styles.experienceItem} key={`${item.company}-${item.role}`}>
              <div className={styles.experienceIndex}>
                <i className={index === 0 ? styles.currentDot : undefined} />
                <Icon size={22} />
                <span>{item.period}</span>
              </div>
              <div className={styles.experienceBody}>
                <div className={styles.experienceTitle}>
                  <p>{item.context}</p>
                  <div className={styles.experienceBrand}>
                    {item.logo ? (
                      <span className={styles.logoFrame}>
                        <Image src={item.logo.src} alt={item.logo.alt} width={72} height={72} />
                      </span>
                    ) : null}
                    <div>
                      <h3>{item.role}</h3>
                      <strong>{item.company}</strong>
                    </div>
                  </div>
                </div>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <ChipList items={item.stack} compact />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
