import { PropsWithChildren } from 'react';
import SimpleBackground from '../../_ui/SimpleBackground/SimpleBackground';
import Title from '../../_ui/Title/Title';
import BackToMenuButton from '../../_ui/BackToMenuButton/BackToMenuButton';
import styles from './BlankPageLayout.module.scss';

interface BlankPageLayoutProps extends PropsWithChildren {
  title: string;
  backgroundImage?: string;
}

export default function BlankPageLayout(props: BlankPageLayoutProps) {
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
