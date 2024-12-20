import React, {
  useRef,
  useImperativeHandle,
  useState,
  forwardRef,
  useEffect,
} from 'react';
import styles from './CircledLinesEqualizer.module.scss';
import { avatarSounds } from '../../../utils/sounds';

export interface CircledLinesEqualizerRef {
  play: () => void;
}

const CircledLinesEqualizer = forwardRef<CircledLinesEqualizerRef>((_, ref) => {
  const [isPronouncing, setIsPronouncing] = useState(false);
  const group1 = useRef<SVGGElement>(null);
  const group2 = useRef<SVGGElement>(null);
  const group3 = useRef<SVGGElement>(null);
  const group4 = useRef<SVGGElement>(null);
  const restAnimationIntervalId = useRef<NodeJS.Timeout | null>(null);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const inactiveColor = 'rgba(0,0,0,0.2)';
  const activeColor = 'rgba(0,0,0,1)';
  const initialWidth = '14';
  const initialHeight = '2';

  const runRestStateAnimation = (groupRef: React.RefObject<SVGGElement>) => {
    if (!groupRef.current) return;

    const animationTime = 1000;
    const pauseTime = 500;

    const rects = groupRef.current.children;
    const totalRects = rects.length;

    // Animate to 100
    for (let i = 0; i < totalRects; i++) {
      setTimeout(
        () => {
          const index = i;
          if (i < totalRects) {
            (rects[index].children[0] as HTMLElement).style.fill = activeColor;
            (rects[index].children[0] as HTMLElement).style.width =
              initialWidth + 'px';
            (rects[index].children[0] as HTMLElement).style.height =
              initialHeight + 'px';
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
            const index = totalRects - 1 - i;
            (rects[index].children[0] as HTMLElement).style.fill =
              inactiveColor;
          },
          (animationTime / totalRects) * i
        );
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

  const playSoundAndAnimateRects = (preferableSoundIndex?: number) => {
    if (currentAudioRef.current && !currentAudioRef.current.paused) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      setIsPronouncing(false);
      return;
    }

    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }

    const audioContext = audioContextRef.current;
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    let lastSoundIndex: null | number = null;

    let soundIndex;
    if (preferableSoundIndex !== undefined) {
      soundIndex = preferableSoundIndex;
    } else {
      do {
        soundIndex = Math.floor(Math.random() * avatarSounds.length);
      } while (soundIndex === lastSoundIndex);
    }
    lastSoundIndex = soundIndex;

    const audioElement = new Audio('assets/sounds/' + avatarSounds[soundIndex]);
    currentAudioRef.current = audioElement;
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(analyser);
    analyser.connect(audioContext.destination);

    audioElement.addEventListener('ended', () => {
      track.disconnect(analyser);
      analyser.disconnect(audioContext.destination);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      setIsPronouncing(false);
    });

    const play = () => {
      audioElement
        .play()
        .then(() => {
          setIsPronouncing(true);
          audioContext.resume();
        })
        .catch(() => {
          setTimeout(() => {
            play();
          }, 2000);
        });
    };

    play();

    const animateRects = () => {
      animationFrameIdRef.current = requestAnimationFrame(animateRects);
      analyser.getByteFrequencyData(dataArray);

      // From the first to the last rect
      [group1, group3, group2, group4].forEach((groupRef) => {
        if (!groupRef.current) return;
        const rects = groupRef.current.children;
        for (let i = 0; i < rects.length; i++) {
          const width = dataArray[i] / 2.5;
          (rects[i].children[0] as HTMLElement).style.fill = activeColor;
          (rects[i].children[0] as HTMLElement).style.width = width + 'px';
        }
      });
    };

    animateRects();
  };

  useImperativeHandle(ref, () => ({
    play: playSoundAndAnimateRects,
  }));

  useEffect(() => {
    if (!isPronouncing) {
      resetState(group1);
      resetState(group2);
      resetState(group3);
      resetState(group4);

      runRestStateAnimation(group1);
      runRestStateAnimation(group2);
      runRestStateAnimation(group3);
      runRestStateAnimation(group4);

      restAnimationIntervalId.current = setInterval(() => {
        runRestStateAnimation(group1);
        runRestStateAnimation(group2);
        runRestStateAnimation(group3);
        runRestStateAnimation(group4);
      }, 10000);
    } else {
      if (restAnimationIntervalId.current) {
        clearInterval(restAnimationIntervalId.current);
        restAnimationIntervalId.current = null;
      }
    }

    return () => {
      if (restAnimationIntervalId.current) {
        clearInterval(restAnimationIntervalId.current);
      }
    };
  }, [isPronouncing]);

  useEffect(() => {
    // Initial rest state animation
    resetState(group1);
    resetState(group2);
    resetState(group3);
    resetState(group4);

    runRestStateAnimation(group1);
    runRestStateAnimation(group2);
    runRestStateAnimation(group3);
    runRestStateAnimation(group4);

    restAnimationIntervalId.current = setInterval(() => {
      runRestStateAnimation(group1);
      runRestStateAnimation(group2);
      runRestStateAnimation(group3);
      runRestStateAnimation(group4);
    }, 10000);

    return () => {
      if (restAnimationIntervalId.current) {
        clearInterval(restAnimationIntervalId.current);
      }
    };
  }, []);

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

  return (
    <svg
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <g transform="translate(400, 400)">
        {createRects(group1, 0)}
        {createRects(group2, 90)}
        {createRects(group3, 180)}
        {createRects(group4, 270)}
      </g>
    </svg>
  );
});

export default CircledLinesEqualizer;
