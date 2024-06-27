import About from "@/screens/about/about.screen";
import Home from "@/screens/home/home.screen";

export default function App() {
  return (
    <main className="app-container flex min-h-screen flex-col items-center justify-between px-5 py-2">
      <section id="home" className="section-home flex flex-col h-screen py-2 justify-center items-center">
        <Home/>
      </section>
      <section id="about" className="section-about flex flex-col h-screen py-2">
        <About/>
      </section>
      <section id="experience" className="section-experience flex flex-col h-screen py-2">
        <h1>Experience</h1>
      </section>
      <section id="projects" className="section-projects flex flex-col h-screen py-2">
        <h1>Projects</h1>
      </section>
    </main>
  );
}
