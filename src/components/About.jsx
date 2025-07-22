import profile from "../assets/profile.jpg";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
  FaNodeJs,
  FaBootstrap  
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const techIcons = [
  { icon: <FaReact />, name: "React.js" },
  { icon: <FaJsSquare />, name: "JavaScript" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaGithub />, name: "Git & GitHub" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-52 h-52 object-cover shadow-lg border-4 border-blue-500"
          />
        </div>

        {/* About Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6 ">
            I'm a frontend developer with a passion for crafting responsive,
            user-centric applications. With a strong foundation in React and
            Tailwind CSS, I build sleek, maintainable UIs and love turning
            ideas into elegant web experiences.
          </p>

          {/* Tech Stack Icons */}
          <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {techIcons.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-blue-600 dark:text-blue-400"
              >
                <div className="text-3xl">{tech.icon}</div>
                <span className="text-sm mt-1">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
