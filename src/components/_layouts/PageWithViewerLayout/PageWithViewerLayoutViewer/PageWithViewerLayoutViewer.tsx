import { PropsWithChildren, ReactNode } from 'react';
import styles from './PageWithViewerLayoutViewer.module.scss';

interface PageWithViewerLayoutViewerProps extends PropsWithChildren {
  menuItems?: ReactNode[];
}

export default function PageWithViewerLayoutViewer(
  props: PageWithViewerLayoutViewerProps
) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{props.children}</div>
      <div className={styles.line}>
        {props.menuItems &&
          props.menuItems.map((el) => {
            return <div key={el?.toString()}>{el}</div>;
          })}
      </div>
    </div>
  );
}
