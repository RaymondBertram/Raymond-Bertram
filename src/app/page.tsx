import MyWork from "@/sections/work/my-work.screen";
import Contact from "@/sections/contact/contact";
import Home from "@/sections/home/home.screen";
import Testemonials from "@/sections/testemonials/testemonials.screen";

export default function App() {
  return (
    <main className="app-container flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-white via-slate-200 to-[#E2E2E2]">
      <section id="home" className="section-home flex flex-col h-screen  p-[60px] py-2 justify-center items-center">
        <Home/>
      </section>
      <section id="mywork" className="w-screen mx-6 px-5 lg:p-[60px] md:px-10">
        <MyWork/>
      </section>
      <section id="testemonials" className="flex flex-col h-screen items-center rounded-md lg:p-[60px]">
        {/* <Testemonials/> */}
      </section>
      <section id="contact" className="flex flex-col h-fit w-full p-[60px]">
        <Contact/>
      </section>
    </main>
  );
}
