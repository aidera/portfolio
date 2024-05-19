import { useEffect, useState } from 'react';

function useTypingEffect(text: string, typingSpeed: number = 150) {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTypedText('');
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setTypedText((prev) => prev + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeoutId);
    }
  }, [index, text, typingSpeed]);

  return typedText;
}

export default useTypingEffect;
