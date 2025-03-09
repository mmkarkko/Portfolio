import { useTypewriter } from "./hooks/useTypewriter";
import { TypewriterProps } from "./types";

export default function Typewriter({ text, speed, delay }: TypewriterProps) {
  const displayText = useTypewriter(text, speed, delay);

  return <p id="typewriter">{displayText}</p>;
}
