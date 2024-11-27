import MyWork from "@/sections/work/my-work.screen";
import Contact from "@/sections/contact/contact";
import Home from "@/sections/home/home.screen";
import Service from "@/sections/services/services.screen";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-white via-slate-200 to-[#E2E2E2]">
      <main className="ge-container flex min-h-screen flex-col items-center justify-between">
        <section
          id="home"
          className="flex flex-col h-screen px-[20px] py-2 justify-center items-center"
        >
          <Home />
        </section>
        <section
          id="performance"
          className="flex flex-col min-h-full w-full px-[20px] py-2"
        >
          <Service />
        </section>
        <section
          id="mywork"
          className="w-screen px-15 mx-6 px-5 lg:p-[60px] md:px-10"
        >
          <MyWork />
        </section>
        <section
          id="contact"
          className="flex flex-col h-[50vh] justify-center bg-[#E2E2E2] rounded-md w-full px-6 lg:px-[60px] md:px-10 lg:p-[60px]"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}
