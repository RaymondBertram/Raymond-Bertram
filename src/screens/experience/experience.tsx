import Card from "@/components/card/card";

export default function Experience() {
  const card1 = {
    jobTitle: "Junior Full Stack Software Engineer",
    workDuration: "October 2020 - August 2024",
    desciption:
      "Started my software development journey by designing and building frontend and backend for mobile and admin apps. Gained QA experience to ensure product quality. Developed an app to enhance caretakers' daily routines with intuitive tools, improving their work and the lives of those they assist.",
    link: "https://www.lifebonus.health/",
    skills: ["JavaScript", "TypeScript", "React", "React Native", "AWS", "Figma"],
  };

  const card2 = {
    jobTitle: "Bachelor of Science Sports-/Health CS",
    workDuration: "October 2020 - April 2024",
    desciption:
      "The degree programme qualifies you as a specialist who plans, coordinates, implements and evaluates the technical development of digital training, assistance and data processing systems in the sports, fitness and health sector.",
    link: "https://www.dhfpg.de/",
    skills: ["Math", "Python", "SQL", "UI/UX", "Algorithms", "AI/ML"],
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl p-8 mb-2.5 tracking-wide font-semibold overline">
        Experience
      </h1>
      <div className="card-container">
        <Card
          jobTitle={card1.jobTitle}
          workDuration={card1.workDuration}
          description={card1.desciption}
          link={card1.link}
          skills={card1.skills}
        />
        <Card
          jobTitle={card2.jobTitle}
          workDuration={card2.workDuration}
          description={card2.desciption}
          link={card2.link}
          skills={card2.skills}
        />
      </div>
    </div>
  );
}
