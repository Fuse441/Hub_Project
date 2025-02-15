import { Link } from "@heroui/link";
import React from "react";

const AboutMe = () => {
  return (
    <div className="mx-auto px-4 py-8 flex flex-col justify-self-start">
      <h1 className="text-3xl font-bold mb-4">Jiranon Khemklad (Fuse)</h1>
      <p className="text-gray-700">📧 Email: jiranon.khemklad@gmail.com</p>
      <p className="text-gray-700">
        🔗 GitHub:{" "}
        <Link className="text-blue-500" href="https://github.com/Fuse441">
          github.com/Fuse441
        </Link>
        <br />
        🔗 Curriculum Vitae ME :{" "}
        <Link
          download
          className="text-blue-500"
          href="/CV_Jiranon.pdf" // ลิงค์ไปยังไฟล์ใน public folder
        >
          Download Click
        </Link>
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Experience</h2>

      {/* UX/UI Game Design */}
      <div className="flex flex-col">
        <div className="mb-6 flex flex-col">
          <h3 className="text-xl font-medium">UX/UI Game Design</h3>
          <p className="text-gray-600">Freelance | 2021 (1 month)</p>
          <p>
            Responsible for designing and developing the game&apos;s UI using
            HTML, CSS, and JavaScript.
          </p>
          <p className="font-semibold">Stacks and Tools:</p>
          <p>HTML, JavaScript, CSS, jQuery</p>
        </div>

        {/* Software Tester */}
        <div className="mb-6 flex flex-col">
          <h3 className="text-xl font-medium">Software Tester</h3>
          <p className="text-gray-600">
            Muang Thai Life Assurance | Nov 2022 - Jan 2023 (3 months)
          </p>
          <p>Responsible for testing web application systems.</p>
          <p className="font-semibold">Stacks and Tools:</p>
          <p>JavaScript, GitLab</p>
        </div>

        {/* Full Stack Web Developer */}
        <div className="mb-6 flex flex-col">
          <h3 className="text-xl font-medium">Full Stack Web Developer</h3>
          <p className="text-gray-600">
            Sabuy Technology | June 2023 - Feb 2024 (9 months)
          </p>
          <p>
            Responsible for collecting user needs, designing UX/UI, and
            developing web applications.
          </p>
          <p className="font-semibold">Stacks and Tools:</p>
          <p>
            HTML, JavaScript, SCSS, Angular, TypeScript, C#, .NET Core, GitLab,
            Docker, Kubernetes
          </p>
        </div>

        {/* Software Developer (API) */}
        <div className="flex flex-col">
          <h3 className="text-xl font-medium">Software Developer (API)</h3>
          <p className="text-gray-600">Entronica Co., Ltd | In Progress</p>
          <p>
            Focusing on backend development, API management, Kubernetes, and
            system analysis.
          </p>
          <p className="font-semibold">Stacks and Tools:</p>
          <p>
            Node.js, Express, Postman, GitHub, Docker, Kubernetes, DrawIO, Git
            Flow
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
