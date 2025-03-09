import { useState, useEffect, useRef } from "react";

export function useTypewriter(text: string, speed: number, delay: number) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const indexRef = useRef(0);
  const timerRef = useRef<number | null>(null);
  const cursorTimerRef = useRef<number | null>(null);

  // Handle the cursor blinking effect
  useEffect(() => {
    const cursorBlinkRate = 530; // Standard cursor blink rate in ms

    const blinkCursor = () => {
      setShowCursor((prev) => !prev);
    };

    // Start cursor blinking
    cursorTimerRef.current = window.setInterval(blinkCursor, cursorBlinkRate);

    // Cleanup cursor blink interval
    return () => {
      if (cursorTimerRef.current !== null) {
        clearInterval(cursorTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Reset when text changes
    setDisplayText("");
    indexRef.current = 0;

    // Clear any existing timeouts
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
    }

    const startTyping = () => {
      // This runs after the initial delay
      const typeNextChar = () => {
        if (indexRef.current < text.length) {
          const nextChar = text.charAt(indexRef.current);
          setDisplayText((prev) => prev + nextChar);
          indexRef.current++;

          // Schedule the next character
          timerRef.current = window.setTimeout(typeNextChar, speed);
        }
      };

      // Start the typing process
      typeNextChar();
    };

    // Set the initial delay
    timerRef.current = window.setTimeout(startTyping, delay);

    // Cleanup function
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, [text, speed]);

  // Return text with a blinking cursor
  return `${displayText}${showCursor ? "|" : ""}`;
}
