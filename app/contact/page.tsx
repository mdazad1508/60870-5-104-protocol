import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-orange-300 via-orange-500 to-red-500 text-transparent bg-clip-text">
          Say Hii 👋
        </h1>
        <div className="flex justify-center mb-8">
        <Image
      src="/pic.png"
      alt="Hero image"
      width={400}
      height={300}
    />
        </div>
        <div className="space-y-6 text-lg">
          <p>
            Hello! I&apos;m Azad, a dedicated SCADA Engineer by profession who loves building cool stuffs
            in my free time. I love solving problems, and continuously learning new technologies.
            This project, &quot;104 Convertor,&quot; is an example of blending my professional experience with my hobby of development
            to create useful tools.
          </p>
          <p>
            If you have any questions, suggestions, or just want to connect, feel free to reach out through any of the
            platforms below.
          </p>

          <div className="mt-10 flex justify-center space-x-8">
            <a href="mailto:mdazad15081999@gmail.com" className="text-blue-500 hover:text-blue-400">
              <FaEnvelope size={40} />
            </a>
            <a href="https://www.linkedin.com/in/mdazad1508/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              <FaLinkedin size={40} />
            </a>
            <a href="https://github.com/mdazad1508" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
