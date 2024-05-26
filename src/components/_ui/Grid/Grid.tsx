import { useEffect, useMemo, useRef, useState } from 'react';
import GridItem from '../GridItem/GridItem';
import { GridItemType } from '../../../types/grid-item.types';
import styles from './Grid.module.scss';

interface GridProps {
  items: GridItemType[];
}

export default function Grid(props: GridProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [peak, setPeak] = useState(3);

  const step = 30;

  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        const gridWidth = gridRef.current.getBoundingClientRect().width;
        const itemWidth = 130;
        const rowGap = 16;
        const itemsPerRow = 3;
        const totalRowWidth =
          itemWidth * itemsPerRow + rowGap * (itemsPerRow - 1);
        let newPeak = Math.floor((gridWidth - totalRowWidth) / step);
        if (totalRowWidth >= gridWidth) {
          newPeak = 1;
        }
        setPeak(newPeak);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const chunkArray = (arr: any[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const rows = chunkArray(props.items, 3);

  const calculateMarginLeft = (index: number) => {
    if (window.innerWidth < 1000) return 0;
    const positionInWave = index % peak;
    return positionInWave * step;
  };

  const drawItems = useMemo(() => {
    if (window.innerWidth >= 1000) {
      return rows.map((row, index) => {
        const marginLeft = calculateMarginLeft(index);
        return (
          <div className={styles.row} style={{ marginLeft: `${marginLeft}px` }}>
            {row.map((item) => (
              <GridItem item={item} />
            ))}
          </div>
        );
      });
    } else {
      return props.items.map((item) => <GridItem item={item} />);
    }
  }, [peak]);

  return (
    <div ref={gridRef} className={styles.grid}>
      {drawItems}
    </div>
  );
}
