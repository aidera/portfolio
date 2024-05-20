import FilledButton from '../_ui/FilledButton/FilledButton';
import styles from './MainMenu.module.scss';

export default function MainMenu() {
  return (
    <div className={styles.menu}>
      <FilledButton text="About" />
      <FilledButton text="Contacts" />
      <FilledButton text="Education" />
      <FilledButton text="Experience" />
      <FilledButton text="Projects" />
      <FilledButton text="Skills" />
    </div>
  );
}
