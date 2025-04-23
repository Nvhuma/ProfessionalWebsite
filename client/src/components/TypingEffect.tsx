import { useState, useEffect } from 'react';

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
  startDelay = 500
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Initial delay before starting the typing effect
    if (currentIndex === 0 && isTyping) {
      timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentIndex(0);
            setDisplayText('');
          }, eraseDelay);
        }
      }, startDelay);
      return () => clearTimeout(timeout);
    }

    // Typing effect
    if (isTyping) {
      timeout = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          // We've typed the full text, now wait before erasing
          setTimeout(() => {
            setIsTyping(false);
          }, eraseDelay);
        }
      }, typingSpeed);
    } 
    // Erasing effect
    else {
      timeout = setTimeout(() => {
        if (displayText.length > 0) {
          setDisplayText(prev => prev.slice(0, -1));
        } else {
          // We've erased everything, start typing again
          setIsTyping(true);
          setCurrentIndex(0);
        }
      }, eraseSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, displayText, eraseDelay, eraseSpeed, isTyping, startDelay, text, typingSpeed]);

  return <span className={className}>{displayText}<span className="animate-pulse">|</span></span>;
}