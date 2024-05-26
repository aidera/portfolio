import classNames from 'classnames';
import styles from './ChartConnector.module.scss';

interface ChartConnectorProps {
  width: number;
  height: number;
  flip: boolean;
  finalPoint: 'left' | 'right';
  className?: string;
}

export default function ChartConnector(props: ChartConnectorProps) {
  return (
    <div
      className={classNames(styles.container, props.className)}
      style={{ width: props.width + 'px', height: props.height + 'px' }}
    >
      <div
        className={styles.point}
        style={{
          top: !props.flip ? '-2px' : 'unset',
          bottom: props.flip ? '-2px' : 'unset',
          left: props.finalPoint === 'left' ? 26 : 0,
        }}
      ></div>
      <div
        className={styles.point}
        style={{
          top: props.flip ? '-2px' : 'unset',
          bottom: !props.flip ? '-2px' : 'unset',
          right: props.finalPoint === 'right' ? 26 : 0,
        }}
      ></div>

      <div
        className={styles.arrow}
        style={{
          transform: `rotate(${props.finalPoint === 'left' ? '180deg' : '0'})`,
          left: props.finalPoint === 'left' ? 0 : 'unset',
          right: props.finalPoint === 'right' ? 0 : 'unset',
          top:
            (props.flip && props.finalPoint === 'right') ||
            (!props.flip && props.finalPoint === 'left')
              ? -12
              : 'unset',
          bottom:
            (props.flip && props.finalPoint === 'left') ||
            (!props.flip && props.finalPoint === 'right')
              ? -12
              : 'unset',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 60" fill="none">
          <path
            d="M3 41.5V20.5H29.5V9.5L45.5 30.5L29.5 51V41.5H3Z"
            stroke="var(--primary-color)"
            strokeWidth="6"
          />
        </svg>
      </div>

      <div
        style={{
          width:
            props.width / 2 +
            1 -
            14 -
            (props.finalPoint === 'left' ? 24 : 0) +
            'px',
          height: props.height / 2 + 'px',
          borderTop: !props.flip ? '2px solid var(--primary-color)' : undefined,
          borderRight: '2px solid var(--primary-color)',
          borderBottom: props.flip
            ? '2px solid var(--primary-color)'
            : undefined,
          top: !props.flip ? 0 : 'unset',
          bottom: props.flip ? 0 : 'unset',
          left: 14 + (props.finalPoint === 'left' ? 24 : 0),
        }}
      ></div>

      <div
        style={{
          width:
            props.width / 2 +
            1 -
            14 -
            (props.finalPoint === 'right' ? 24 : 0) +
            'px',
          height: props.height / 2 + 'px',
          borderTop: props.flip ? '2px solid var(--primary-color)' : undefined,

          borderBottom: !props.flip
            ? '2px solid var(--primary-color)'
            : undefined,
          borderLeft: '2px solid var(--primary-color)',
          top: props.flip ? 0 : 'unset',
          bottom: !props.flip ? 0 : 'unset',
          right: 14 + (props.finalPoint === 'right' ? 24 : 0),
        }}
      ></div>
    </div>
  );
}
