import { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  eraseSpeed?: number;
  eraseDelay?: number;
  startDelay?: number;
}

export default function TypingEffect({
  text,
  className = '',
  typingSpeed = 100,
  eraseSpeed = 50,
  eraseDelay = 2000,
  startDelay = 1000
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initial delay before starting
    const timeout = setTimeout(() => {
      typeWriter();
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, []);

  const typeWriter = () => {
    if (isTyping && !isDeleting) {
      if (displayText.length < text.length) {
        setDisplayText(text.substring(0, displayText.length + 1));
        typingTimeout.current = setTimeout(typeWriter, typingSpeed);
      } else {
        // Done typing, wait and start erasing if desired
        // setIsDeleting(true);
        // typingTimeout.current = setTimeout(typeWriter, eraseDelay);
        setIsTyping(false); // Stop here, don't erase
      }
    } else if (isDeleting) {
      if (displayText.length > 0) {
        setDisplayText(text.substring(0, displayText.length - 1));
        typingTimeout.current = setTimeout(typeWriter, eraseSpeed);
      } else {
        // Done erasing, start typing again
        setIsDeleting(false);
        typingTimeout.current = setTimeout(typeWriter, typingSpeed);
      }
    }
  };

  return (
    <span className={`${className} relative`}>
      {displayText}
      {isTyping && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}
