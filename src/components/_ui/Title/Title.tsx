import { PropsWithChildren } from 'react';
import styles from './Title.module.scss';

export default function Title(props: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <div className={styles.deco1}></div>
      <h1>{props.children}</h1>
    </div>
  );
}
