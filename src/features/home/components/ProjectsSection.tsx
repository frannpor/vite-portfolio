import { ChipList } from "@/features/home/components/ui/ChipList";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ExternalLink } from "@/features/home/components/ui/ExternalLink";
import { ScreenshotPreview } from "@/features/home/components/ScreenshotPreview";
import type { PortfolioContent } from "@/features/home/data/portfolio";
import styles from "@/features/home/home.module.css";

type ProjectsSectionProps = {
  projects: PortfolioContent["projects"];
  section: PortfolioContent["sections"]["projects"];
};

export function ProjectsSection({ projects, section }: ProjectsSectionProps) {
  const HeaderIcon = section.icon;
  const accents = ["#4b1b22", "#0d1b2a", "#1a1636", "#10251b"];

  return (
    <section className={`${styles.section} ${styles.projectsSection}`} id="projects">
      <div className={styles.projectsHeader}>
        <div>
          <div className={styles.kicker}>
            <HeaderIcon size={17} />
            <span>{section.eyebrow}</span>
          </div>
          <h2>{section.title}</h2>
        </div>
        <p>{section.description}</p>
      </div>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => {
          const Icon = project.icon;
          const projectSlug = project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
          const projectClassName = `${styles.projectCard} ${
            projectSlug === "cartas-sin-asco" ? styles.projectCardCsa : ""
          } ${
            projectSlug === "weplay" ? styles.projectCardWeplay : ""
          }`;

          return (
            <article
              className={projectClassName}
              key={project.name}
              style={{ "--project-accent": accents[index % accents.length] } as CSSProperties}
            >
              <div className={styles.projectVisual}>
                {project.image ? (
                  <ScreenshotPreview
                    alt={project.image.alt}
                    className={styles.projectImage}
                    height={520}
                    src={project.image.src}
                    title={project.name}
                    width={900}
                  />
                ) : null}
                <div className={styles.projectMark}>
                  {project.logo ? (
                    <Image
                      src={project.logo.src}
                      alt={project.logo.alt}
                      width={96}
                      height={96}
                      unoptimized={project.logo.src.endsWith(".svg")}
                    />
                  ) : (
                    <Icon size={30} />
                  )}
                </div>
                <span>{project.initials}</span>
              </div>
              <div className={styles.projectHead}>
                <div>
                  <p>{project.eyebrow}</p>
                  <h3>{project.name}</h3>
                </div>
                <span>{project.meta}</span>
              </div>
              <p className={styles.projectSummary}>{project.summary}</p>
              <div className={styles.projectSignal}>
                <span>{project.signalLabel}</span>
                <p>{project.signal}</p>
              </div>
              <ChipList items={project.stack} compact />
              <div className={styles.projectActions}>
                {project.links.map((link) => (
                  <ExternalLink key={link.href} href={link.href} variant={link.kind === "live" ? "primary" : "quiet"}>
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
