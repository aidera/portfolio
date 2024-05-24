import ArtStationIcon from '../../assets/icons/ArtStationIcon';
import GithubIcon from '../../assets/icons/GithubIcon';
import HomeIcon from '../../assets/icons/HomeIcon';
import LinkedInIcon from '../../assets/icons/LinkedInIcon';
import MailIcon from '../../assets/icons/MailIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';
import BlankPage from '../../components/_layouts/BlankPage/BlankPage';
import styles from './ContactsPage.module.scss';

export default function ContactsPage() {
  return (
    <BlankPage title="Contacts" backgroundImage="/assets/images/bg1.png">
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.icon}>
            <HomeIcon />
          </div>
          <p>Toronto, Canada</p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <MailIcon />
          </div>
          <p>
            <a href="mailto:hope.aidera@gmail.com">hope.aidera@gmail.com</a>
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <PhoneIcon />
          </div>
          <p>
            <a href="tel:+14378498542">+1 (437) 849-8542</a>
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <LinkedInIcon />
          </div>
          <p>
            <a
              href="https://www.linkedin.com/in/evgenia-mikhaleva-2a3bb6181/"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <GithubIcon />
          </div>
          <p>
            <a href="https://github.com/aidera" target="_blank">
              GitHub
            </a>
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.icon}>
            <ArtStationIcon />
          </div>
          <p>
            <a href="https://www.artstation.com/aidera" target="_blank">
              ArtStation
            </a>
          </p>
        </div>
      </div>
    </BlankPage>
  );
}
