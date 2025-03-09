import Typewriter from "./Typewriter";
import "./Home.css";

export default function Home() {
  const typewiterText: string = "Kaikki muu on paskaa, paitsi kusi";
  const delay: number = 2000;

  return (
    <div id="home">
      <Typewriter text={typewiterText} speed={130} delay={delay} />
    </div>
  );
}
