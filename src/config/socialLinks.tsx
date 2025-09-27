import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { IconType } from "react-icons";
import { BiWorld } from "react-icons/bi";

export interface SocialLink {
  href: string;
  Icon: IconType;
  label: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/Lucascabral95",
    Icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/lucascabral95/",
    Icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://web.facebook.com/lucas.cabral3/",
    Icon: FaFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/in/lucas-gast%C3%B3n-cabral/",
    Icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://portfolio-web-dev-git-main-lucascabral95s-projects.vercel.app/",
    Icon: BiWorld,
    label: "Portfolio",
  },
];
