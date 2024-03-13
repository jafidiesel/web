interface IProjectsEvent {
  title: string;
  description: string;
  link: string;
  demo: string | null;
  img: string | null;
  keyword: string[];
}

interface IProjects {
  projects: IProjectsEvent[];
}

export const projectsData: IProjects = {
  projects: [
    {
      title: "Project Green",
      description:
        "Collaborative & non-profit project to provide recycling point lookup as a service for the end user. Implemented as a Nest API rest and a react front-end.",
      link: "https://github.com/green-devs-test",
      demo: null,
      img: null,
      keyword: ["React", "Nest", "API rest", "jest", "Bootstrap"]
    },
    {
      title: "Algorand Blockchain list",
      description:
        "Front-end code challenge using algorand blockchain explorer. A very simplified explorer that fetch the last 10 transactions and ten blocks every three seconds. Also can inspect a certain block information.",
      link: "https://github.com/jafidiesel/algorandBlockchainList",
      demo: null,
      img: null,
      keyword: ["React", "Algorand", "Blockchain", "API rest", "Bootstrap"]
    },
    {
      title: "p5 code challenge",
      description:
        "Plataforma5 full-stack code challenge. Baggage travel storage system. More info on link.",
      link: "https://github.com/jafidiesel/p5codechallenge",
      demo: null,
      img: null,
      keyword: ["React", "Bootstrap", "API rest", "Postgres", "full-stack"]
    },
    {
      title: "AgronoMe - Final Project",
      description:
        "This Crop Control and Monitoring System is the Final Project of the Information System Engineering Degree, Mendoza Regional University.",
      link: "https://github.com/jafidiesel/proyecto-final-agronome",
      demo: null,
      img: null,
      keyword: ["Angular", "Bootstrap", "API rest", "Python", "Postgres"]
    },
    {
      title: "Tic Tac Toe - University subject",
      description:
        "Traditional tic tac toe developed using Vanilla JS & Materialize. Currently deployed on Netlify.",
      link: "https://github.com/jafidiesel/programacion-avanzada-2020/tree/master/frontend/tic-tac-toe-1",
      demo: "https://tic-tac-toe-pa2020.netlify.app/",
      img: null,
      keyword: ["Vanilla JS", "Javascript", "Materialize", "Netlify"]
    },
    {
      title: "Light Sensor Lamp",
      description: "Arduino hobby project to measure the amount of light in the ambiance.",
      link: "https://github.com/jafidiesel/lightsensorlamp",
      demo: null,
      img: null,
      keyword: ["Arduino", "C++"]
    }
  ]
};
