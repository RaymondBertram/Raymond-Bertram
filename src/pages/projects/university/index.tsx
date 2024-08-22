import ProjectShowcase from "@/components/project-showcase/project-showcase";
import testImg from "@/../public/images/laptop.jpg";

export default function University() {
  const universityProjectContent = {
    title: "Health Reward Program", 
    description: "For my bachelor's thesis, I designed a health account and developed a project (both front-end and back-end) independently, comparing it to the analog version. The front-end was built with React, and the back-end with Node Express JS. The goal is to promote workplace health prevention through gamification. Participants must log a certain number of physical activities per week throughout the year, which can then be rewarded by the company with selected incentives. In my program, the reward is an extra vacation day.", 
    link: "https://github.com/RaymondBertram/thesis", 
    img: testImg,
  };
  return (
    <section>
      <ProjectShowcase {...universityProjectContent}/>
  </section>
  )
}
