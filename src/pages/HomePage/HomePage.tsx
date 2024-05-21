import AvatarCard from '../../components/AvatarCard/AvatarCard';
import MainBackground from '../../components/MainBackground/MainBackground';
import MainMenu from '../../components/MainMenu/MainMenu';
import DescriptionBlock from '../../components/_ui/DescriptionBlock/DescriptionBlock';
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <main>
      <MainBackground />

      <div className={styles.container}>
        <div className={styles.description}>
          <DescriptionBlock
            title1="Evgenia Mikhaleva"
            title2="Frontend Developer"
          />
        </div>

        <div className={styles.avatar}>
          <MainMenu />
          <AvatarCard />
        </div>

        <footer className={styles.footer}>
          Inspired by{' '}
          <a
            href="https://www.quanticdream.com/en/detroit-become-human"
            target="_blank"
          >
            Detroit: Become Human
          </a>
        </footer>
      </div>
    </main>
  );
}
