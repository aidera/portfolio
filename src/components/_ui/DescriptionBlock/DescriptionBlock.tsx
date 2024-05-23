import classNames from 'classnames';
import styles from './DescriptionBlock.module.scss';

interface DescriptionBlockProps {
  title1: string;
  title1Type?: 'h1' | 'h2' | 'h3' | 'h4';
  title2: string;
  title2Type?: 'h1' | 'h2' | 'h3' | 'h4';
  classNames?: string;
}

export default function DescriptionBlock(props: DescriptionBlockProps) {
  return (
    <div className={classNames(styles.container, props.classNames)}>
      <div className={styles.borders}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={styles.content}>
        {!props.title1Type && <h1>{props.title1}</h1>}
        {props.title1Type === 'h1' && <h1>{props.title1}</h1>}
        {props.title1Type === 'h2' && <h2>{props.title1}</h2>}
        {props.title1Type === 'h3' && <h3>{props.title1}</h3>}
        {props.title1Type === 'h4' && <h4>{props.title1}</h4>}

        {!props.title2Type && <h2>{props.title2}</h2>}
        {props.title2Type === 'h1' && <h1>{props.title2}</h1>}
        {props.title2Type === 'h2' && <h2>{props.title2}</h2>}
        {props.title2Type === 'h3' && <h3>{props.title2}</h3>}
        {props.title2Type === 'h4' && <h4>{props.title2}</h4>}
      </div>
    </div>
  );
}
