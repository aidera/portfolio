import { HTMLAttributes, ReactNode } from 'react';
import styles from './IconButton.module.scss';
import { isMobileDevice } from '../../../utils/client';
import rippleEffect from '../../../utils/ripple-effect';


interface IconButtonProps extends HTMLAttributes<HTMLElement> {
  icon: ReactNode;
  title?: string;
}

export default function IconButton(props: IconButtonProps) {
  const isMobile = isMobileDevice();

  return (
    <button
      type="button"
      className={`${styles.button} ${isMobile ? styles.isMobile : ''} ${
        props.className ? props.className : ''
      }`}
      onClick={(event) => {
        rippleEffect(event, event.currentTarget, props.onClick);
      }}
      title={props.title}
    >
      {props.icon}
    </button>
  );
}
