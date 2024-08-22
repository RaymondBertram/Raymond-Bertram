import ProjectShowcase from "@/components/project-showcase/project-showcase";
import testImg from "@/../public/images/laptop.jpg";

export default function TeamApp() {
  const lbProject = {
    title: "Team App website", 
    description: "Full website design and build for a concept team collaboration platform. This website also includes a beautiful blog. I have built the website and the blog in Webflow which has one of the best CMS for blog hosting.", 
    link: "/", 
    img: testImg,
  };

  return (
    <section>
      <ProjectShowcase {...lbProject}/>
  </section>
  );
}
  