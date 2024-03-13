import { IconDefinition, faSoundcloud, faYoutube } from "@fortawesome/free-brands-svg-icons";

interface ISetLinks {
  id: string;
  link: string;
  text: string;
  icon: IconDefinition;
}

export const setLinks: ISetLinks[] = [
  {
    id: "link-card-house-playground-lounge-housemusic",
    link: "https://www.youtube.com/watch?v=NYhdDDRZETE&ab_channel=JafiBravinMusic",
    text: "House Playground - Lounge #housemusic",
    icon: faYoutube
  },
  {
    id: "link-card-techno-djset-beatroom-2023",
    link: "https://www.youtube.com/watch?v=g2pwa6l7QeU&ab_channel=JafiBravinMusic",
    text: "Techno DJ set Beatroom 2023 - Jafi Bravin",
    icon: faYoutube
  },
  {
    id: "link-card-organic-connection-004",
    link: "https://soundcloud.com/ibizastardustradio/jafi-bravin-organic-connection-004",
    text: "Organic Connection #004 - Ibiza Stardust Radio (🇪🇸)",
    icon: faSoundcloud
  },
  {
    id: "link-card-organic-connection-003",
    link: "https://soundcloud.com/ibizastardustradio/jafi-bravin-organic-connection-003",
    text: "Organic Connection #003 - Ibiza Stardust Radio (🇪🇸)",
    icon: faSoundcloud
  },
  {
    id: "link-card-organic-connection-002",
    link: "https://soundcloud.com/ibizastardustradio/jafi-bravin-organic-connection-002",
    text: "Organic Connection #002 - Ibiza Stardust Radio (🇪🇸)",
    icon: faSoundcloud
  },
  {
    id: "link-card-organic-connection-001",
    link: "https://soundcloud.com/ibizastardustradio/jafi-bravin-organic-connection",
    text: "Organic Connection #001 - Ibiza Stardust Radio (🇪🇸)",
    icon: faSoundcloud
  },
  {
    id: "link-card-git-podcast-session-77",
    link: "https://soundcloud.com/gefangenintrance/git-podcast-session-77-jafi-bravin-into-the-mix",
    text: "GIT Podcast Session 77 # Jafi Bravin Into The Mix (🇩🇪)",
    icon: faSoundcloud
  },
  {
    id: "link-card-set-002",
    link: "https://soundcloud.com/jafibravin-music/set-002-luppulo",
    text: "Set 002 - Luppulo",
    icon: faSoundcloud
  },
  {
    id: "link-card-git-podcast-session-62",
    link: "https://soundcloud.com/gefangenintrance/git-podcast-session-62-jafi-bravin-into-the-mix",
    text: "GIT Podcast Session 62 # Jafi Bravin Into The Mix (🇩🇪)",
    icon: faSoundcloud
  },
  {
    id: "link-card-after-movie-beatroom-showcase-2022",
    link: "https://www.youtube.com/watch?v=tGHOxAtj5t8",
    text: "After Movie - Beatroom showcase 2022",
    icon: faYoutube
  },
  {
    id: "link-card-set-001",
    link: "https://soundcloud.com/jafibravin-music/set-001-progressive",
    text: "Set 001 - Progressive",
    icon: faSoundcloud
  }
];
