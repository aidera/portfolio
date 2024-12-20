import { useEffect, useRef } from 'react';
import styles from './AvatarCard.module.scss';
import { isMobileDevice } from '../../../utils/client';
import useWindowDimensions from '../../../utils/hooks/useWindowDimensions';
import CircledLinesEqualizer, {
  CircledLinesEqualizerRef,
} from '../CircledLinesEqualizer/CircledLinesEqualizer';
import { baseRoute } from '../../../utils/env';

export default function AvatarCard() {
  const innerContainerRef = useRef<HTMLDivElement>(null);
  const equalizerRef = useRef<CircledLinesEqualizerRef>(null);
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    const rotateContainer = (event: MouseEvent) => {
      if (isMobileDevice()) return;

      const { clientX, clientY } = event;

      if (innerContainerRef.current) {
        const multiplier = 5;
        const { left, top, width, height } =
          innerContainerRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;
        const angleX =
          windowWidth <= 1000 ? 0 : (deltaY / centerY) * multiplier;
        const angleY = (deltaX / centerX) * multiplier;
        innerContainerRef.current.style.transition = 'transform 0s';
        innerContainerRef.current.style.transform = `perspective(1000px) rotateX(${-angleX}deg) rotateY(${angleY}deg)`;
      }
    };

    const resetRotation = () => {
      if (innerContainerRef.current) {
        innerContainerRef.current.style.transition = 'transform 0.5s ease-out';
        innerContainerRef.current.style.transform =
          'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    };

    document.addEventListener('mousemove', rotateContainer);
    document.addEventListener('mouseleave', resetRotation);
    return () => {
      document.removeEventListener('mousemove', rotateContainer);
      document.removeEventListener('mouseleave', resetRotation);
    };
  }, [windowWidth]);

  const onAvatarClick = () => {
    equalizerRef.current?.play();
  };

  return (
    <div className={styles.container}>
      <div className={styles['avatar-container']}>
        <div ref={innerContainerRef} className={styles['inner-container']}>
          <div className={styles.orbit1}></div>

          <div className={styles.equalizer1}>
            <CircledLinesEqualizer ref={equalizerRef} />
          </div>

          <div className={styles.orbit3} onClick={onAvatarClick}>
            <img
              className={styles['avatar-image']}
              draggable={false}
              src={`${baseRoute}assets/images/avatar.jpg`}
              alt={'Avatar'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
