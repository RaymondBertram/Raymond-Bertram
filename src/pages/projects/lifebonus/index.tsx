import ProjectShowcase from "@/components/project-showcase/project-showcase";
import lifebonus from "@/../public/images/lifebonus-smartphone.webp";

export default function Projects() {
  const lbProject = {
    title: "Lifebonus Mobile App", 
    description: "LifeBonus is a German organization dedicated to enhancing preventive healthcare through the implementation of innovative technologies. The rising number of chronic diseases and the increasing demand for healthcare are placing greater strain on nurses and the healthcare system as a whole. This situation underscores the growing need for effective preventive measures that can identify risk factors early and encourage healthier lifestyles. The goal of this project is to create a customized digital platform called LifeBonus, designed to assist nurses in promoting preventive healthcare measures. The platform will equip nurses with the essential tools and information to reduce the demands of their profession and enhance preventive care. The LifeBonus platform will equip nurses with essential tools and information to effectively prevent diseases in their field. This will result in improved overall patient health and a reduction in care-related issues.", 
    link: "https://www.lifebonus.health/", 
    img: lifebonus,
  };

  return (
    <section>
      <ProjectShowcase {...lbProject}/>
    </section>
  );
};