import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ISocialLink {
  link: string;
  text: string;
  icon: IconProp;
}

export const socialLinks: ISocialLink[] = [
  /* optional */
  {
    link: "#",
    text: "Resume",
    icon: "external-link-alt"
  },
  {
    link: "https://www.linkedin.com/in/javierbravin/",
    text: "LinkedIn",
    icon: "external-link-alt"
  },
  {
    link: "https://github.com/jafidiesel",
    text: "Github",
    icon: "external-link-alt"
  },
  {
    link: "https://codepen.io/jafibravin/",
    text: "Codepen",
    icon: "external-link-alt"
  }
];
