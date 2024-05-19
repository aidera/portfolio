import React, { useRef, useEffect } from 'react';
import styles from './ProgressBar.module.scss';

export default function ProgressBar() {
  const group1 = useRef<SVGGElement>(null);
  const group2 = useRef<SVGGElement>(null);
  const group3 = useRef<SVGGElement>(null);
  const group4 = useRef<SVGGElement>(null);

  useEffect(() => {
    animateRects(group1, false);
    animateRects(group2, true);
    animateRects(group3, false);
    animateRects(group4, true);

    setInterval(() => {
      animateRects(group1, false);
      animateRects(group2, true);
      animateRects(group3, false);
      animateRects(group4, true);
    }, 10000);
  }, []);

  const animateRects = (
    groupRef: React.RefObject<SVGGElement>,
    inverse = false
  ) => {
    if (!groupRef.current) return;

    const animationTime = 1000;
    const pauseTime = 500;
    const inactiveColor = 'rgba(255,255,255,0.2)';
    const activeColor = 'rgba(255,255,255,1)';
    const rects = groupRef.current.children;
    const totalRects = rects.length;

    // Animate to 100
    for (let i = 0; i < totalRects; i++) {
      setTimeout(
        () => {
          const index = inverse ? totalRects - 1 - i : i;
          if (i < totalRects) {
            (rects[index] as HTMLElement).style.fill = activeColor;
          }
        },
        (animationTime / totalRects) * i
      );
    }

    // Animate back to 0
    setTimeout(() => {
      for (let i = 0; i < totalRects; i++) {
        setTimeout(
          () => {
            const index = inverse ? i : totalRects - 1 - i;
            (rects[index] as HTMLElement).style.fill = inactiveColor;
          },
          (animationTime / totalRects) * i
        );
      }
    }, animationTime + pauseTime);
  };

  return (
    <svg
      className={styles.svg}
      viewBox="0 0 646 646"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g ref={group3}>
        <rect
          x="618.834"
          y="329.191"
          width="14.0767"
          height="2.18525"
          transform="rotate(1.88357 618.834 329.191)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="618.834"
          y="336.191"
          width="14.0767"
          height="3.07204"
          transform="rotate(1.88357 618.834 336.191)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="618.611"
          y="344"
          width="13.9"
          height="3.10267"
          transform="rotate(4.29372 618.611 344)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="618.004"
          y="351.705"
          width="13.9351"
          height="2.94942"
          transform="rotate(6 618.004 351.705)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="617.154"
          y="359.258"
          width="13.924"
          height="3.0666"
          transform="rotate(8 617.154 359.258)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="615.982"
          y="367.172"
          width="13.8953"
          height="2.92779"
          transform="rotate(9 615.982 367.172)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="614.57"
          y="374.662"
          width="14.0476"
          height="3.03709"
          transform="rotate(11 614.57 374.662)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="613.109"
          y="382.246"
          width="13.9555"
          height="2.94452"
          transform="rotate(13 613.109 382.246)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="611.285"
          y="389.902"
          width="13.9769"
          height="3.05555"
          transform="rotate(14 611.285 389.902)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="609.328"
          y="397.404"
          width="13.8692"
          height="2.8911"
          transform="rotate(16 609.328 397.404)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="607.164"
          y="404.787"
          width="13.9259"
          height="2.95626"
          transform="rotate(18 607.164 404.787)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="604.688"
          y="412.242"
          width="13.9635"
          height="2.93206"
          transform="rotate(19 604.688 412.242)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="602.148"
          y="419.455"
          width="13.9521"
          height="3.01716"
          transform="rotate(21 602.148 419.455)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="599.316"
          y="426.869"
          width="13.954"
          height="2.94588"
          transform="rotate(22 599.316 426.869)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="596.34"
          y="434.104"
          width="13.9593"
          height="3.02142"
          transform="rotate(23 596.34 434.104)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="593.225"
          y="441.127"
          width="13.9753"
          height="3.03199"
          transform="rotate(25 593.225 441.127)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="589.859"
          y="448.303"
          width="13.9362"
          height="2.93376"
          transform="rotate(26 589.859 448.303)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="586.334"
          y="455.283"
          width="13.897"
          height="3.0491"
          transform="rotate(27 586.334 455.283)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="582.701"
          y="462.039"
          width="13.9967"
          height="3.15061"
          transform="rotate(29 582.701 462.039)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="578.955"
          y="468.746"
          width="13.9724"
          height="3.08924"
          transform="rotate(31 578.955 468.746)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="574.904"
          y="475.553"
          width="13.9562"
          height="2.9719"
          transform="rotate(32 574.904 475.553)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="570.695"
          y="482.211"
          width="13.9692"
          height="2.96934"
          transform="rotate(33 570.695 482.211)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="566.324"
          y="488.672"
          width="14.0322"
          height="3.10085"
          transform="rotate(34 566.324 488.672)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="561.957"
          y="495.035"
          width="13.9915"
          height="3.00075"
          transform="rotate(36 561.957 495.035)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="557.324"
          y="501.416"
          width="13.9398"
          height="2.95851"
          transform="rotate(37 557.324 501.416)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="552.508"
          y="507.619"
          width="13.957"
          height="3.08469"
          transform="rotate(38 552.508 507.619)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="547.619"
          y="513.672"
          width="13.9804"
          height="2.91794"
          transform="rotate(40 547.619 513.672)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="542.635"
          y="519.52"
          width="13.9521"
          height="3.12745"
          transform="rotate(41 542.635 519.52)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="537.459"
          y="525.355"
          width="13.9458"
          height="2.97117"
          transform="rotate(43 537.459 525.355)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="532.193"
          y="530.992"
          width="13.8559"
          height="3.12647"
          transform="rotate(44 532.193 530.992)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="526.682"
          y="536.565"
          width="13.9954"
          height="2.97764"
          transform="rotate(46 526.682 536.565)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="521.031"
          y="542.009"
          width="13.9569"
          height="3.0403"
          transform="rotate(47 521.031 542.009)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="515.037"
          y="547.201"
          width="14.1815"
          height="3.00264"
          transform="rotate(48 515.037 547.201)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="509.426"
          y="552.422"
          width="13.9271"
          height="3.01292"
          transform="rotate(50 509.426 552.422)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="503.365"
          y="557.42"
          width="13.9855"
          height="3.0182"
          transform="rotate(51 503.365 557.42)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="497.324"
          y="562.219"
          width="13.9584"
          height="2.97322"
          transform="rotate(53 497.324 562.219)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="491.207"
          y="566.839"
          width="13.945"
          height="3.03948"
          transform="rotate(55 491.207 566.839)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="484.781"
          y="571.371"
          width="13.9496"
          height="3.0425"
          transform="rotate(56 484.781 571.371)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="478.338"
          y="575.673"
          width="13.904"
          height="2.94847"
          transform="rotate(58 478.338 575.673)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="471.674"
          y="579.91"
          width="13.9872"
          height="2.92423"
          transform="rotate(59 471.674 579.91)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="464.896"
          y="583.82"
          width="14.0287"
          height="3.01915"
          transform="rotate(60 464.896 583.82)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="458.119"
          y="587.586"
          width="13.9861"
          height="2.97598"
          transform="rotate(62 458.119 587.586)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="451.307"
          y="591.171"
          width="14.0014"
          height="2.94926"
          transform="rotate(64 451.307 591.171)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="444.219"
          y="594.615"
          width="13.9288"
          height="2.90761"
          transform="rotate(65 444.219 594.615)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="437.178"
          y="597.799"
          width="13.9534"
          height="2.95168"
          transform="rotate(67 437.178 597.799)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="429.961"
          y="600.844"
          width="13.8444"
          height="2.97436"
          transform="rotate(68 429.961 600.844)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="422.742"
          y="603.623"
          width="13.9272"
          height="2.94135"
          transform="rotate(70 422.742 603.623)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="415.514"
          y="606.143"
          width="13.9648"
          height="3.02928"
          transform="rotate(72 415.514 606.143)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="407.951"
          y="608.563"
          width="13.9351"
          height="2.91734"
          transform="rotate(73 407.951 608.563)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="400.619"
          y="610.674"
          width="14.003"
          height="2.98424"
          transform="rotate(75 400.619 610.674)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="393.068"
          y="612.594"
          width="13.9663"
          height="2.89432"
          transform="rotate(77 393.068 612.594)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="385.398"
          y="614.33"
          width="13.9079"
          height="2.97727"
          transform="rotate(78 385.398 614.33)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="377.814"
          y="615.812"
          width="13.955"
          height="2.96171"
          transform="rotate(80 377.814 615.812)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="370.244"
          y="617.003"
          width="13.955"
          height="3.0414"
          transform="rotate(82 370.244 617.003)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="362.344"
          y="618.176"
          width="13.8845"
          height="2.8425"
          transform="rotate(83 362.344 618.176)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="354.754"
          y="618.894"
          width="13.9606"
          height="2.88506"
          transform="rotate(85 354.754 618.894)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="347.064"
          y="619.512"
          width="13.9508"
          height="2.9042"
          transform="rotate(87 347.064 619.512)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="339.234"
          y="619.88"
          width="13.9711"
          height="2.95529"
          transform="rotate(88 339.234 619.88)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="332"
          y="620"
          width="14"
          height="2"
          transform="rotate(90 332 620)"
          fill="rgba(255,255,255,0.2)"
        />
      </g>

      <g ref={group4}>
        <rect
          width="14.0767"
          height="2.18525"
          transform="matrix(-0.99946 0.0328685 0.0328685 0.99946 27.166 329)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.0767"
          height="3.07204"
          transform="matrix(-0.99946 0.0328685 0.0328685 0.99946 27.166 336)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9"
          height="3.10267"
          transform="matrix(-0.997193 0.0748695 0.0748695 0.997193 27.3887 343.809)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9351"
          height="2.94942"
          transform="matrix(-0.994522 0.104528 0.104528 0.994522 27.9961 351.514)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.924"
          height="3.0666"
          transform="matrix(-0.990268 0.139173 0.139173 0.990268 28.8457 359.066)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.8953"
          height="2.92779"
          transform="matrix(-0.987688 0.156434 0.156434 0.987688 30.0176 366.98)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.0476"
          height="3.03709"
          transform="matrix(-0.981627 0.190809 0.190809 0.981627 31.4297 374.471)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9555"
          height="2.94452"
          transform="matrix(-0.97437 0.224951 0.224951 0.97437 32.8906 382.055)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9769"
          height="3.05555"
          transform="matrix(-0.970296 0.241922 0.241922 0.970296 34.7148 389.711)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.8692"
          height="2.8911"
          transform="matrix(-0.961262 0.275637 0.275637 0.961262 36.6719 397.213)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9259"
          height="2.95626"
          transform="matrix(-0.951056 0.309017 0.309017 0.951056 38.8359 404.596)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9635"
          height="2.93206"
          transform="matrix(-0.945518 0.325568 0.325568 0.945518 41.3125 412.051)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9521"
          height="3.01716"
          transform="matrix(-0.93358 0.358368 0.358368 0.93358 43.8516 419.264)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9541"
          height="2.94588"
          transform="matrix(-0.927184 0.374607 0.374607 0.927184 46.6836 426.678)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9593"
          height="3.02142"
          transform="matrix(-0.920505 0.390731 0.390731 0.920505 49.6602 433.912)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9753"
          height="3.03199"
          transform="matrix(-0.906308 0.422618 0.422618 0.906308 52.7754 440.936)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9362"
          height="2.93376"
          transform="matrix(-0.898794 0.438371 0.438371 0.898794 56.1406 448.111)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.897"
          height="3.0491"
          transform="matrix(-0.891006 0.45399 0.45399 0.891006 59.666 455.092)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9967"
          height="3.15061"
          transform="matrix(-0.87462 0.48481 0.48481 0.87462 63.2988 461.848)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9724"
          height="3.08924"
          transform="matrix(-0.857167 0.515038 0.515038 0.857167 67.0449 468.555)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9562"
          height="2.9719"
          transform="matrix(-0.848048 0.529919 0.529919 0.848048 71.0957 475.361)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9692"
          height="2.96934"
          transform="matrix(-0.83867 0.544639 0.544639 0.83867 75.3047 482.02)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.0322"
          height="3.10085"
          transform="matrix(-0.829037 0.559193 0.559193 0.829037 79.6758 488.48)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9915"
          height="3.00075"
          transform="matrix(-0.809017 0.587785 0.587785 0.809017 84.043 494.844)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9398"
          height="2.95851"
          transform="matrix(-0.798635 0.601815 0.601815 0.798635 88.6758 501.225)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.957"
          height="3.08469"
          transform="matrix(-0.788011 0.615661 0.615661 0.788011 93.4922 507.428)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9804"
          height="2.91794"
          transform="matrix(-0.766044 0.642788 0.642788 0.766044 98.3809 513.48)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9521"
          height="3.12745"
          transform="matrix(-0.754709 0.656059 0.656059 0.754709 103.365 519.328)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9458"
          height="2.97117"
          transform="matrix(-0.731354 0.681998 0.681998 0.731354 108.541 525.164)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.8559"
          height="3.12647"
          transform="matrix(-0.71934 0.694658 0.694658 0.71934 113.807 530.801)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9954"
          height="2.97765"
          transform="matrix(-0.694658 0.71934 0.71934 0.694658 119.318 536.374)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9569"
          height="3.0403"
          transform="matrix(-0.681998 0.731354 0.731354 0.681998 124.969 541.817)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.1815"
          height="3.00264"
          transform="matrix(-0.669131 0.743145 0.743145 0.669131 130.963 547.01)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9271"
          height="3.01292"
          transform="matrix(-0.642788 0.766044 0.766044 0.642788 136.574 552.23)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9855"
          height="3.01821"
          transform="matrix(-0.62932 0.777146 0.777146 0.62932 142.635 557.229)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9584"
          height="2.97322"
          transform="matrix(-0.601815 0.798635 0.798635 0.601815 148.676 562.027)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.945"
          height="3.03948"
          transform="matrix(-0.573576 0.819152 0.819152 0.573576 154.793 566.647)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9496"
          height="3.0425"
          transform="matrix(-0.559193 0.829037 0.829037 0.559193 161.219 571.18)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.904"
          height="2.94847"
          transform="matrix(-0.529919 0.848048 0.848048 0.529919 167.662 575.481)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9872"
          height="2.92423"
          transform="matrix(-0.515038 0.857167 0.857167 0.515038 174.326 579.719)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.0287"
          height="3.01915"
          transform="matrix(-0.5 0.866025 0.866025 0.5 181.104 583.629)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9861"
          height="2.97598"
          transform="matrix(-0.469472 0.882948 0.882948 0.469472 187.881 587.395)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.0014"
          height="2.94926"
          transform="matrix(-0.438371 0.898794 0.898794 0.438371 194.693 590.979)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9288"
          height="2.90761"
          transform="matrix(-0.422618 0.906308 0.906308 0.422618 201.781 594.424)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9534"
          height="2.95168"
          transform="matrix(-0.390731 0.920505 0.920505 0.390731 208.822 597.607)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.8444"
          height="2.97436"
          transform="matrix(-0.374607 0.927184 0.927184 0.374607 216.039 600.652)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9272"
          height="2.94135"
          transform="matrix(-0.34202 0.939693 0.939693 0.34202 223.258 603.432)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9648"
          height="3.02928"
          transform="matrix(-0.309017 0.951056 0.951056 0.309017 230.486 605.951)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9351"
          height="2.91734"
          transform="matrix(-0.292372 0.956305 0.956305 0.292372 238.049 608.372)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.003"
          height="2.98424"
          transform="matrix(-0.258819 0.965926 0.965926 0.258819 245.381 610.482)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9663"
          height="2.89432"
          transform="matrix(-0.224951 0.97437 0.97437 0.224951 252.932 612.402)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9079"
          height="2.97727"
          transform="matrix(-0.207912 0.978148 0.978148 0.207912 260.602 614.139)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.955"
          height="2.96171"
          transform="matrix(-0.173648 0.984808 0.984808 0.173648 268.186 615.62)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.955"
          height="3.0414"
          transform="matrix(-0.139173 0.990268 0.990268 0.139173 275.756 616.812)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.8845"
          height="2.8425"
          transform="matrix(-0.121869 0.992546 0.992546 0.121869 283.656 617.984)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9606"
          height="2.88506"
          transform="matrix(-0.0871557 0.996195 0.996195 0.0871557 291.246 618.702)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9508"
          height="2.9042"
          transform="matrix(-0.052336 0.99863 0.99863 0.052336 298.936 619.32)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9711"
          height="2.95529"
          transform="matrix(-0.0348995 0.999391 0.999391 0.0348995 306.766 619.688)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14"
          height="2"
          transform="matrix(0 1 1 0 314 619.809)"
          fill="rgba(255,255,255,0.2)"
        />
      </g>

      <g ref={group1}>
        <rect
          x="27.0684"
          y="317"
          width="14.0767"
          height="2.18525"
          transform="rotate(-178.116 27.0684 317)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="27.0684"
          y="310"
          width="14.0767"
          height="3.07204"
          transform="rotate(-178.116 27.0684 310)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="27.291"
          y="302.191"
          width="13.9"
          height="3.10267"
          transform="rotate(-175.706 27.291 302.191)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="27.8984"
          y="294.486"
          width="13.9351"
          height="2.94942"
          transform="rotate(-174 27.8984 294.486)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="28.748"
          y="286.934"
          width="13.924"
          height="3.0666"
          transform="rotate(-172 28.748 286.934)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="29.9199"
          y="279.02"
          width="13.8953"
          height="2.92779"
          transform="rotate(-171 29.9199 279.02)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="31.332"
          y="271.529"
          width="14.0476"
          height="3.03709"
          transform="rotate(-169 31.332 271.529)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="32.793"
          y="263.945"
          width="13.9555"
          height="2.94452"
          transform="rotate(-167 32.793 263.945)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="34.6172"
          y="256.289"
          width="13.9769"
          height="3.05555"
          transform="rotate(-166 34.6172 256.289)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="36.5742"
          y="248.787"
          width="13.8692"
          height="2.8911"
          transform="rotate(-164 36.5742 248.787)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="38.7383"
          y="241.404"
          width="13.9259"
          height="2.95626"
          transform="rotate(-162 38.7383 241.404)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="41.2148"
          y="233.949"
          width="13.9635"
          height="2.93206"
          transform="rotate(-161 41.2148 233.949)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="43.7539"
          y="226.736"
          width="13.9521"
          height="3.01716"
          transform="rotate(-159 43.7539 226.736)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="46.5859"
          y="219.322"
          width="13.954"
          height="2.94588"
          transform="rotate(-158 46.5859 219.322)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="49.5625"
          y="212.088"
          width="13.9593"
          height="3.02142"
          transform="rotate(-157 49.5625 212.088)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="52.6777"
          y="205.064"
          width="13.9753"
          height="3.03199"
          transform="rotate(-155 52.6777 205.064)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="56.043"
          y="197.889"
          width="13.9362"
          height="2.93376"
          transform="rotate(-154 56.043 197.889)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="59.5684"
          y="190.908"
          width="13.897"
          height="3.0491"
          transform="rotate(-153 59.5684 190.908)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="63.2012"
          y="184.152"
          width="13.9967"
          height="3.15061"
          transform="rotate(-151 63.2012 184.152)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="66.9473"
          y="177.445"
          width="13.9724"
          height="3.08924"
          transform="rotate(-149 66.9473 177.445)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="70.998"
          y="170.639"
          width="13.9562"
          height="2.9719"
          transform="rotate(-148 70.998 170.639)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="75.207"
          y="163.98"
          width="13.9692"
          height="2.96934"
          transform="rotate(-147 75.207 163.98)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="79.5781"
          y="157.52"
          width="14.0322"
          height="3.10085"
          transform="rotate(-146 79.5781 157.52)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="83.9453"
          y="151.156"
          width="13.9915"
          height="3.00075"
          transform="rotate(-144 83.9453 151.156)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="88.5781"
          y="144.775"
          width="13.9398"
          height="2.95851"
          transform="rotate(-143 88.5781 144.775)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="93.3945"
          y="138.572"
          width="13.957"
          height="3.08469"
          transform="rotate(-142 93.3945 138.572)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="98.2832"
          y="132.52"
          width="13.9804"
          height="2.91794"
          transform="rotate(-140 98.2832 132.52)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="103.268"
          y="126.672"
          width="13.9521"
          height="3.12745"
          transform="rotate(-139 103.268 126.672)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="108.443"
          y="120.836"
          width="13.9458"
          height="2.97117"
          transform="rotate(-137 108.443 120.836)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="113.709"
          y="115.199"
          width="13.8559"
          height="3.12647"
          transform="rotate(-136 113.709 115.199)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="119.221"
          y="109.625"
          width="13.9954"
          height="2.97764"
          transform="rotate(-134 119.221 109.625)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="124.871"
          y="104.184"
          width="13.9569"
          height="3.0403"
          transform="rotate(-133 124.871 104.184)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="130.865"
          y="98.9902"
          width="14.1815"
          height="3.00264"
          transform="rotate(-132 130.865 98.9902)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="136.477"
          y="93.7695"
          width="13.9271"
          height="3.01292"
          transform="rotate(-130 136.477 93.7695)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="142.537"
          y="88.7715"
          width="13.9855"
          height="3.0182"
          transform="rotate(-129 142.537 88.7715)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="148.578"
          y="83.9727"
          width="13.9584"
          height="2.97322"
          transform="rotate(-127 148.578 83.9727)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="154.695"
          y="79.3516"
          width="13.945"
          height="3.03948"
          transform="rotate(-125 154.695 79.3516)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="161.121"
          y="74.8203"
          width="13.9496"
          height="3.0425"
          transform="rotate(-124 161.121 74.8203)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="167.564"
          y="70.5195"
          width="13.904"
          height="2.94847"
          transform="rotate(-122 167.564 70.5195)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="174.229"
          y="66.2812"
          width="13.9872"
          height="2.92423"
          transform="rotate(-121 174.229 66.2812)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="181.006"
          y="62.3711"
          width="14.0287"
          height="3.01915"
          transform="rotate(-120 181.006 62.3711)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="187.783"
          y="58.6055"
          width="13.9861"
          height="2.97598"
          transform="rotate(-118 187.783 58.6055)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="194.596"
          y="55.0195"
          width="14.0014"
          height="2.94926"
          transform="rotate(-116 194.596 55.0195)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="201.684"
          y="51.5762"
          width="13.9288"
          height="2.90761"
          transform="rotate(-115 201.684 51.5762)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="208.725"
          y="48.3926"
          width="13.9534"
          height="2.95168"
          transform="rotate(-113 208.725 48.3926)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="215.941"
          y="45.3477"
          width="13.8444"
          height="2.97436"
          transform="rotate(-112 215.941 45.3477)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="223.16"
          y="42.5684"
          width="13.9272"
          height="2.94135"
          transform="rotate(-110 223.16 42.5684)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="230.389"
          y="40.0488"
          width="13.9648"
          height="3.02928"
          transform="rotate(-108 230.389 40.0488)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="237.951"
          y="37.6289"
          width="13.9351"
          height="2.91734"
          transform="rotate(-107 237.951 37.6289)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="245.283"
          y="35.5176"
          width="14.003"
          height="2.98424"
          transform="rotate(-105 245.283 35.5176)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="252.834"
          y="33.5977"
          width="13.9663"
          height="2.89432"
          transform="rotate(-103 252.834 33.5977)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="260.504"
          y="31.8613"
          width="13.9079"
          height="2.97727"
          transform="rotate(-102 260.504 31.8613)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="268.088"
          y="30.3789"
          width="13.955"
          height="2.96171"
          transform="rotate(-100 268.088 30.3789)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="275.658"
          y="29.1875"
          width="13.955"
          height="3.0414"
          transform="rotate(-98 275.658 29.1875)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="283.559"
          y="28.0156"
          width="13.8845"
          height="2.8425"
          transform="rotate(-97 283.559 28.0156)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="291.148"
          y="27.2969"
          width="13.9606"
          height="2.88506"
          transform="rotate(-95 291.148 27.2969)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="298.838"
          y="26.6797"
          width="13.9508"
          height="2.9042"
          transform="rotate(-93 298.838 26.6797)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="306.668"
          y="26.3125"
          width="13.9711"
          height="2.95529"
          transform="rotate(-92 306.668 26.3125)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          x="313.902"
          y="26.1914"
          width="14"
          height="2"
          transform="rotate(-90 313.902 26.1914)"
          fill="rgba(255,255,255,0.2)"
        />
      </g>

      <g ref={group2}>
        <rect
          width="14.0767"
          height="2.18525"
          transform="matrix(0.99946 -0.0328685 -0.0328685 -0.99946 618.834 317)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.0767"
          height="3.07204"
          transform="matrix(0.99946 -0.0328685 -0.0328685 -0.99946 618.834 310)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9"
          height="3.10267"
          transform="matrix(0.997193 -0.0748695 -0.0748695 -0.997193 618.611 302.191)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9351"
          height="2.94942"
          transform="matrix(0.994522 -0.104528 -0.104528 -0.994522 618.004 294.486)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.924"
          height="3.0666"
          transform="matrix(0.990268 -0.139173 -0.139173 -0.990268 617.154 286.934)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.8953"
          height="2.92779"
          transform="matrix(0.987688 -0.156434 -0.156434 -0.987688 615.982 279.02)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.0476"
          height="3.03709"
          transform="matrix(0.981627 -0.190809 -0.190809 -0.981627 614.57 271.529)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9555"
          height="2.94452"
          transform="matrix(0.97437 -0.224951 -0.224951 -0.97437 613.109 263.945)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9769"
          height="3.05555"
          transform="matrix(0.970296 -0.241922 -0.241922 -0.970296 611.285 256.289)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.8692"
          height="2.8911"
          transform="matrix(0.961262 -0.275637 -0.275637 -0.961262 609.328 248.787)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9259"
          height="2.95626"
          transform="matrix(0.951056 -0.309017 -0.309017 -0.951056 607.164 241.404)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9635"
          height="2.93206"
          transform="matrix(0.945518 -0.325568 -0.325568 -0.945518 604.688 233.949)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9521"
          height="3.01716"
          transform="matrix(0.93358 -0.358368 -0.358368 -0.93358 602.148 226.736)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9541"
          height="2.94588"
          transform="matrix(0.927184 -0.374607 -0.374607 -0.927184 599.316 219.322)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9593"
          height="3.02142"
          transform="matrix(0.920505 -0.390731 -0.390731 -0.920505 596.34 212.088)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9753"
          height="3.03199"
          transform="matrix(0.906308 -0.422618 -0.422618 -0.906308 593.225 205.064)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9362"
          height="2.93376"
          transform="matrix(0.898794 -0.438371 -0.438371 -0.898794 589.859 197.889)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.897"
          height="3.0491"
          transform="matrix(0.891006 -0.45399 -0.45399 -0.891006 586.334 190.908)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9967"
          height="3.15061"
          transform="matrix(0.87462 -0.48481 -0.48481 -0.87462 582.701 184.152)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9724"
          height="3.08924"
          transform="matrix(0.857167 -0.515038 -0.515038 -0.857167 578.955 177.445)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9562"
          height="2.9719"
          transform="matrix(0.848048 -0.529919 -0.529919 -0.848048 574.904 170.639)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9692"
          height="2.96934"
          transform="matrix(0.83867 -0.544639 -0.544639 -0.83867 570.695 163.98)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.0322"
          height="3.10085"
          transform="matrix(0.829037 -0.559193 -0.559193 -0.829037 566.324 157.52)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9915"
          height="3.00075"
          transform="matrix(0.809017 -0.587785 -0.587785 -0.809017 561.957 151.156)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9398"
          height="2.95851"
          transform="matrix(0.798635 -0.601815 -0.601815 -0.798635 557.324 144.775)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.957"
          height="3.08469"
          transform="matrix(0.788011 -0.615661 -0.615661 -0.788011 552.508 138.572)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9804"
          height="2.91794"
          transform="matrix(0.766044 -0.642788 -0.642788 -0.766044 547.619 132.52)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9521"
          height="3.12745"
          transform="matrix(0.754709 -0.656059 -0.656059 -0.754709 542.635 126.672)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9458"
          height="2.97117"
          transform="matrix(0.731354 -0.681998 -0.681998 -0.731354 537.459 120.836)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.8559"
          height="3.12647"
          transform="matrix(0.71934 -0.694658 -0.694658 -0.71934 532.193 115.199)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9954"
          height="2.97765"
          transform="matrix(0.694658 -0.71934 -0.71934 -0.694658 526.682 109.625)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9569"
          height="3.0403"
          transform="matrix(0.681998 -0.731354 -0.731354 -0.681998 521.031 104.184)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.1815"
          height="3.00264"
          transform="matrix(0.669131 -0.743145 -0.743145 -0.669131 515.037 98.9902)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9271"
          height="3.01292"
          transform="matrix(0.642788 -0.766044 -0.766044 -0.642788 509.426 93.7695)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9855"
          height="3.01821"
          transform="matrix(0.62932 -0.777146 -0.777146 -0.62932 503.365 88.7715)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9584"
          height="2.97322"
          transform="matrix(0.601815 -0.798635 -0.798635 -0.601815 497.324 83.9727)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.945"
          height="3.03948"
          transform="matrix(0.573576 -0.819152 -0.819152 -0.573576 491.207 79.3516)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9496"
          height="3.0425"
          transform="matrix(0.559193 -0.829037 -0.829037 -0.559193 484.781 74.8203)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.904"
          height="2.94847"
          transform="matrix(0.529919 -0.848048 -0.848048 -0.529919 478.338 70.5195)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9872"
          height="2.92423"
          transform="matrix(0.515038 -0.857167 -0.857167 -0.515038 471.674 66.2812)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.0287"
          height="3.01915"
          transform="matrix(0.5 -0.866025 -0.866025 -0.5 464.896 62.3711)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9861"
          height="2.97598"
          transform="matrix(0.469472 -0.882948 -0.882948 -0.469472 458.119 58.6055)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.0014"
          height="2.94926"
          transform="matrix(0.438371 -0.898794 -0.898794 -0.438371 451.307 55.0195)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9288"
          height="2.90761"
          transform="matrix(0.422618 -0.906308 -0.906308 -0.422618 444.219 51.5762)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9534"
          height="2.95168"
          transform="matrix(0.390731 -0.920505 -0.920505 -0.390731 437.178 48.3926)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.8444"
          height="2.97436"
          transform="matrix(0.374607 -0.927184 -0.927184 -0.374607 429.961 45.3477)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9272"
          height="2.94135"
          transform="matrix(0.34202 -0.939693 -0.939693 -0.34202 422.742 42.5684)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9648"
          height="3.02928"
          transform="matrix(0.309017 -0.951056 -0.951056 -0.309017 415.514 40.0488)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9351"
          height="2.91734"
          transform="matrix(0.292372 -0.956305 -0.956305 -0.292372 407.951 37.6289)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14.003"
          height="2.98424"
          transform="matrix(0.258819 -0.965926 -0.965926 -0.258819 400.619 35.5176)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9663"
          height="2.89432"
          transform="matrix(0.224951 -0.97437 -0.97437 -0.224951 393.068 33.5977)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9079"
          height="2.97727"
          transform="matrix(0.207912 -0.978148 -0.978148 -0.207912 385.398 31.8613)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.955"
          height="2.96171"
          transform="matrix(0.173648 -0.984808 -0.984808 -0.173648 377.814 30.3789)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.955"
          height="3.0414"
          transform="matrix(0.139173 -0.990268 -0.990268 -0.139173 370.244 29.1875)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.8845"
          height="2.8425"
          transform="matrix(0.121869 -0.992546 -0.992546 -0.121869 362.344 28.0156)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9606"
          height="2.88506"
          transform="matrix(0.0871557 -0.996195 -0.996195 -0.0871557 354.754 27.2969)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9508"
          height="2.9042"
          transform="matrix(0.052336 -0.99863 -0.99863 -0.052336 347.064 26.6797)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="13.9711"
          height="2.95529"
          transform="matrix(0.0348995 -0.999391 -0.999391 -0.0348995 339.234 26.3125)"
          fill="rgba(255,255,255,0.2)"
        />
        <rect
          width="14"
          height="2"
          transform="matrix(0 -1 -1 0 332 26.1914)"
          fill="rgba(255,255,255,0.2)"
        />
      </g>
    </svg>
  );
}
