import FilledButton from '../FilledButton/FilledButton';
import styles from './MainMenu.module.scss';

const base = process.env.NODE_ENV === 'production' ? '/portfolio/' : '/';

export default function MainMenu() {
  return (
    <div className={styles.menu}>
      <FilledButton text="About" link={`${base}about`} />
      <FilledButton text="Education" link={`${base}education`} />
      <FilledButton text="Skills" link={`${base}skills`} />

      <FilledButton text="Experience" link={`${base}experience`} />
      <FilledButton text="Contacts" link={`${base}contacts`} />
      {/* <FilledButton text="Projects" link={`${base}projects`} /> */}
    </div>
  );
}
