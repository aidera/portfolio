import FilledButton from '../FilledButton/FilledButton';
import styles from './MainMenu.module.scss';

export default function MainMenu() {
  return (
    <div className={styles.menu}>
      <FilledButton text="About" link={'/about'} />
      <FilledButton text="Education" link={'/education'} />
      <FilledButton text="Skills" link={'/skills'} />

      <FilledButton text="Experience" link={'/experience'} />
      {/* <FilledButton text="Projects" link={'/projects'} /> */}
      <FilledButton text="Contacts" link={'/contacts'} />
    </div>
  );
}
