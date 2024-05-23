import { PropsWithChildren, ReactNode } from 'react';
import styles from './PageWithViewerViewer.module.scss';

interface PageWithViewerViewerProps extends PropsWithChildren {
  menuItems?: ReactNode[];
}

export default function PageWithViewerViewer(props: PageWithViewerViewerProps) {
  return (
    <div className={styles.container}>
      {props.children}
      <div className={styles.line}>
        {props.menuItems && props.menuItems.map(el => {
          return <div key={el?.toString()}>{el}</div>
        })}
      </div>
    </div>
  );
}
