import MyWork from "@/sections/work/my-work.screen";
import Contact from "@/sections/contact/contact";
import Home from "@/sections/home/home.screen";
import About from "@/sections/about/about.screen";

export default function App() {
  return (
    <main className="app-container flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-white via-slate-200 to-[#E2E2E2]">
      <section id="home" className="section-home flex flex-col h-screen p-[60px] py-2 justify-center items-center">
        <Home/>
      </section>
      <section id="mywork" className="w-screen px-15 mx-6 px-5 lg:p-[60px] md:px-10">
        <MyWork/>
      </section>
      <section id="about" className="flex flex-col justify-center h-screen px-5 pt-8 lg:p-[60px] md:px-10">
        <About/>
      </section>
      <section id="contact" className="flex flex-col justify-center bg-[#C0C0C0] rounded-md h-fit w-full px-6 lg:px-[60px] md:px-10 lg:p-[60px]">
        <Contact/>
      </section>
    </main>
  );
}
