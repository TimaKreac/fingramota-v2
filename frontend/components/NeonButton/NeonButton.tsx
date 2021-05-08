import Link from 'next/link'
import styles from './NeonButton.module.scss'
import classnames from 'classnames'

interface Props {
  children: string
  href: string
}

const NeonButton: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className={styles.button}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </a>
    </Link>
  )
}

export default NeonButton
