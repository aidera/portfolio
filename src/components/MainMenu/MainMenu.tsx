import Button from '../_ui/Button/Button';
import styles from './MainMenu.module.scss';

export default function MainMenu() {
  return (
    <div className={styles.menu}>
      <Button text="About" />
      <Button text="Contacts" />
      <Button text="Education" />
      <Button text="Experience" />
      <Button text="Projects" />
      <Button text="Skills" />
    </div>
  );
}
