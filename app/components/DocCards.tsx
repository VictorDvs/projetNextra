import styles from './DocCards.module.css'
import Link from 'next/link'

interface CardProps {
  title: string
  href: string
  description: string
  cta: string
}

export function DocCards({ cards }: { cards: CardProps[] }) {
  return (
<div className={styles.grid}>
  {cards.map((card) => (
    <div key={card.href} className={styles.card}>
      <p className={styles.title}>{card.title}</p>
      <p className={styles.description}>{card.description}</p>
      <Link href={card.href} className={styles.cta}>
        {card.cta}
      </Link>
    </div>
  ))}
</div>
  )
}