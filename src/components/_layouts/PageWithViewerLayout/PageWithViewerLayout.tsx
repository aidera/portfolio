import { PropsWithChildren } from 'react';
import styles from './PageWithViewerLayout.module.scss';

export default function PageWithViewerLayout(props: PropsWithChildren) {
  return <main className={styles.container}>{props.children}</main>;
}
