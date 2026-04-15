import styles from './TitlesPages.module.css'

export function h2({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.title}>{children}</h2>
}
export function h3({ children }: { children: React.ReactNode }) {
  return <h3 className={styles.title}>{children}</h3>
}