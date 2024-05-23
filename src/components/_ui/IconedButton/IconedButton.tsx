import { ReactNode, useEffect, useRef, useState } from 'react';
import styles from './IconedButton.module.scss';
import { playSound } from '../../../utils/sounds';
import classNames from 'classnames';
import rippleEffect from '../../../utils/ripple-effect';
import { Link } from 'react-router-dom';

interface IconedButtonProps {
  text: string;
  icon: ReactNode;
  className?: string;
  onClick?: () => void;
  link?: string;
}

export default function IconedButton(props: IconedButtonProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      playSound('hover');
    }
  }, [isActive]);

  const mouseOverHandler = () => {
    setIsActive(true);
  };

  const innerContent = () => {
    return (
      <>
        <div ref={backgroundRef} className={styles.background}></div>

        <div className={styles.borders}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={styles.content}>
          <div className={styles.icon}>{props.icon}</div>
          <span className={styles.text}>{props.text}</span>
        </div>
      </>
    );
  };

  if (props.link) {
    return (
      <Link
        to={props.link}
        className={classNames(
          styles.button,
          isActive && styles.active,
          props.className
        )}
        onClick={(event) => {
          rippleEffect(event, backgroundRef.current, props.onClick);
        }}
        onMouseOver={mouseOverHandler}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        onBlur={() => setIsActive(false)}
      >
        {innerContent()}
      </Link>
    );
  }

  return (
    <button
      className={classNames(
        styles.button,
        isActive && styles.active,
        props.className
      )}
      onClick={(event) => {
        rippleEffect(event, backgroundRef.current, props.onClick);
      }}
      onMouseOver={mouseOverHandler}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      onBlur={() => setIsActive(false)}
    >
      {innerContent()}
    </button>
  );
}
