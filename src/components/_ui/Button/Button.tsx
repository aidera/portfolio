import { HTMLAttributes, ReactNode, useRef } from 'react';
import styles from './Button.module.scss';
import { isMobileDevice } from '../../../utils/client';
import rippleEffect from '../../../utils/ripple-effect';
import ElementTrianglesBackground from '../ElementTrianglesBackground/ElementTrianglesBackground';

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  text: string;
  icon?: ReactNode;
  title?: string;
}

export default function Button(props: ButtonProps) {
  const isMobile = isMobileDevice();
  const backgroundRef = useRef<HTMLDivElement>(null);

  return (
    <button
      type="button"
      className={`${styles.button} ${isMobile ? styles.isMobile : ''} ${
        props.className ? props.className : ''
      }`}
      onClick={(event) => {
        rippleEffect(event, backgroundRef.current, props.onClick);
      }}
      title={props.title}
    >
      <div className={styles.borders}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles.holders}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles.shadow}></div>

      <div className={styles.content}>
        <div ref={backgroundRef} className={styles.background}>
          <ElementTrianglesBackground />
        </div>

        <span className={styles.text}>{props.text}</span>
      </div>
    </button>
  );
}
