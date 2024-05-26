import { useEffect, useRef } from 'react';
import styles from './MainBackground.module.scss';
import { isMobileDevice } from '../../../utils/client';

export default function MainBackground() {
  const animationContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const rotateContainer = (event: MouseEvent) => {
//       if (isMobileDevice()) return;

//       const { clientX, clientY } = event;

//       if (animationContainerRef.current) {
//         const multiplier = 1.5;
//         const { left, top, width, height } =
//           animationContainerRef.current.getBoundingClientRect();
//         const centerX = left + width / 2;
//         const centerY = top + height / 2;
//         const deltaX = clientX - centerX;
//         const deltaY = clientY - centerY;
//         const angleX = (deltaY / centerY) * multiplier;
//         const angleY = (deltaX / centerX) * multiplier;
//         animationContainerRef.current.style.transition = 'transform 0s';
//         animationContainerRef.current.style.transform = `perspective(1000px) rotateX(${-angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
//       }
//     };

//     const resetRotation = () => {
//       if (animationContainerRef.current) {
//         animationContainerRef.current.style.transition = 'transform 0.5s ease-out';
//         animationContainerRef.current.style.transform =
//           'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.1)';
//       }
//     };

//     window.addEventListener('mousemove', rotateContainer);
//     document.addEventListener('mouseleave', resetRotation);
//     return () => {
//       window.removeEventListener('mousemove', rotateContainer);
//       document.removeEventListener('mouseleave', resetRotation);
//     };
//   }, []);

useEffect(() => {
    const translateContainerXY = (event: MouseEvent) => {
      if (isMobileDevice()) return;
  
      const { clientX, clientY } = event;
  
      if (animationContainerRef.current) {
        const multiplier = 10;
        const { left, top, width, height } =
          animationContainerRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const deltaX = clientX - centerX;
        const deltaY = clientY - centerY;
        const translationX = -(deltaX / centerX) * multiplier;
        const translationY = -(deltaY / centerY) * multiplier;
        animationContainerRef.current.style.transition = 'transform 0s';
        animationContainerRef.current.style.transform = `translateX(${translationX}px) translateY(${translationY}px) scale(1.1)`;
      }
    };
  
    const resetTranslation = () => {
      if (animationContainerRef.current) {
        animationContainerRef.current.style.transition = 'transform 0.5s ease-out';
        animationContainerRef.current.style.transform = 'translateX(0px) translateY(0px) scale(1.1)';
      }
    };
  
    window.addEventListener('mousemove', translateContainerXY);
    document.addEventListener('mouseleave', resetTranslation);
    return () => {
      window.removeEventListener('mousemove', translateContainerXY);
      document.removeEventListener('mouseleave', resetTranslation);
    };
  }, []);
  
  

  return (
    <div className={styles.container}>
      <div className={styles['inner-container']}>
        <div className={styles['animation-container']} ref={animationContainerRef}>
          <div className={styles.gradient1}></div>

          <div className={styles.linelight + ' ' + styles.linelight1}></div>
          <div className={styles.linelight + ' ' + styles.linelight2}></div>
          <div className={styles.linelight + ' ' + styles.linelight3}></div>
          <div className={styles.linelight + ' ' + styles.linelight4}></div>
          <div className={styles.linelight + ' ' + styles.linelight5}></div>
          <div className={styles.linelight + ' ' + styles.linelight6}></div>
          <div className={styles.linelight + ' ' + styles.linelight7}></div>
          <div className={styles.linelight + ' ' + styles.linelight8}></div>

          <div className={styles.linelight + ' ' + styles.linelight9}></div>
          <div className={styles.linelight + ' ' + styles.linelight10}></div>

          <div className={styles.linelight + ' ' + styles.linelight11}></div>

          <div className={styles.spotlight1}></div>
          <div className={styles.spotlight2}></div>
        </div>
      </div>
    </div>
  );
}
