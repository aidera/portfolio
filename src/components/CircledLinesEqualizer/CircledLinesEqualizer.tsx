import React, { useRef, useEffect } from 'react';
import { useAppSelector } from '../../store/hooks';
import styles from './CircledLinesEqualizer.module.scss';

export default function CircledLinesEqualizer() {
  const isListening = useAppSelector(
    (state) => state.listenAndPronounce.isListening
  );
  const group1 = useRef<SVGGElement>(null);
  const group2 = useRef<SVGGElement>(null);
  const group3 = useRef<SVGGElement>(null);
  const group4 = useRef<SVGGElement>(null);
  const restAnimationIntervalId = useRef<NodeJS.Timeout | null>(null);

  const inactiveColor = 'rgba(0,0,0,0.2)';
  const activeColor = 'rgba(0,0,0,1)';
  const initialWidth = '14';
  const initialHeight = '2';

  useEffect(() => {
    if (!isListening) {
      runRestStateAnimation(group1);
      runRestStateAnimation(group2);
      runRestStateAnimation(group3);
      runRestStateAnimation(group4);

      // Set the interval for the rest state animation
      restAnimationIntervalId.current = setInterval(() => {
        runRestStateAnimation(group1);
        runRestStateAnimation(group2);
        runRestStateAnimation(group3);
        runRestStateAnimation(group4);
      }, 10000);
    } else {
      // Clear the interval when isListening becomes true
      if (restAnimationIntervalId.current) {
        clearInterval(restAnimationIntervalId.current);
        restAnimationIntervalId.current = null;
      }
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      if (restAnimationIntervalId.current) {
        clearInterval(restAnimationIntervalId.current);
      }
    };
  }, [isListening]);

  useEffect(() => {
    let animationFrameId: number | undefined = undefined;
    let audioContext: AudioContext | undefined = undefined;
    let analyser: AnalyserNode | undefined = undefined;
    let source: MediaStreamAudioSourceNode | undefined = undefined;

    if (isListening) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          audioContext = new AudioContext();
          source = audioContext.createMediaStreamSource(stream);
          analyser = audioContext.createAnalyser();
          analyser.fftSize = 256;
          const bufferLength = analyser.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
          source.connect(analyser);

          const animateRects = () => {
            animationFrameId = requestAnimationFrame(animateRects);
            analyser!.getByteFrequencyData(dataArray);

            // From the first to the last rect
            [group1, group3, group2, group4].forEach((groupRef) => {
              if (!groupRef.current) return;
              const rects = groupRef.current.children;
              for (let i = 0; i < rects.length; i++) {
                const width = dataArray[i] / 2.5;
                (rects[i].children[0] as HTMLElement).style.fill = activeColor;
                (rects[i].children[0] as HTMLElement).style.width =
                  width + 'px';
              }
            });

            /** UNCOMMENT IF YOU NEED A REVERSE EFFECT. Do not forget to remove the groups from the function above
            // From the last to the first rect
            [group2, group4].forEach((groupRef) => {
              if (!groupRef.current) return;
              const rects = groupRef.current.children;
              for (let i = 0; i < rects.length; i++) {
                const reversedIndex = rects.length - 1 - i;
                const width = dataArray[reversedIndex] / 2;
                (rects[i].children[0] as HTMLElement).style.fill = activeColor;
                (rects[i].children[0] as HTMLElement).style.width =
                  width + 'px';
              }
            });
             */
          };

          animateRects();
        })
        .catch((err) => {
          console.error('Error accessing the microphone', err);
        });
    } else {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (audioContext) {
        //@ts-ignore
        audioContext.close();
      }

      resetState(group1);
      resetState(group2);
      resetState(group3);
      resetState(group4);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (audioContext) {
        audioContext.close();
      }
    };
  }, [isListening]);

  const createRects = (
    groupRef: React.RefObject<SVGGElement>,
    rotation: number
  ) => {
    let groupTransform = `rotate(${rotation})`;

    return (
      <g ref={groupRef} transform={groupTransform}>
        {Array.from({ length: 58 }).map((_, i) => {
          const circleRadius = 280;
          const angle = (Math.PI / 2) * (i / 58);
          const x = Math.cos(angle) * circleRadius;
          const y = Math.sin(angle) * circleRadius;

          let transform = `rotate(${angle * (180 / Math.PI)} ${x} ${y})`;
          return (
            <g key={transform} transform={transform}>
              <rect
                x={x}
                y={y}
                width={initialWidth}
                height={initialHeight}
                fill="rgba(255,255,255,0.2)"
              />
            </g>
          );
        })}
      </g>
    );
  };

  const runRestStateAnimation = (groupRef: React.RefObject<SVGGElement>) => {
    if (!groupRef.current) return;

    const animationTime = 1000;
    const pauseTime = 500;

    const rects = groupRef.current.children;
    const totalRects = rects.length;

    // Animate to 100
    for (let i = 0; i < totalRects; i++) {
      setTimeout(() => {
        const index = i;
        if (i < totalRects) {
          (rects[index].children[0] as HTMLElement).style.fill = activeColor;
        }
      }, (animationTime / totalRects) * i);
    }

    // Animate back to 0
    setTimeout(() => {
      for (let i = 0; i < totalRects; i++) {
        setTimeout(() => {
          const index = totalRects - 1 - i;
          (rects[index].children[0] as HTMLElement).style.fill = inactiveColor;
        }, (animationTime / totalRects) * i);
      }
    }, animationTime + pauseTime);
  };

  const resetState = (groupRef: React.RefObject<SVGGElement>) => {
    if (!groupRef.current) return;
    const rects = groupRef.current.children;

    for (let i = 0; i < rects.length; i++) {
      const rectElement = rects[i].children[0] as HTMLElement;
      rectElement.style.width = initialWidth + 'px';
      rectElement.style.fill = inactiveColor;
    }
  };

  return (
    <svg
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <g transform="translate( 400, 400)">
        {createRects(group1, 0)}
        {createRects(group2, 90)}
        {createRects(group3, 180)}
        {createRects(group4, 270)}
      </g>
    </svg>
  );
}
