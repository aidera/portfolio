import { PropsWithChildren } from 'react';
import styles from './ChartTitle.module.scss';

export default function ChartTitle(props: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <h1>{props.children}</h1>
    </div>
  );
}
