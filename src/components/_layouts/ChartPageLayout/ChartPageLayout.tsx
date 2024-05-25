import { PropsWithChildren, useRef, useState } from 'react';
import SimpleBackground from '../../SimpleBackground/SimpleBackground';
import ChartTitle from '../../_ui/ChartTitle/ChartTitle';
import BackToMenuButton from '../../BackToMenuButton/BackToMenuButton';
import { isMobileDevice } from '../../../utils/client';
import styles from './ChartPageLayout.module.scss';

interface ChartPageLayoutInterface extends PropsWithChildren {
  title: string;
}

export default function ChartPageLayout(props: ChartPageLayoutInterface) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const startDragging = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobileDevice()) return;

    setIsDragging(true);
    setStartPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const drag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const dx = e.clientX - startPosition.x;
      const dy = e.clientY - startPosition.y;

      if (contentRef.current) {
        contentRef.current.scrollLeft -= dx;
        contentRef.current.scrollTop -= dy;
      }

      setStartPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <main className={styles.container}>
      <SimpleBackground />

      <div
        ref={contentRef}
        className={styles.content}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        onMouseDown={startDragging}
        onMouseMove={drag}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        <div className={styles['content-inner-wrapper']}>
          <div className={styles.title}>
            <ChartTitle>{props.title}</ChartTitle>
          </div>
          <div className={styles.children}>{props.children}</div>
        </div>
      </div>

      <div className={styles.footer}>
        <BackToMenuButton />
      </div>
    </main>
  );
}
