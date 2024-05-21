import FilledButton from '../_ui/FilledButton/FilledButton';
import styles from './MainMenu.module.scss';

export default function MainMenu() {
  return (
    <div className={styles.menu}>
      <FilledButton text="About" />
      <FilledButton text="Education" />
      <FilledButton text="Skills" />

      <FilledButton text="Experience" />
      <FilledButton text="Projects" />
      <FilledButton text="Contacts" />
    </div>
  );
}
