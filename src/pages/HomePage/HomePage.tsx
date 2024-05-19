import AvatarCard from '../../components/AvatarCard/AvatarCard';
import MainBackground from '../../components/MainBackground/MainBackground';
import MainMenu from '../../components/MainMenu/MainMenu';
import styles from './HomePage.module.scss';

export default function HomePage() {
  return (
    <>
      <MainBackground />
      <main className={styles.container}>
        <AvatarCard />

        <MainMenu />  
      </main>
    </>
  );
}
