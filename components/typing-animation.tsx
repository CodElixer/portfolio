import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  cursorWidth?: number;
  cursorHeight?: number;
  className?: string;
}

export function TypingAnimation({
  text,
  speed = 50,
  delay = 0,
  cursorWidth = 2,
  cursorHeight = 24,
  className = '',
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (!isInView) {
      setDisplayText('');
      setIsTyping(true);
      return;
    }

    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(startTyping, speed);
      } else {
        setIsTyping(false);
      }
    };

    timeout = setTimeout(() => {
      startTyping();
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed, delay, isInView]);

  return (
    <div ref={ref} className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <motion.span
        className="inline-block ml-1"
        style={{
          width: cursorWidth * 2,
          height: cursorHeight,
          backgroundColor: 'currentColor',
        }}
        animate={{
          opacity: [1, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
} 