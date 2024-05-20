'use client';

import classNames from 'classnames';
import styles from './ElementTrianglesBackground.module.scss';
import { useEffect, useState } from 'react';

interface ElementTrianglesBackgroundProps {
  active: boolean;
}

export default function ElementTrianglesBackground(
  props: ElementTrianglesBackgroundProps
) {
  const [isFinalActive, setIsFinalActive] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (props.active) {
      timeout = setTimeout(() => {
        setIsFinalActive(true);
      }, 200);
    } else {
      setIsFinalActive(false);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [props.active]);

  return (
    <div
      className={classNames(
        styles.background,
        props.active && styles.active,
        isFinalActive && styles['active-final']
      )}
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
