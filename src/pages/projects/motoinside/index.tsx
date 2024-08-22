import ProjectShowcase from "@/components/project-showcase/project-showcase";
import motoInsidePage from "@/../public/images/moto-inside-advertisment.png";

export default function MotoInside() {
  const motoInsideContent = {
    title: "Moto Inside Advertisment", 
    description: "I developed a webpage for a motocross company in the Netherlands. This site serves as an advertisement for motocross events and features a contact form for requesting quotes. The objective is to support users of motorsport facilities, such as circuits, through a freely available app. The goals include maintaining and developing future-proof motorsport venues, attracting new fans and participants, and organizing and facilitating promotional motorsport events. Additionally, there is a focus on encouraging young people to pursue education and careers in the technical sector. I built the website from scratch using Webflow inlcluding embedded source code for graphs, with the design created in Figma.", 
    link: "https://motoinside.app/advertentie", 
    img: motoInsidePage,
  };
  return (
    <section>
      <ProjectShowcase {...motoInsideContent}/>
    </section>
  );
}
