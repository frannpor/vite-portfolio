import type { ScrollAtmosphereColumn } from "@/features/home/data/types";
import styles from "@/features/home/home.module.css";

type ScrollAtmosphereProps = {
  columns: ScrollAtmosphereColumn[];
};

const STREAM_REPEAT_COUNT = 3;

export function ScrollAtmosphere({ columns }: ScrollAtmosphereProps) {
  return (
    <div className={styles.scrollAtmosphere} aria-hidden="true">
      {columns.map((column) => {
        const streamLines = Array.from({ length: STREAM_REPEAT_COUNT }, () => column.lines).flat();

        return (
          <span key={column.id}>
            {streamLines.map((line, lineIndex) => (
              <b key={`${column.id}-${lineIndex}`}>{line}</b>
            ))}
          </span>
        );
      })}
    </div>
  );
}
