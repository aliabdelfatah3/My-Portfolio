import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa"; // Import LinkedIn and GitHub icons
import { Link } from "react-router-dom";

function SocialLinks() {
  return (
    <div className="flex flex-col gap-5">
      <div className="pl-10">
        <h1 className="text-black text-left font-eb-garamond text-lg dark:text-white">
          Links:
        </h1>
      </div>
      <div className="flex gap-20 pl-32">
        <a
          href="https://www.linkedin.com/in/ali-abdelfattah-3looloo-866b91198"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-3xl"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/aliabdelfatah3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 text-3xl dark:text-white dark:bg-gray-800 dark:rounded-full"
        >
          <FaGithub />
        </a>
        <a
          href="https://wa.me/+201115455211"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 text-3xl dark:text-green-400"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
