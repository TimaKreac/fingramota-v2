import NeonButton from '../src/components/NeonButton/NeonButton'
import styles from '../src/styles/404.module.scss'

const Custom404: React.FC = () => {
  return (
    <div className={styles.e404}>
      <h1>404</h1>
      <h2>Страница не найдена.</h2>
      <NeonButton href='/'>На главную</NeonButton>
    </div>
  )
}

export default Custom404
