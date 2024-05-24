import { PropsWithChildren } from 'react';
import SimpleBackground from '../../SimpleBackground/SimpleBackground';
import Title from '../../_ui/Title/Title';
import BackToMenuButton from '../../BackToMenuButton/BackToMenuButton';
import styles from './BlankPage.module.scss';

interface BlankPageProps extends PropsWithChildren {
  title: string;
  backgroundImage?: string;
}

export default function BlankPage(props: BlankPageProps) {
  return (
    <main className={styles.container}>
      <SimpleBackground backgroundImage={props.backgroundImage} />
      <div className={styles.content}>
        <div className={styles.header}>
          <Title>{props.title}</Title>
        </div>
        <div className={styles.children}>{props.children}</div>
        <div className={styles.footer}>
          <BackToMenuButton />
        </div>
      </div>
    </main>
  );
}
