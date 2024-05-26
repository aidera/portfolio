import classNames from 'classnames';
import styles from './SimpleBackground.module.scss';

interface SimpleBackgroundProps {
  backgroundImage?: string;
}

export default function SimpleBackground(props: SimpleBackgroundProps) {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g clipPath="url(#clip0_126_346)">
          <rect width="1920" height="1080" fill="#E3E3E3" fillOpacity="0.8" />
          <path
            d="M-189.178 1283L385 406.059L-189.178 -453L-741 406.059L-189.178 1283Z"
            fill="rgba(230,230,230,0.5)"
            className={classNames(styles.el, styles.el1)}
          />
          <path
            d="M936.822 1283L1511 406.059L936.822 -453L385 406.059L936.822 1283Z"
            fill="rgba(70,70,70,0.25)"
            className={classNames(styles.el, styles.el2)}
          />
          <path
            d="M2062.82 1283L2637 406.059L2062.82 -453L1511 406.059L2062.82 1283Z"
            fill="rgba(230,230,230,0.5)"
            className={classNames(styles.el, styles.el3)}
          />

          <path
            d="M403.822 1093L978 216.059L403.822 -643L-148 216.059L403.822 1093Z"
            fill="rgba(230,230,230,0.5)"
            className={classNames(styles.el, styles.el4)}
          />
          <path
            d="M1529.82 1093L2104 216.059L1529.82 -643L978 216.059L1529.82 1093Z"
            fill="rgba(70,70,70,0.25)"
            className={classNames(styles.el, styles.el5)}
          />
          <path
            d="M1088.9 2210.43L1538.5 1106.5L1145.5 481L568.019 1314.77L1088.9 2210.43Z"
            fill="rgba(230,230,230,0.5)"
            className={classNames(styles.el, styles.el6)}
          />
          <path
            d="M343.486 2150.2L819.5 1096.5L385.001 406L-63 1090L343.486 2150.2Z"
            fill="rgba(70,70,70,0.15)"
            className={classNames(styles.el, styles.el7)}
          />
        </g>
        <defs>
          <clipPath id="clip0_126_346">
            <rect width="1920" height="1080" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
