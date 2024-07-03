import About from "@/screens/about/about.screen";
import Contact from "@/screens/contact/contact";
import Experience from "@/screens/experience/experience.screen";
import Home from "@/screens/home/home.screen";
import Projects from "@/screens/projects/projects.screen";

export default function App() {
  return (
    <main className="app-container flex min-h-screen flex-col items-center justify-between px-5 py-2">
      <section id="home" className="section-home flex flex-col h-screen py-2 justify-center items-center">
        <Home/>
      </section>
      <section id="about" className="flex flex-col h-fit py-2">
        <About/>
      </section>
      <section id="experience" className="flex flex-col h-fit py-2">
        <Experience/>
      </section>
      <section id="projects" className="flex flex-col h-fit py-2">
        <Projects/>
      </section>
      <section id="contact" className="flex flex-col h-fit w-full py-2">
        <Contact/>
      </section>
    </main>
  );
}
