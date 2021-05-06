import styles from './NeonButton.module.scss'

interface Props {
  className?: string
  children: string
}

const NeonButton: React.FC<Props> = ({ children, className }) => {
  return (
    <a className={styles.button}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </a>
  )
}

export default NeonButton
