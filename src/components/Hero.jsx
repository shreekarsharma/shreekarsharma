import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100 dark:bg-gray-900 px-6" id="hero">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
        Hi, I'm <span className="text-blue-600">Shreekar</span>
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
        I'm a Frontend Developer passionate about building beautiful, scalable web apps using React and Tailwind CSS.
      </p>

      <div className="mt-6 flex space-x-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>
      </div>

      <div className="mt-6 flex space-x-6 text-2xl text-gray-600 dark:text-gray-300">
        <a href="https://github.com/shreekarsharma" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/sharmashreekar" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaLinkedin />
        </a>
        <a href="mailto:shreekarsharma4512@gmail.com" className="hover:text-blue-500">
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
};

export default Hero;
