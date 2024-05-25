import { PropsWithChildren, ReactNode } from 'react';
import Title from '../../../_ui/Title/Title';
import styles from './PageWithViewerLayoutContent.module.scss';

interface PageWithViewerLayoutContent extends PropsWithChildren {
  title: string;
  menuItems?: ReactNode[];
}

export default function PageWithViewerLayoutContent(
  props: PageWithViewerLayoutContent
) {
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

        <div className={styles.footer}>
          {props.menuItems &&
            props.menuItems.map((el) => {
              return <div key={el?.toString()}>{el}</div>;
            })}
        </div>
      </div>
    </div>
  );
}
