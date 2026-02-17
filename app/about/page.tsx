import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import React from "react";

const experiences = [
  {
    title: "UX/UI Game Design",
    company: "Freelance",
    duration: "2021 (1 month)",
    description:
      "Responsible for designing and developing the game's UI using HTML, CSS, and JavaScript.",
    stack: "HTML, JavaScript, CSS, jQuery",
  },
  {
    title: "Software Tester",
    company: "Muang Thai Life Assurance",
    duration: "Nov 2022 - Jan 2023 (3 months)",
    description: "Responsible for testing web application systems.",
    stack: "JavaScript, GitLab",
  },
  {
    title: "Full Stack Web Developer",
    company: "Sabuy Technology",
    duration: "June 2023 - Feb 2024 (9 months)",
    description:
      "Responsible for collecting user needs, designing UX/UI, and developing web applications.",
    stack:
      "HTML, JavaScript, SCSS, Angular, TypeScript, C#, .NET Core, GitLab, Docker, Kubernetes",
  },
  {
    title: "Software Developer (API)",
    company: "Entronica Co., Ltd",
    duration: "In Progress ( 1 year 4 months)",
    current: true,
    description:
      "Focusing on backend development, API management, Kubernetes, and system analysis.",
    stack:
      "Node.js, Express, Postman, GitHub, Docker, Kubernetes, DrawIO, Git Flow",
  },
];

const AboutMe = () => {
  return (
    <div className="mx-auto px-4 py-8 max-w-5xl ">
       <h2 className="text-4xl font-semibold mb-3 text-start">About Me</h2>
      <h1 className="text-3xl font-bold mb-4 text-start">
        Jiranon Khemklad (Fuse)
      
      </h1>
              <p className="">🦀 Currently diving into Rust programming language 🟩 Learning NeoVim (manual config + AstroNvim)</p>
      <p className="mb-6 text-start"></p>
      <div className="text-center mb-6 text-start">
        <p className="">📧 Email: jiranon.khemklad@gmail.com</p>
        <p className="">📞 Phone: +66 96 039 6654</p>
        <p className="">📍 Location: Bangkok, Thailand</p>
        <p className="">
          🔗 GitHub:{" "}
          <Link className="" href="https://github.com/Fuse441">
            github.com/Fuse441
          </Link>
          <br />
          🔗 Curriculum Vitae ME:{" "}
          <Link download className="" href="/CV_Jiranon.pdf">
            Download Click
          </Link>
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-start">Experience</h2>
      <div className="relative border-l-2 border-gray-300 ml-4">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`mb-10 ml-6 ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row"
            } md:flex items-start`}
          >
       {/* <span className="absolute left-[-38px] top-5 w-4 h-4 bg-blue-500 rounded-full z-10"></span> */}
            <div className="md:w-1/2 p-4">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p className="">
                {exp.company} | {exp.duration}
              </p>
              {exp.current ? <Chip  color="success">Current</Chip> : null}
            </div>
            <div className="md:w-1/2 p-4">
              <p>{exp.description}</p>
              <p className="font-semibold mt-2">Stacks and Tools:</p>
              <p>{exp.stack}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
