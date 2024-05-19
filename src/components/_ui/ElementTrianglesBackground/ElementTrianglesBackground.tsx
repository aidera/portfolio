import classNames from 'classnames';
import styles from './ElementTrianglesBackground.module.scss';

export default function ElementTrianglesBackground() {
  return (
    <div
      className={classNames(styles.background)}
    >
      <div className={classNames(styles.triangle, styles.triangle1)}></div>
      <div className={classNames(styles.triangle, styles.triangle2)}></div>
      <div className={classNames(styles.triangle, styles.triangle3)}></div>
      <div className={classNames(styles.triangle, styles.triangle4)}></div>
      <div className={classNames(styles.triangle, styles.triangle5)}></div>
      <div className={classNames(styles.triangle, styles.triangle6)}></div>
    </div>
  );
}
