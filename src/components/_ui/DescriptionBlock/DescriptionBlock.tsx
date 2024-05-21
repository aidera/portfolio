import styles from './DescriptionBlock.module.scss';

interface DescriptionBlockProps {
  title1: string;
  title2: string;
}

export default function DescriptionBlock(props: DescriptionBlockProps) {
  return (
    <div className={styles.container}>
      <div className={styles.borders}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles.content}>
        <h1>{props.title1}</h1>
        <h2>{props.title2}</h2>
      </div>
    </div>
  );
}
