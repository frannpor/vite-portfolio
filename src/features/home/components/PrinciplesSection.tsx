import type { PortfolioContent } from "@/features/home/data/portfolio";
import styles from "@/features/home/home.module.css";

type PrinciplesSectionProps = {
  principles: PortfolioContent["principles"];
  section: PortfolioContent["sections"]["principles"];
};

export function PrinciplesSection({ principles, section }: PrinciplesSectionProps) {
  const HeaderIcon = section.icon;

  return (
    <section className={`${styles.section} ${styles.principlesSection}`} id="systems">
      <div className={styles.principlesHeader}>
        <div className={styles.kicker}>
          <HeaderIcon size={17} />
          <span>{section.eyebrow}</span>
        </div>
        <h2>{section.title}</h2>
        <p>{section.description}</p>
      </div>
      <div className={styles.principlesTerminal} aria-label={section.title}>
        {principles.map((principle, index) => {
          const Icon = principle.icon;

          return (
            <article className={styles.principleLine} key={principle.title}>
              <span className={styles.principleNumber}>{String(index + 1).padStart(2, "0")}</span>
              <div className={styles.cardIcon}>
                <Icon size={21} />
              </div>
              <div>
                <h3>
                  <span aria-hidden="true">$</span>
                  {principle.title}
                </h3>
                <p>{principle.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
