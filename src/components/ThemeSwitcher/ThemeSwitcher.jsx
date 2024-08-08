import styles from './ThemeSwitcher.module.scss'
import { useTheme } from '../mode/useTheme'

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={styles.themeSwitcher} onClick={toggleTheme}>
      <input type='checkbox' checked={theme === 'dark'} />
      <label />
    </div>
  )
}