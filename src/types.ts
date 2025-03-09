export interface TypewriterProps {
  text: string;
  speed: number;
  delay: number;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  links: { url: string; label: string }[];
  images?: { url: string; alt: string; title: string }[];
}
