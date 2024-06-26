import Home from "@/screens/home/home.screen";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-5 py-2">
      <section id="home" className="flex flex-col h-screen py-2 justify-center items-center">
        <Home/>
      </section>
      <section id="about" className="flex flex-col h-screen py-2">
        <h1>About</h1>
      </section>
      <section id="experience" className="flex flex-col h-screen py-2">
        <h1>Experience</h1>
      </section>
      <section id="projects" className="flex flex-col h-screen py-2">
        <h1>Projects</h1>
      </section>
      
    </main>
  );
}
