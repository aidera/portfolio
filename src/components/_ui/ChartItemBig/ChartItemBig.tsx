import { PropsWithChildren } from 'react';
import ElementTrianglesBackgroundLight from '../ElementTrianglesBackgroundLight/ElementTrianglesBackgroundLight';
import styles from './ChartItemBig.module.scss';
import classNames from 'classnames';

interface ChartItemBig extends PropsWithChildren {
  title: string;
  img: string;
}

export default function ChartItemBig(props: ChartItemBig) {
  return (
    <div className={styles.container}>
      <div className={styles['image-container']}>
        <img draggable={false} src={props.img} alt={props.title} />
        <div className={classNames(styles['img-bg'], styles['img-bg-1'])}></div>
        <div className={classNames(styles['img-bg'], styles['img-bg-2'])}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.borders}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={styles.title}>
          <div className={styles.shadow}></div>

          <div className={styles['title-content']}>
            <ElementTrianglesBackgroundLight />
            <span>{props.title}</span>
          </div>
        </div>

        {props.children && (
          <div className={styles.description}>{props.children}</div>
        )}
      </div>
    </div>
  );
}
