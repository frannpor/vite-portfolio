import { ChipList } from "@/features/home/components/ui/ChipList";
import type { PortfolioContent } from "@/features/home/data/portfolio";
import styles from "@/features/home/home.module.css";

type StackSectionProps = {
  section: PortfolioContent["sections"]["stack"];
  stack: PortfolioContent["stack"];
};

export function StackSection({ section, stack }: StackSectionProps) {
  const HeaderIcon = section.icon;

  return (
    <section className={`${styles.section} ${styles.stackSection}`} id="stack">
      <div className={styles.stackHeader}>
        <div className={styles.kicker}>
          <HeaderIcon size={17} />
          <span>{section.eyebrow}</span>
        </div>
        <h2>{section.title}</h2>
        <p>{section.description}</p>
      </div>
      <div className={styles.stackGrid}>
        {stack.map((group) => {
          const Icon = group.icon;

          return (
            <article className={styles.stackGroup} key={group.label}>
              <div>
                <Icon size={21} />
                <h3>{group.label}</h3>
              </div>
              <ChipList items={group.items} compact />
            </article>
          );
        })}
      </div>
    </section>
  );
}
