import { HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import styles from './FilledButton.module.scss';
import rippleEffect from '../../../utils/ripple-effect';
import ElementTrianglesBackground from '../ElementTrianglesBackground/ElementTrianglesBackground';
import classNames from 'classnames';
import { playSound } from '../../../utils/sounds';
import { Link } from 'react-router-dom';

interface FilledButtonProps extends HTMLAttributes<HTMLElement> {
  text: string;
  icon?: ReactNode;
  title?: string;
  link?: string;
}

export default function FilledButton(props: FilledButtonProps) {
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
            <ElementTrianglesBackground active={isActive} />
          </div>

          <span className={styles.text}>{props.text}</span>
        </div>
      </>
    );
  };

  if (props.link) {
    return (
      <Link
        to={props.link}
        draggable={false}
        relative="path"
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
        title={props.title}
      >
        {innerContent()}
      </Link>
    );
  }

  return (
    <button
      draggable={false}
      type="button"
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
      title={props.title}
    >
      {innerContent()}
    </button>
  );
}
