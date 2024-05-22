import { PropsWithChildren } from 'react';
import styles from './PageWithViewer.module.scss';

export default function PageWithViewer(props: PropsWithChildren) {
  return <div className={styles.container}>{props.children}</div>;
}
