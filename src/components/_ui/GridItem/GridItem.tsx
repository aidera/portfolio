import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { playSound } from '../../../utils/sounds';
import rippleEffect from '../../../utils/ripple-effect';
import { GridItemType } from '../../../types/grid-item.types';
import styles from './GridItem.module.scss';

interface GridItemProps {
  item: GridItemType;
  onClick?: (item: GridItemType) => void;
}

export default function GridItem(props: GridItemProps) {
  const rippleRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      playSound('hover');
    }
  }, [isActive]);

  const mouseOverHandler = () => {
    setIsActive(true);
  };

  return (
    <div
      className={classNames(styles.item, isActive && styles.active)}
      onClick={(event) => {
        rippleEffect(event, rippleRef.current, props.onClick);
      }}
      onMouseOver={mouseOverHandler}
      onMouseLeave={() => {
        setIsActive(false);
      }}
      onBlur={() => setIsActive(false)}
      title={props.item.title}
    >
      <div ref={rippleRef} className={styles.ripple}></div>

      <div className={styles.borders}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <img src={props.item.img} alt={props.item.title} />
    </div>
  );
}
