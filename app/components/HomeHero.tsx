/* HomeHero.tsx */
import styles from './HomeHero.module.css'

export function HomeHero({ children }: { children: React.ReactNode }) {
  return <h1 className={styles.title}>{children}</h1>
}