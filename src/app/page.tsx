import About from "@/screens/about/about.screen";
import Contact from "@/screens/contact/contact";
import Experience from "@/screens/experience/experience.screen";
import Home from "@/screens/home/home.screen";
import Projects from "@/screens/projects/projects.screen";
import Testemonials from "@/screens/testemonials/testemonials.screen";

export default function App() {
  return (
    <main className="app-container flex min-h-screen flex-col items-center justify-between px-5 py-2 bg-gradient-to-b from-white via-slate-200 to-[#E2E2E2] lg:px-36">
      <section id="home" className="section-home flex flex-col h-screen py-2 justify-center items-center">
        <Home/>
      </section>
      <section id="about" className="flex flex-col h-fit py-2 lg:px-8 lg:py-2 lg:my-4 lg:h-screen lg:items-center lg:justify-evenly">
        <About/>
      </section>
      <section id="experience" className="flex flex-col h-fit py-2 lg:px-8 lg:py-2 lg:my-4 lg:h-screen">
        <Experience/>
      </section>
      <section id="projects" className="flex flex-col h-fit py-2">
        <Projects/>
      </section>
      <section id="testemonials" className="flex flex-col h-fit items-center rounded-md py-36">
        <Testemonials/>
      </section>
      <section id="contact" className="flex flex-col h-fit w-full py-8">
        <Contact/>
      </section>
    </main>
  );
}
