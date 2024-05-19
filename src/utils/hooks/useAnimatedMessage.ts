import { useEffect, useState } from 'react';

export const useAnimatedMessage = (initialMessage: string, ms = 20) => {
  const [animatedMessage, setAnimatedMessage] = useState('');
  const [isPrinting, setIsPrinting] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsPrinting(true);

    const printMessage = async () => {
      for (let i = 0; i <= initialMessage.length; i++) {
        if (!isMounted) return;
        setAnimatedMessage(initialMessage.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, ms));
      }
      setIsPrinting(false);
    };

    printMessage();

    return () => {
      isMounted = false;
    };
  }, [initialMessage, ms]);

  return { animatedMessage, isPrinting };
};
