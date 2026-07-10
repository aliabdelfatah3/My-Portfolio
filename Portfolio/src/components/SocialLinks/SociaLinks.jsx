import { FaGithub, FaLinkedin } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex gap-3">
      <a
        href="https://www.linkedin.com/in/ali-abdelfattah-866b91198/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ali Abdelfattah on LinkedIn"
        className="grid h-10 w-10 place-items-center rounded-full border border-dark-border bg-dark-card text-dark-text-primary transition hover:border-accent-primary/50 hover:text-accent-primary"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/aliabdelfatah3"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ali Abdelfattah on GitHub"
        className="grid h-10 w-10 place-items-center rounded-full border border-dark-border bg-dark-card text-dark-text-primary transition hover:border-accent-primary/50 hover:text-accent-primary"
      >
        <FaGithub />
      </a>
    </div>
  );
}

export default SocialLinks;
