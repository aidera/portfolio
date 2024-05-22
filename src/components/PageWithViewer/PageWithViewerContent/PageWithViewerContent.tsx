import { PropsWithChildren } from 'react';
import styles from './PageWithViewerContent.module.scss';
import Title from '../../_ui/Title/Title';

interface PageWithViewerContent extends PropsWithChildren {
  title: string;
}

export default function PageWithViewerContent(props: PageWithViewerContent) {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.background1}></div>
        <div className={styles.background2}></div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.content}>
        <Title>{props.title}</Title>
        <div className={styles.children}>{props.children}</div>
      </div>
    </div>
  );
}
