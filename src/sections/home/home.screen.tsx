import { firaCode } from "@/app/fonts";
import HoverButton from "@/components/hoverButton/hoverButton.component";

export default function Home() {
  return (
    <div className="">
      <p className={`${firaCode.className} py-2`}>Hi, my name is</p>
      <h1 className="text-4xl not-italic tracking-wider py-2">Raymond Bertram</h1>
      <h2 className="text-2xl tracking-wide py-2">Full Stack Software Engineer</h2>
      <p className={`${firaCode.className} text-base py-2`}>
        I am a software engineer specializing on full stack web and mobile app
        development. Currently I am focused on building innovative and
        sustainable technologies to enhance peoples lives.
      </p>
      <HoverButton screenId={"#mywork"} text="see my work" />
    </div>
  );
}
