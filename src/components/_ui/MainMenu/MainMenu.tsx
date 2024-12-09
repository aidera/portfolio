import FilledButton from '../FilledButton/FilledButton';
import { baseRoute } from '../../../utils/env';
import styles from './MainMenu.module.scss';

export default function MainMenu() {
  return (
    <div className={styles.menu}>
      <FilledButton text="About" link={`${baseRoute}about`} />
      <FilledButton text="Education" link={`${baseRoute}education`} />
      <FilledButton text="Skills" link={`${baseRoute}skills`} />

      <FilledButton text="Experience" link={`${baseRoute}experience`} />
      <FilledButton text="Contacts" link={`${baseRoute}contacts`} />
      {/* <FilledButton text="Projects" link={`${baseRoute}projects`} /> */}
    </div>
  );
}
