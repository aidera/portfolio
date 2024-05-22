import { PropsWithChildren } from 'react';
import styles from './PageWithViewerViewer.module.scss';

export default function PageWithViewerViewer(props: PropsWithChildren) {
  return (
    <div className={styles.container}>
      {props.children}
      <div className={styles.line}></div>
    </div>
  );
}
