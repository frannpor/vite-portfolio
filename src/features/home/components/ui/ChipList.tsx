import type { CSSProperties } from "react";
import { techMeta } from "@/features/home/data/shared";
import styles from "@/features/home/home.module.css";

type ChipListProps = {
  items: string[];
  compact?: boolean;
};

type ChipStyle = CSSProperties & {
  "--chip-color"?: string;
};

export function ChipList({ items, compact = false }: ChipListProps) {
  return (
    <div className={compact ? styles.chipsCompact : styles.chips}>
      {items.map((item) => {
        const meta = techMeta[item as keyof typeof techMeta];
        const style: ChipStyle | undefined = meta ? { "--chip-color": meta.color } : undefined;

        return meta && "href" in meta ? (
          <a href={meta.href} key={item} rel="noopener noreferrer" style={style} target="_blank">
            {item}
          </a>
        ) : (
          <span key={item} style={style}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
